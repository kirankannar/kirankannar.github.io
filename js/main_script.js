var textclassifier = { "img": "neural_network.gif", 
                       "title": "Document Classification using Backpropagation Networks",
                       "details": "Built and trained a neural network to classify document text to science and politics.",
                       "date" : "Fall 2013" ,
                        "link" : "https://github.com/KannarKK/Document-Classifer" };
var ads = { "img": "null", 
                       "title": "Alumni Database System",
                       "details": "Fondly called as alumninet, this repository project provides a method to query for complex relational \
                       queries like <i>Alumni of CSE, RV College who graduated in 2014 and then pursued MS in CS at Stanford and now \
                       work at Google </i>. <br/> Three kinds of profiles (users of this repository) are allowed to register: alumni, \
                       students and professor, based on which the interactions allowed with the repository vary.",
                       "date" : "Spring 2012" ,
                        "link": "https://github.com/KannarKK/alumninet"};
var chatroom = { "img": "null", 
                       "title": "Chat Room",
                       "details": " This project was built to understand the limitations and fallacies of using Remote Method \
                       Invocation methodology over common programming methodologies like sockets for building chat applications.",
                       "date" : "Spring 2012",
                       "link" : "https://github.com/KannarKK/RMI-Chat-Server" };

var quicklib = { "img": "null", 
                       "title": "QuickLib - Android Application",
                       "details": "When you have a central offline repository of books, (like the way it is maintained at our college),\
                        you would find it painstaking to go to college to check if a book is available at library. <br/> Quicklib offers\
                        remote access to the repository and allows you to track the books you need.\
                        <br/><em> This project was implemented and demonstrated as POC. </em>",
                       "date" : "Spring 2012",
                       "link" : 0 };
var cro = { "img": "null", 
                       "title": "Function Generator using Cathode Ray Oscilloscope",
                       "details": "Microcontroller based project to generate various waveforms of different frequencies on a \
                       Cathode Ray Oscilloscope (CRO). ",
                       "date" : "Fall 2011",
                       "link" : "https://github.com/KannarKK/function-generator" };
var twopass = { "img": "null", 
                       "title": "2 pass assemblers",
                       "details": "Implemented a basic instruction set 2 pass assembler for 8086 architecture.",
                       "date" : "Fall 2011",
                       "link" : 0 };
    
var checkers = { "img": "null", 
                       "title": "Checkers",
                       "details": "Built a Checkers game environment to provide 2 player functionality as well as\
                        playing against a computer. <br> The highlight was automated moves by the computer\
                        Unfortunately, the code was built across Turbo C++ environment, making it un-portable :(",
                       "date" : "2009",
                       "link" : 0 };

var ProjectDetails = [ textclassifier,ads, chatroom,quicklib,cro, twopass, checkers];
var prev_project_active=1; /*state variable to initialize class =active */

/*disable right clicks or view source */
window.oncontextmenu = function () {
   return false;
}
document.onkeydown = function (e) { 
    if (window.event.keyCode == 123 ||  e.button==2)    
    return false;
}

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

/* Identify which project title was clicked and render appropriate text */
$(".pro-button"). click(function(e){
var index = parseInt($(this).attr("id").match(/pro(\d+)/)[1], 10);
var jsonToRender = ProjectDetails[index-1];
//console.log(JSON.stringify(jsonToRender));

//var image = '<img align="center" src="img\\' + jsonToRender.img + '" style="height:100px; width:100px;"/>';
var title = '<h3 align="center">' + jsonToRender.title + '</h3>';
var date = '<p align="center"><kbd>' + jsonToRender.date + '</kbd></p>';
var contents ='<p>' + jsonToRender.details + '</p>';

$("#project-date").html(date);
$("#project-title").html(title);
$("#project-contents").html(contents);

if(jsonToRender.link!=0)
{
   // console.log(jsonToRender.link);
var codeLink = '<p> <b>Code at </b><a target="_blank" href = "'+ jsonToRender.link + '">' + jsonToRender.link + '</a></p>';
$("#project-code").html(codeLink);
}
else
 $("#project-code").html("");

/*TODO change this to binary search; much more efficient*/
for (var i=1; i<=ProjectDetails.length; i++)
{
    if(i== prev_project_active) {
        var id_rem_class = 'pro'+i;
        $(document.getElementById(id_rem_class).parentNode).removeClass('active'); /* we have found required class */
        break;
    }
}
var Clickedid =e.target.id;
$(document.getElementById(Clickedid).parentNode).addClass('active');
 prev_project_active=index; 
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

        /*render default text from project[0] */
        var jsonToRender = ProjectDetails[0];
        //var image = '<img align="center" src="img\\' + jsonToRender.img + '" style="height:100px; width:100px;"/>';
        var date = '<p align="center"><kbd>' + jsonToRender.date + '</kbd></p>';
        var title = '<h3 align="center">' + jsonToRender.title + '</h3>';
        var contents ='<p>' + jsonToRender.details + '</p>';
        $("#project-date").html(date);
        $("#project-title").html(title);
        $("#project-contents").html(contents);
        if(jsonToRender.link!=null)
        {
            var codeLink = '<p> <b>Code at </b><a target="_blank" href = "'+ jsonToRender.link + '">' + jsonToRender.link + '</a></p>';
            $("#project-code").html(codeLink);
        }
        else
            $("#project-code").html("");
                
});
$("#5").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").hide();
        $("#research").show();
        $("#contact").hide();
        
});
$("#6").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").hide();
        $("#research").hide();
        $("#contact").show();
        
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
$("#to_research").click(function(e) {
        
        $("#home").hide();
        $("#bio").hide();
        $("#work").hide();
        $("#projects").hide();
        $("#research").show();
        $("#contact").hide();
        
});

$("#btnContactUs").click(function(e) {



var from =  $("#email").val();
var sub = $("#subject").val();
var name = $("#name").val();
var msg = $("#message").val();
var msg_p  = msg  + ' ' +name;


var json = {
  type: "POST",
  url: "https://mandrillapp.com/api/1.0/messages/send.json",
  data: {
    'key': 'jrD1SkCG5Jwa7AkSwzq7fw',
    'message': { 
        'to': [ {
            'email': 'kirankannarkk.lris@gmail.com',
            'name': 'Kiran Kannar',
            'type': 'to'
          }
            ]

        }
    }
    };
json.data.message['from_email'] = from;
json.data.message['autotext'] = 'true';
json.data.message['subject'] = sub;
json.data.message['html'] = msg_p;

$.ajax(json).done(function(response) {
   
   var x = response[0]["status"];
   if(x == "sent")
        alert("Sent!");
    else
        alert("Failed!");

   console.log(response); // if you're into that sorta thing
 });

});



