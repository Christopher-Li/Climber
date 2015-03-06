$( document ).ready(function() {
  $('.splashscreen').hide().fadeIn(800);
  flash(); 
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