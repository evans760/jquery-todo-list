$(document).ready(function(){
//button that submits info



$('#btn').click(function(e) {
e.preventDefault();
var inSpot = $('#inputSpot').val();
var xBtn = ' <a herf=" ">x</a>';



$('#outputDiv').append('<li>' + inSpot + xBtn + '</li>');
$('#inputSpot').val('').focus();
});

$(document).on('click', 'a', function(e) {
  e.preventDefault();
  $(this).parent().remove();
});
});



