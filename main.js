var newWindow = false;
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
	if(newWindow === true){
		newWindow = false;
		console.log(newWindow);
	}
	else if(newWindow === false){
		newWindow = true;
		console.log(newWindow);
	}
}

function openLink(link){
	if(newWindow === true){
		window.open(link,"_blank");
	}
	else if(newWindow === false){
		window.open(link,"_self");
	}
}