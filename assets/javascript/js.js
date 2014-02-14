var positionNavHeader = function() {
    var contentPosition = $("section#content").offset();
    
    $("header#navHeader").css({
        position: 'fixed',
        top: 30,
        left: contentPosition.left
    });
    $("header#navHeader #shareThis").css({
        position: 'fixed',
        top: 30,
        right: 0
    });
};

var scrollToArticel = function(articelId) {
    var offset = $(articelId).offset();
    if (offset == undefined)
        return;
    var scrollFineAdjustment = 0;
    switch (articelId) {
        case "#home":
            scrollFineAdjustment = -31;
            break;
        case "#about":
            scrollFineAdjustment = -82;
            break;
        case "#clients":
            scrollFineAdjustment = -73;
            break;
        case "#services":
            scrollFineAdjustment = -109;
            break;
        case "#work":
            scrollFineAdjustment = -31;
            break;
        case "#connect":
            scrollFineAdjustment = -94;
            break;
        case "#contact":
            scrollFineAdjustment = -235;
            break;


    }
    $('html, body').animate({
        scrollTop: (offset.top + scrollFineAdjustment) + "px"
    });
    window.location.hash = articelId;
};

var hideSubnav2 = function() {
    $("#vertical-links .subnav2").hide();
};

var openSubnav2 = function () {
    hideSubnav2();
    $(this).siblings(".subnav2").show();
};

var animateNewSign = function() {
    var sign = $("#home #new_sign_background");
    var height = sign.height();

    sign.css('top', -height + "px");
    sign.animate({
        'top': "35px"
    }, 1000, "linear", function () {
        sign.animate({
            'top': "20px"
        },250);
    });
};

var moveBlogFrog = function(blogfrog, position, way, continuation) {
    blogfrog.animate({
        left: (position + way) + "px"
    }, 2500, "swing", continuation);
};

var moveBlogFrogAround = function (blogfrog, position, way, continuation) {
    
    var waitTime = Math.floor((Math.random() * 4000) + 4000);
    moveBlogFrog(blogfrog, position, -way, function () {
        setTimeout(function () {
            moveBlogFrog(blogfrog, position - way, way, function () {
                setTimeout(function() {
                    moveBlogFrog(blogfrog, position, -way, function() { continuation(blogfrog, position, way,continuation); });
                }, 500);
            });
        }, waitTime);
    });
};

var animateBlogFrog = function() {
    var blogfrog = $("#home #blogfrog");
    var left = parseInt(blogfrog.css('left').replace(/px/,""));
    var way = 55;
    var rightPosition = left + way;
   
    blogfrog.css('left', String(rightPosition) + "px");
    
    setTimeout(function () {
        moveBlogFrogAround(blogfrog, rightPosition, way, moveBlogFrogAround);
    }, 1000);
};

var moveHomeBackground = function (homeBackground,nextXPosition, continuation) {
    setTimeout(function () {
        var currPosition = homeBackground.css('background-position');
        console.log("bg:" + currPosition);
        homeBackground.css('background-position', nextXPosition + "px " + 0 + "px");
        continuation(homeBackground, nextXPosition - 1, continuation);
    }, 30);
};

var animateHome = function() {
    var homeBackground = $("#container");
    moveHomeBackground(homeBackground, 0, moveHomeBackground);
};

$(window).resize(positionNavHeader);
$(window).ready(positionNavHeader);

$(window).ready(function () {
    
    $("#exploreheader .upArrow").click(function () {
        var location = window.location.hash;
        if (location == null || location.length == 0) 
            return; // we are on the top 
       
        var nextArticelId = $(location).prev().attr('id');
        if (nextArticelId == undefined)
            return; // we are on the top (#home)
        scrollToArticel("#" + nextArticelId);
    });
    $("#exploreheader .downArrow").click(function () {
        var nextArticelId;
        var location = window.location.hash;
        if (location == null || location.length == 0) {
            nextArticelId = $("#content").children().first().next().attr('id');
        } else {
            nextArticelId = $(location).next().attr('id');
        }
        if (nextArticelId == undefined)
            return; // we are on the bottom
        scrollToArticel("#" + nextArticelId);
    });
    $("#main-nav a").click(function(evt) {
        var link = $(evt.target);
        var articelName = link.data("hash");
        scrollToArticel("#" + articelName);
    });
    hideSubnav2();
    $("#vertical-links li .mainLinkMe").click(openSubnav2);

    animateNewSign();
    animateBlogFrog();
    animateHome();
});