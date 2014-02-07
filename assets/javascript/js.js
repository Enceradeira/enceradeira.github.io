var positionNavHeader = function() {
    var contentPosition = $("section#content").position();
    // $("header#navHeader").offset({ top: 30, left: contentPosition.left });
    
    $("header#navHeader").css({
        position: 'fixed',
        top: 30,
        left: contentPosition.left
    });
};

$(window).resize(positionNavHeader);
$(window).ready(positionNavHeader);

$(window).ready(function() {
    $("#main-nav a").click(function(evt) {
        var link = $(evt.target);
        var hash = link.data("hash");
        var offset = $("#" + hash).offset();
        var scrollFineAdjustment = 0;
        switch(hash) {
            case "home":
                scrollFineAdjustment = -31;
                break;
            case "about":
                scrollFineAdjustment = -82;
                break;
            case "clients":
                scrollFineAdjustment = -73;
                break;
            case "services":
                scrollFineAdjustment = -109;
                break;
            case "work":
                scrollFineAdjustment = -31;
                break;
            case "connect":
                scrollFineAdjustment = -94;
                break;
            case "contact":
                scrollFineAdjustment = -235;
                break;
                
                
        }
        $('html, body').animate({
            scrollTop: (offset.top + scrollFineAdjustment) + "px"
        });
        

    });
});