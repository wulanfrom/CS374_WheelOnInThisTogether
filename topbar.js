$( document ).ready(function() {	
	var Logo = document.getElementById('logo');
	var SideBar = document.getElementById('sideBarOpen');
	var wholePage = document.getElementsByClassName('outside_topbar');

	function bindEvents() {
		Logo.onclick = function() {
			console.log("Return to Homepage");
			window.open("homepage.html", "_self");
		}
		SideBar.onclick = function() {
			console.log("Open the sidebar");
			// $(className).style.opacity = "0.1";
			window.open("sidebar.html", "_self");
		}
	}

	bindEvents();
});