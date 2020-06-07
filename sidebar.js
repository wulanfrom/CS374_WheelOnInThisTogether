$( document ).ready(function() {		
	function bindEvents() {
		var SideBar = document.getElementById('sideBarClose');
		var Options = document.getElementsByClassName('options');

		SideBar.onclick = function() { //close sidebar
			console.log("Closing sidebar");
			// window.open(url);
		}

		Options[0].onclick = function() { // go to Forum page
			console.log("Proceeding to Forum page");
			window.open("forum_homepage.html", "_self");
		}

		Options[1].onclick = function() { // go to Routes page
			console.log("Proceeding to Routes page");
			// window.open(url);
		}

		Options[2].onclick = function() { // go to Rates page
			console.log("Proceeding to Rates page");
			window.open("rates.html", "_self");
		}
	}

	bindEvents();
});

