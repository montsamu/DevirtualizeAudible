currentlyRemoving = false; narratorLabels = document.getElementsByClassName("narratorLabel"); narratorLabelsClone = [...narratorLabels]; for (i=0;i<narratorLabelsClone.length;i++) {
  if(narratorLabelsClone[i].textContent.trim().match(/^Narrated by:( |\n)*Virtual Voice/)) {
    if (currentlyRemoving ) {
      narratorLabelsClone[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    } else {
      currentlyRemoving = true;
      narratorLabelsClone[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.setHTMLUnsafe(`<li class="bc-list-item productListItem"><div class="bc-row-responsive"><div><p><strike>REMOVED VIRTUAL VOICE TITLE(S)</strike></p><br/><br/></div><div class="bc-divider bc-divider-secondary"><p/></div></div></li>`);
    }
  } else {
    currentlyRemoving = false;
  }
}
