$("#menu").click(function(){

  var popup = document.getElementById("menu_popup");
  popup.setAttribute("class", "overlay");
  var menuicon = document.getElementById("menu");
  menuicon.setAttribute("class","navicon navicon_hidden");
  

});
$("#menu_close").click(function(){

  var popup = document.getElementById("menu_popup");
  popup.setAttribute("class", "overlay o_hidden");
  var menuicon = document.getElementById("menu");
  menuicon.setAttribute("class","navicon");
});

$("#menulist").on('click', 'li', function() {
  var popup = document.getElementById("menu_popup");
  popup.setAttribute("class", "overlay o_hidden");
  var menuicon = document.getElementById("menu");
  menuicon.setAttribute("class","navicon"); 
});