$(document).ready(function() {
    $("div.tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.project-tab>div.project-tab-content").removeClass("active");
        $("div.project-tab>div.project-tab-content").eq(index).addClass("active");
    });
});


$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
        
});

$("#1").click(function(e) {
        
        $("#home").show();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").hide();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#2").click(function(e) {
          
        $("#home").hide();
        $("#bio").show();
        $("#work").hide();
        $("#projects").hide();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#3").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").show();
        $("#projects").hide();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#4").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").show();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#5").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").hide();
        $("#research").show();
        $("#contact").hide();
        
});
$("#down_to_bio").click(function(e) {
        
        $("#home").hide();
        $("#bio").show();
        $("#work").hide();
        $("#projects").hide();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#down_to_work").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").show();
        $("#projects").hide();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#down_to_projects").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").show();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#down_to_research").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").hide();
        $("#research").show();
        $("#contact").hide();
        
});
$("#down_to_contact").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").hide();
        $("#research").hide();
        $("#contact").show();
        
});

$("#to_home").click(function(e) {
        
        $("#home").show();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").hide();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#to_bio").click(function(e) {
        
        $("#home").hide();
        $("#bio").show();
        $("#work").hide();
        $("#projects").hide();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#to_work").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").show();
        $("#projects").hide();
        $("#research").hide();
        $("#contact").hide();
        
});
$("#to_projects").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").show();
        $("#research").hide();
        $("#contact").hide();
        
});



