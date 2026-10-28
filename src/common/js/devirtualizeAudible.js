'use strict';

(() => {
  // ?devirtualize=no disables the extension for that page load
  if (new URLSearchParams(location.search).get('devirtualize') === 'no') {
    return;
  }

  // Matched against each comma-separated name after the "Narrated by:" prefix
  const AI_NARRATOR_PATTERNS = [
    /^Virtual Voice/i,
    /^AI Voice/i,
    /^AI Narrator/i,
    /^Synthesized Voice/i,
    /voice replica/i,
    /digital(ized)? voice/i,
  ];

  // Search term that makes Audible exclude synthetic narrations server-side
  const EXCLUDE_TERM = '-virtual_voice';
  const PREF_KEY = 'devirtualizer.excludeAiNarrated';
  const SUMMARY_ID = 'devirtualizer-summary';
  const CHECKBOX_ID = 'devirtualizer-exclude';

  let titlesRemoved = 0;

  function updateSummary() {
    if (!titlesRemoved) {
      return;
    }
    const target = document.querySelector('.resultsSummarySubheading');
    if (!target) {
      return;
    }
    let summary = document.getElementById(SUMMARY_ID);
    if (!summary) {
      summary = document.createElement('p');
      summary.id = SUMMARY_ID;
      summary.appendChild(document.createElement('strike'));
    }
    if (summary.parentElement !== target) {
      target.appendChild(summary);
    }
    const text = `${titlesRemoved} AI-NARRATED TITLE(S) REMOVED BY DEVIRTUALIZER`;
    // Only write on change, otherwise the observer would retrigger forever
    if (summary.firstChild.textContent !== text) {
      summary.firstChild.textContent = text;
    }
  }

  function filterResults() {
    for (const label of document.querySelectorAll('.narratorLabel')) {
      // .narratorLabel is itself an li, so select the result card by class
      const card = label.closest('li.productListItem');
      const match = label.textContent.replace(/\s+/g, ' ').trim().match(/^Narrated by:\s*(\S.*)/i);
      const names = match ? match[1].split(',').map((name) => name.trim()) : [];
      if (card && names.some((name) => AI_NARRATOR_PATTERNS.some((re) => re.test(name)))) {
        card.remove();
        titlesRemoved++;
      }
    }
    updateSummary();
  }

  function readPref() {
    try {
      return localStorage.getItem(PREF_KEY) !== 'false';
    } catch {
      return true;
    }
  }

  function writePref(value) {
    try {
      localStorage.setItem(PREF_KEY, String(value));
    } catch {
      // Storage blocked; the checkbox still works for this page load
    }
  }

  function setupAdvancedSearch() {
    const keywords = document.getElementById('ad-search-key');
    const form = keywords?.form;
    if (!form || document.getElementById(CHECKBOX_ID)) {
      return;
    }

    // No name attribute, so the checkbox itself is never submitted
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = CHECKBOX_ID;
    checkbox.checked = readPref();
    checkbox.addEventListener('change', () => writePref(checkbox.checked));

    const label = document.createElement('label');
    label.style.display = 'block';
    label.append(checkbox, ' Exclude AI-narrated titles');
    keywords.parentElement.after(label);

    form.addEventListener('submit', () => {
      if (!checkbox.checked) {
        return;
      }
      const words = keywords.value.trim().split(/\s+/).filter(Boolean);
      if (!words.some((w) => w.toLowerCase() === EXCLUDE_TERM)) {
        words.push(EXCLUDE_TERM);
        keywords.value = words.join(' ');
      }
    });
  }

  function run() {
    filterResults();
    setupAdvancedSearch();
  }

  run();

  // Re-run at most every 200 ms while Audible changes the page; run() is idempotent.
  // A throttle, not a debounce, so pages that never stop mutating still get filtered.
  let pending = false;
  new MutationObserver(() => {
    if (!pending) {
      pending = true;
      setTimeout(() => {
        pending = false;
        run();
      }, 200);
    }
  }).observe(document.body, { childList: true, subtree: true });
})();
