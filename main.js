function showTable(div) {
    var x = document.getElementById(div);
    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("CSbutton").innerHTML = "Show";
    }
    else if( x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("CSbutton").innerHTML = "Collapse";
    }
}