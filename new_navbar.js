$(document).ready(function () {
    $('.nav-item .nav-link').on('click', function () {
        if (this.innerHTML == "Ask a Question") { console.log("Forum"); }
        else if (this.innerHTML == "Suggest a Route") { console.log("Routes"); }
        else if (this.innerHTML == "Rate a Place") { console.log("Rates"); }
        //window.open('htmlLink', '_self');
    });

    $('.navbar-brand').on('click', function() {
        window.open('new_homepage.html', '_self');
    })
});