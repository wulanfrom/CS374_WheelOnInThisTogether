$(document).ready(function () {
    // ROUTES SEARCHING
    $('.our_buttons').on('click', function() {
        let inputsFrom = document.getElementsByClassName('form-control')[0].value;
        let inputsTo = document.getElementsByClassName('form-control')[1].value;
        let alertMessage = document.getElementsByClassName('alertMessage')[0];

        $('.alertMessage').addClass('alert alert-danger');

        if ((inputsFrom == "") && (inputsTo == "")) { 
            alertMessage.innerHTML = "Please fill in your starting place and destination."
        }
        else if (inputsFrom == "") { 
            alertMessage.innerHTML = "Please fill in your starting place.";
        }
        else if (inputsTo == "") { 
            alertMessage.innerHTML = "Please fill in your destination.";
        }
        else {
            alertMessage.innerHTML = "";
            window.open('routes-index.html','_self');            
        }
    })

    // HOMEPAGE ANIMATION
    $(document).on('mouseenter', '.rest-card', function(){
        $(this).animate({marginTop: "-=3%"}, 150);
    });   

    $(document).on('mouseleave', '.rest-card', function(){
        $(this).animate({marginTop: "0"}, 150);
    }); 

    // FORUM SPECIFIC CATEGORIES 
    $('.advice_card').on('click', function() {
        let categoryName = $(this).find('.category').html();
        if (categoryName == "Advice") { window.open('forum_homepage_advice.html','_self'); }
        else if (categoryName == "Health") { window.open('forum_homepage_health.html','_self'); }
        else if (categoryName == "Events") { window.open('forum_homepage_events.html','_self'); }
    }) 

    //RATES CLICK PLACES
    $('.rest-card').on('click', function() {
        let restaurantRates = $(this).find('.card-title').html();
        if (restaurantRates == "BUFF-EAT") { console.log("Buff-Eat"); }
        else if (restaurantRates == "JFC") { console.log("JFC"); }
        else if (restaurantRates == "PIZZY") { console.log("Pizzy"); }
        else if (restaurantRates == "MCDONALDS") { console.log("McDonalds"); }
    }) 
});