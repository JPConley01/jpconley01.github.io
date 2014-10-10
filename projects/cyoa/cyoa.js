$("#hide1").hide();
$("#hide2").hide();
$("#hide3").hide();
$("#hide4").hide();

var play = function() {
    $("#hide1").show();
};

var getAge = function() {
    var age;
    age = $("#agePrompt").val();
    $("#line1").append("<p>You are age "+age+", good for you!</p>");
    if(age > 13) {
        $("#line1").append("<p>You're allowed to play, but I take no responsibility for any mental damage.</p>");
    } else {
        $("#line1").append("<p>Play on!</p>");
    }
    $("#line1").append("<p>You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'</p>");
    $("#line1").append("<p>Who wants to race me?</p>");
    $("#hide2").show();
};

var doRace = function(yesno) {
    if(yesno) {
        $("#line2").append("<p>You and Bieber start racing. It's neck and neck! You win by a shoelace!</p>");
    } else {
        $("#line2").append("<p>Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'</p>");
    }
    $("#hide3").show();
};

var rate = function() {
    var rating;
    rating = $("input[name='rating']:checked").val();
    $("#feedback").append("<p>You rated it at: "+rating+"/10</p>");
    if(rating > 8) {
        $("#feedback").append("<p>Thank you! We should hang out lolol</p>");
    } else {
        $("#feedback").append("<p>Fuck you. Die in a fire.</p>");
    }
    $("#hide4").show();
};
