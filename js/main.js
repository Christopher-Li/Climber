$( document ).ready(function() {
  $('.splashscreen').hide().fadeIn(800);
  flash(); 
  $( "#right-button" ).click(function() {
    var bodypart= $('#dropdownMenu3').text();
    bodypart= bodypart.replace(/\s/g, '');
    var difficulty= $('#dropdownMenu4').text();
    difficulty= difficulty.replace(/\s/g, '');
    var href = $(this).attr('href');
    href += "?"+bodypart+"&"+difficulty;
    $(this).attr("href", href);
  });
});

function flash(){
  setInterval(function(){
  	border = $("#running").css("border-color");
    if(border == 'rgb(255, 255, 255)'){
    	$('#running').css({border: '1px solid rgb(237,45,58)'});
    }
    else{
    	$('#running').css({border:'1px solid rgb(255,255,255)'});
    }
  }, 200);
}

