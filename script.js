$(".no-like").click(function() {
    $(".like").show();
    $(".no-like").hide();
});

$(".like").click(function() {
    $(".like").hide();
    $(".no-like").show();
});

$(".caption-button").click(function() {
    $(".caption").text("Am I a panda now?");
});

$(".image-button").click(function() {
    $(".dogs").attr("src", "http://1.bp.blogspot.com/-0tid88OX8mI/UUioA8SQbII/AAAAAAAADBM/zCEnHIM3yAA/s1600/Cute-Dog-2.jpg");
});

$(".border-button").click(function() {
    $(".dogs").css("border", "10px dotted #a7cfcc");
});

$(".reset-button").click(function() {
    location.reload();
});