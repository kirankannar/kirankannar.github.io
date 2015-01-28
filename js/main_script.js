
/*disable right clicks or view source */
window.oncontextmenu = function () {
   return false;
}
document.onkeydown = function (e) { 
    if (window.event.keyCode == 123 ||  e.button==2)    
    return false;
}


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



