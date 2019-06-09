// $('div.scripting h4').mouse_click(function){
//   $('p').toggler();
// };
$('.scripting h4').ready((function){
  $('p').toggle(
    function(){$('p').hide()};
    function(){$('p').show()});
});
