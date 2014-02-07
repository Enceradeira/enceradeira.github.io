var positionNavHeader = function() {
    var contentPosition = $("section#content").position();
    $("header#navHeader").offset({ top: 30, left: contentPosition.left });
};

$(window).resize(positionNavHeader);
$(window).ready(positionNavHeader);