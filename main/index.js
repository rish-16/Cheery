document.addEventListener('DOMContentLoaded', function(){

	let profilePicture = document.getElementById('profPic');
	let textbox = document.getElementById('textbox');
	let submitBtn = document.getElementById('submit');
	var speak = document.getElementsByClassName('speak')[0];

	submitBtn.addEventListener('click', function() {
		if (textbox.value != 0) {
			console.log(textbox.value);
		} else {};
	});

	profilePicture.addEventListener('click', function() {
		console.log('Menu launched');
		window.location.href = '/Users/rishabh/Desktop/Web/Cheery/auth/index.html'
	});

	speak.addEventListener('click', function() {
		window.location.href = '/Users/rishabh/Desktop/Web/Cheery/chat/index.html';
	});
});
