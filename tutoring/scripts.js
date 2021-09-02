const infoPanels = [document.getElementById("groupInfo"), document.getElementById("individualInfo")];

function infoClick(panel) {
    console.log(panel)
    if (!infoPanels[panel].classList.contains("infoVis")) {
        infoPanels[panel].classList.add("infoVis");
        infoPanels[1 - panel].classList.remove("infoVis");
    }
    else {
        infoPanels[panel].classList.remove("infoVis");
    }
}