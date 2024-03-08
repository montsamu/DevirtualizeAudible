if ( -1 != ["/newreleases","/search"].indexOf(new URL(document.URL).pathname) ) {
  removedByDevirtualizerText = document.createTextNode("VIRTUAL VOICE TITLE(S) REMOVED BY DEVIRTUALIZER");
  removedByDevirtualizerStrike = document.createElement("strike");
  removedByDevirtualizerStrike.appendChild(removedByDevirtualizerText);
  removedByDevirtualizerParagraph = document.createElement("p");
  removedByDevirtualizerParagraph.appendChild(removedByDevirtualizerStrike);

  currentlyRemoving = false; narratorLabels = document.getElementsByClassName("narratorLabel"); narratorLabelsClone = [...narratorLabels]; for (i=0;i<narratorLabelsClone.length;i++) {
    if(narratorLabelsClone[i].textContent.trim().match(/^Narrated by:( |\n)*Virtual Voice/)) {
      narratorLabelsClone[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
      if (!currentlyRemoving ) {
        currentlyRemoving = true;
        document.getElementsByClassName("resultsSummarySubheading")[0].appendChild(removedByDevirtualizerParagraph);
      }
    }
  }
}
