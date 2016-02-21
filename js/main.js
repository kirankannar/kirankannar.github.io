$(window).load(function() {
        $(".pre-load").fadeOut("slow");
    });

$("#menu").click(function(){

  $("#menu_popup").attr("class","overlay");
  $("#menu").attr("class","navicon navicon_hidden");
  $("body").css("overflow","hidden");
  $("#menulist li:first a").focus();

});
function close(){
  $("#menu_popup").attr("class","overlay o_hidden");
  $("#menu").attr("class","navicon");
  $("body").css("overflow","");
  $("#menu").focus();
}
$("#menu_close").click(close);

$("#menulist li a").click( function() {

  $("#menu_popup").attr("class","overlay o_hidden");
  $("#menu").attr("class","navicon");
  var index = $(this).parent('li').index();
  var sections = ["about","work","projects","writing","connect"];
  $("section#"+sections[index]+" a:first").focus();
  $("body").css("overflow","");
});


function keyboardhandler(object,event){
  var e = event? event: window.event;
  if(e.keyCode == 27){ //for outer div
  close();
  e.preventDefault();
  return false;
  }
}
function trapfocus(object, event){
 var e = event? event: window.event;
 if(e.keyCode == 9 && !e.shiftKey){  //TAB
  $("#menulist li:first a").focus();
  e.preventDefault();
  return false;
 }
 if(e.keyCode == 32){  //SPACEBAR
    close();  
    e.preventDefault();
    return false;
 }
}