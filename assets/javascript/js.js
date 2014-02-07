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
        $('html, body').animate({
            scrollTop: offset.top,
            scrollLeft: offset.left
        });
    });
});