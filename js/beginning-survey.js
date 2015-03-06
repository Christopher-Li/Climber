$(function(){

    $(".dropdown-menu li a").click(function(){
    	ddname = "#dropdownMenu" + $(this).attr("value");
    	$(ddname).html($(this).html() + " <span class=\"caret\"></span>");

	});

});