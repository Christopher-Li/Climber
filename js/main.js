$( document ).ready(function() {
  $('.splashscreen').hide().fadeIn(800);
  flash(); 
});

function flash(){
  setInterval(function(){
  	var border=$("img").css("border-color")
    if (border=="rgb(255,255,255)"){
    	$('img').css({border: '1px solid rgb(237,45,58)'});
    }
    else{
    	$('img').css({border:'1px solid rgb(255,255,255)'});
    }
  }, 1000);
}