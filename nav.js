function showSidebar(){
	var mobvar = document.getElementsByClassName("mob-navbar")[0];
	var sidebar = document.getElementsByClassName("side-navbar")[0];
			
	if (mobvar.style.display == "block"){
		mobvar.style.display = "none";
		sidebar.style.backgroundColor = "transparent";
	}
	else{
		mobvar.style.display = "block";
		sidebar.style.backgroundColor = "mediumpurple";
	}
}