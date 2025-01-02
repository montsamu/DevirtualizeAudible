const u = new URL(document.URL);
if ( -1 != ["/newreleases","/search"].indexOf(u.pathname) ) {
 if ( "no"!=u.searchParams.get('devirtualize') ) {

  titlesRemoved = 0;
  narratorLabels = document.getElementsByClassName("narratorLabel");
  narratorLabelsClone = [...narratorLabels];

  for (i=0;i<narratorLabelsClone.length;i++) {
    if( narratorLabelsClone[i].textContent.trim().match(/^Narrated by:( |\n)*Virtual Voice/) || narratorLabelsClone[i].textContent.trim().match(/^Narrated by:( |\n)*.* voice replica/) ) {
      removalTargetElement = narratorLabelsClone[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
      if ("UL"==removalTargetElement.parentElement.nodeName) {
        removalTargetElement.remove();
        titlesRemoved++;
      }
    }
  }
  if (titlesRemoved) {
    summaryTargetElements = document.getElementsByClassName("resultsSummarySubheading");
    if (0 < summaryTargetElements.length) {
      summaryTargetElement = summaryTargetElements[0];
      if ("SPAN"==summaryTargetElement.nodeName) {
        removedByDevirtualizerText = document.createTextNode(`${titlesRemoved} VIRTUAL VOICE TITLE(S) REMOVED BY DEVIRTUALIZER`);
        removedByDevirtualizerStrike = document.createElement("strike");
        removedByDevirtualizerStrike.appendChild(removedByDevirtualizerText);
        removedByDevirtualizerParagraph = document.createElement("p");
        removedByDevirtualizerParagraph.appendChild(removedByDevirtualizerStrike);
        summaryTargetElement.appendChild(removedByDevirtualizerParagraph);
      }
    }
  }
 }
}
