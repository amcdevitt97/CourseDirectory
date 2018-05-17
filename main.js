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

function toggleNewTab(){
	var state = document.getElementsByClassName("courseLink")[0].getAttribute("target");
	if(state === "_blank"){
		document.getElementsByClassName("courseLink")[0].setAttribute("target", "");
		console.log("turned off");
	}
	else if(state === ""){
		document.getElementsByClassName("courseLink")[0].setAttribute("target", "_blank");
		console.log("turned on");
	}
	
}