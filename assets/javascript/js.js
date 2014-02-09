var positionNavHeader = function() {
    var contentPosition = $("section#content").position();
    // $("header#navHeader").offset({ top: 30, left: contentPosition.left });
    
    $("header#navHeader").css({
        position: 'fixed',
        top: 30,
        left: contentPosition.left
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
            nextArticelId = $("#content").first().attr('id');
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
});