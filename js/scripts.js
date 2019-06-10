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
  $("#img1").mouseenter(function() {
    $(".one").slideToggle(100);
  });
  $(".one").hide();
  $("#img5").mouseenter(function() {
    $(".five").slideToggle(100);
  });
  $(".one").hide();
  $("#img2").mouseenter(function() {
    $(".two").slideToggle(100);
  });
  $(".one").hide();
  $("#img3").mouseenter(function() {
    $(".three").slideToggle(100);
  });
  $(".one").hide();
  $("#img4").mouseenter(function() {
    $(".four").slideToggle(100);
  });
  $(".one").hide();
  $("#img6").mouseenter(function() {
    $(".six").slideToggle(100);
  });
  $(".one").hide();
  $("#img7").mouseenter(function() {
    $(".seven").slideToggle(100);
  });
  $(".one").hide();
  $("#img8").mouseenter(function() {
    $(".eight").slideToggle(100);
  });
});
//FRONT END// UI
