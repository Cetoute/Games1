//check off Specific todos by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
		});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which ===13){
		//grabing new todo from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
	});

$(".fa-pencil-square-o").click(function(){
	$("input[type='text']").fadeToggle();
});