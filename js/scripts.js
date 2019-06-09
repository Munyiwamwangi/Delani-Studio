//--------SCRIPT FOR SECTION4/WHAT WE DO PART-----

// case1
$('.p1').hide()
$('#p1').click(function(){
  $('.p1').toggle();
  $('.p1').click(function(){
    $('#p1').toggle();
  });
});


// case2
$('.p2').hide()
$('#p2').click(function(){
  $('.p2').toggle();
  $('.p2').click(function(){
    $('#p2').toggle();
  });
});


// case3
$('.p3').hide()
$('#p3').click(function(){
  $('.p3').toggle();
  $('.p3').click(function(){
    $('#p3').toggle();
  });
});
