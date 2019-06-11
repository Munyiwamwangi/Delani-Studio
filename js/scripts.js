// BACK END; BUSINESS LOGIC
//--------SCRIPT FOR SECTION4/WHAT WE DO PART-----
$(document).ready(function() {
  $(".p1").hide();
  $("#p1").click(function() {
    $(".p1").slideToggle();
    $(".p1").click(function() {
      $("#p1").slideToggle();
    });
  });

  // case2
  $(".p2").hide();
  $("#p2").click(function() {
    $(".p2").slideToggle();
    $(".p2").click(function() {
      $("#p2").slideToggle();
    });
  });

  // case3
  $(".p3").hide();
  $("#p3").click(function() {
    $(".p3").slideToggle();
    $(".p3").click(function() {
      $("#p3").slideToggle();
    });
  });
});

//section5
$(document).ready(function() {
  $(".one").hide();
  $("#img1").hover(function() {
    $(".one").slideToggle(100);
  });
  $(".five").hide();
  $("#img5").hover(function() {
    $(".five").slideToggle();
  });
  $(".two").hide();
  $("#img2").hover(function() {
    $(".two").slideToggle();
  });
  $(".three").hide();
  $("#img3").hover(function() {
    $(".three").slideToggle();
  });
  $(".four").hide();
  $("#img4").hover(function() {
    $(".four").slideToggle();
  });
  $(".six").hide();
  $("#img6").hover(function() {
    $(".six").slideToggle();
  });
  $(".seven").hide();
  $("#img7").hover(function() {
    $(".seven").slideToggle();
  });
  $(".eight").hide();
  $("#img8").hover(function() {
    $(".eight").slideToggle();
  });
});
//FRONT END// UI
$(document).ready(function(){
  $("#call").click(function(){
    var name = $("#getName").val();
    var email = $("#getEmail").val();
    var text = $("#textField").val();
  if(name == ""){
   alert("Enter your Name");
   return;
  }

 else if(email ==""){
 alert ("Enter your Email");
 return;
 }
 else if(text==""){
 alert("Enter comment");
 return;
 }

 else{
     alert (name + " we have  received your message. Thank you for reaching out to us.");
     return;
 }
});
});
$(document).ready(function(){
  $("#call").click(function(event){
    event.preventDefault();
  });
});
