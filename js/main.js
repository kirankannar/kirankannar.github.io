$(window).load(function() {
        $(".pre-load").fadeOut("slow");
    });

$("#menu").click(function(){

  $("#menu_popup").attr("class","overlay");
  $("#menu").attr("class","navicon navicon_hidden");
  $("body").css("overflow","hidden");
});
$("#menu_close").click(function(){

  $("#menu_popup").attr("class","overlay o_hidden");
  $("#menu").attr("class","navicon");
  $("body").css("overflow","");
});

$("#menulist").on('click', 'li', function() {

  $("#menu_popup").attr("class","overlay o_hidden");
  $("#menu").attr("class","navicon");
  $("body").css("overflow","");
});