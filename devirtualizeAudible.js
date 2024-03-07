narratorLabels = document.getElementsByClassName("narratorLabel"); narratorLabelsClone = [...narratorLabels]; for (i=0;i<narratorLabelsClone.length;i++) {
  if(narratorLabelsClone[i].textContent.trim().match(/^Narrated by:( |\n)*Virtual Voice/)) {
    narratorLabelsClone[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove(); 
  }
}
