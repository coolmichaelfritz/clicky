jQuery(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle("fast");
    $("#initially-hidden").toggle("fast");

  });

  $(".clickable-fade").click(function() {
    $("#initially-showing-fade").fadeToggle("slow");
    $("#initially-hidden-fade").fadeToggle("slow");

  });

  $(".clickable-slide").click(function() {
    $("#initially-showing-slide").slideToggle(3000);
    $("#initially-hidden-slide").slideToggle(1000);

  });
$("button#green").click(function(){
  $("body").removeClass();
  $("body").addClass("green-background");
});

$("button#yellow").click(function() {
  $("body").removeClass();
  $("body").addClass("yellow-background");
});

$("button#red").click(function() {
  $("body").removeClass();
  $("body").addClass("red-background");
});

$("button#black").click(function(){
  $("body").addClass("text-white");
  $("body").addClass("black-background")
});

$("button#reset").click(function(){
  $("body").removeClass();
})

});
