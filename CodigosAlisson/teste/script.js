function openTab(btnName) {
    var i, tabContent;
    tabContent = document.getElementsByClassName("aba");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "None";
    }
    document.getElementById(btnName).style.display = "block";
}