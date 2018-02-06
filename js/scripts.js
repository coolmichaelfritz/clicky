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
});
