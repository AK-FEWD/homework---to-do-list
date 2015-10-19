$('document').ready(function() {
	var itemnumber= 0;
	
	$('#save').click(function(e) {
		e.preventDefault();

		itemnumber +=1;


		var listItem = '<li>' + 
						('#entry').val() + '<button id="remove' + itemnumber +'">Remove</button></li>';

		$('#todolist').append(list_with_remove)

		$('#entry').val('');

		updateCounter();

		$('#remove' + itemnumber).click(function(e) {
			$(e.currentTarget.parentNode).remove();

		updateCounter();

});

	function updateCounter() {
		var count= $('#todolist li').length;
		$('#taskcount').html(count);

		}

	$('#clear').click(function() {
		$('#todolist').html('');
		$('#taskcount').html(0);

		
	});

});

