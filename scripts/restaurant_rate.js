var firebaseConfig = {
    apiKey: "AIzaSyDTFFrlgMNcm4J0uJixFbI5U9pIYDayUmY",
    authDomain: "wheeloninthistogether123.firebaseapp.com",
    databaseURL: "https://wheeloninthistogether123.firebaseio.com",
    projectId: "wheeloninthistogether123",
    storageBucket: "wheeloninthistogether123.appspot.com",
    messagingSenderId: "728495178731",
    appId: "1:728495178731:web:06792b904ccd5693b2cfae",
    measurementId: "G-2SRFF7XTB2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search)
    var rest_name = urlParams.get('name')
    var rest_key = null

    //----------------INPUT STAR THANG-------------------------
    var facility_input = null;
    var access_input = null;
    var safety_input = null;
    turn_rating_on()

    get_restaurant_db(rest_name).then((res) => {
        $(".spinner").hide()
        rest_key = res.key
        console.log(res.val())
        display_rating_page(res.val())
    })




    function turn_rating_on() {
        $(".icon-star").hover(function() {
            $(this).attr("src", "../icons/star-fill.svg")
            $(this).removeClass("icon-star").addClass("icon-star-fill")
            var star_val = parseInt($(this).data('value'))
            
            //Highlight all the required star
            $(this).parent().children().each(function() {
                if ($(this).data('value') < star_val) {
                    $(this).attr("src", "../icons/star-fill.svg")
                    $(this).removeClass("icon-star").addClass("icon-star-fill")
                }
            })
        // }
        }, function() {
            $(this).attr("src", "../icons/star.svg")
            $(this).removeClass("icon-star-fill").addClass("icon-star")
            var star_val = parseInt($(this).data('value'))
            
            //Remove the highlight of all the required star
            $(this).parent().children().each(function() {
                if ($(this).data('value') < star_val) {
                    $(this).attr("src", "../icons/star.svg")
                    $(this).removeClass("icon-star-fill").addClass("icon-star")
                }
            })
        })
    
        //Store chosen value
        $(".icon-star").click(function() {
            $(this).off('mouseenter mouseleave')
            $(this).attr("src", "../icons/star-fill.svg")
            $(this).removeClass("icon-star").addClass("icon-star-fill")
            var star_val = parseInt($(this).data('value'))
            var category = $(this).parent().attr('id')
            //Highlight all the required star
            $(this).parent().children().each(function() {
                $(this).off('mouseenter mouseleave')
                if ($(this).data('value') <= star_val) {
                    $(this).attr("src", "../icons/star-fill.svg")
                    $(this).removeClass("icon-star").addClass("icon-star-fill")
                } else {
                    $(this).attr("src", "../icons/star.svg")
                    $(this).removeClass("icon-star-fill").addClass("icon-star")
                }
            })
            if (category=="facility-input") {
                facility_input = star_val
                console.log(star_val)
            }
            else if (category=="accessibility-input") {
                access_input = star_val
                console.log(star_val)
            }
            else {
                safety_input = star_val
                console.log(star_val)
            }
            console.log(category)
        })
    
    }
})

async function get_restaurant_db(rest_name) {
    try {
        var ref = firebase.database().ref("restaurant/")
        var result = null
        await ref.orderByChild('name').equalTo(rest_name).once('value', function(snapshot) {
            snapshot.forEach(res => {
                result = res
            });
        })
        // await display_image(rest_name)
    }
    finally {
        return result
    }
}

function comment_format(rating_entry) {
    //Comment star
    var facility_star = "<div class='col-lg-6 col-md-6 col-sm-6 col-6'><h5>" + generate_star(user_rating.facility) +"</h5></div>"
    var facility_title = "<div class='col-lg-5 col-md-6 col-sm-6 col-6'><h5 class='category-title'> Facility </h5></div>"
    var facility_combined = "<div class='row'>" + facility_title + facility_star + "</div>"

    var accessibility_star = "<div class='col-lg-6 col-md-6 col-sm-6 col-6'><h5>" + generate_star(user_rating.accessibility) +"</h5></div>"
    var safety_star = "<h5>" + generate_star(user_rating.safety) +"</h5>"
}

function display_comment(restaurant_db) {
    const user_ratings = restaurant_db.user_ratings
    console.log(user_ratings)
    for (var key of Object.keys(user_ratings)) {
        $("#comment-list").prepend(comment_format(user_ratings[key]))
    }
}

function display_rating_page(rest_db) {
    $(".rstrnt-name").text(rest_db.name)

    //Display rating star
    const rating = rest_db.rating
    $(".rstrnt-overall").html(generate_star(rating.overall, 36))
    $(".rstrnt-facility").html(generate_star(rating.facility, 24))
    $(".rstrnt-access").html(generate_star(rating.accessibility, 24))
    $(".rstrnt-safety").html(generate_star(rating.safety, 24))

    //Display restaurant info
    $("#phone").text(rest_db.phone)
    $("#tel").text(rest_db.tel)
    $("#website").text(rest_db.site)

    //Display individual rating
    // display_comment(rest_db)
}

function generate_star(num, size=24) {
    var star_html = ""
    for (i = 0; i < num; i++) {
        star_html += "<img src='../icons/star-fill.svg' width='"+size+"' height='"+size+"'></img>\n"
    }
    return star_html
}

