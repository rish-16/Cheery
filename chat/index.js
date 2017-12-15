document.addEventListener('DOMContentLoaded', function() {

	console.log('Loaded');

	var panels = document.getElementById('panels');
	var chats = document.getElementById('chats');

	var chatbot = document.getElementsByClassName('chatbot')[0];
	var chatbotpp = document.getElementsByClassName('cbppp')[0];

	var dr1 = document.getElementsByClassName('doctor1')[0];
	var dr1pp = document.getElementsByClassName('dr1ppp')[0];

	var dr2 = document.getElementsByClassName('doctor2')[0];
	var dr2pp = document.getElementsByClassName('dr2ppp')[0];

	var recipient = document.getElementById('recipient');
	var recpp = document.getElementById('recpp');

	var images = ["bot.jpg", "dr1.jpg", "dr2.jpg"];

	var exit = document.getElementById('exit');

	var name = document.getElementById('cardTitle');

	var textBox = document.getElementById('textBox');

	var space = document.getElementById('space');

	chatbot.addEventListener('click', function() {
		panels.style.display = "none";
		chats.style.display = "block";
		recpp.src = cbppp.src;
		recipient.innerHTML = document.querySelectorAll('#cardTitle')[0].innerHTML;
	});

	dr1.addEventListener('click', function() {
		panels.style.display = "none";
		chats.style.display = "block";
		recpp.src = dr1ppp.src;
		recipient.innerHTML = document.querySelectorAll('#cardTitle')[1].innerHTML;
	});

	dr2.addEventListener('click', function() {
		panels.style.display = "none";
		chats.style.display = "block";
		recpp.src = dr2ppp.src;
		recipient.innerHTML = document.querySelectorAll('#cardTitle')[2].innerHTML;
	});

	exit.addEventListener('click', function() {
		panels.style.display = "block";
		chats.style.display = "none";
	});

	textBox.addEventListener('keyup', function (e) {
    if (e.keyCode == 13) {
			sendTxt(textBox.value);
			textBox.value = "";
    };
	});

	function sendTxt(text) {
		console.log(text);
		// var shape = document.createElement("DIV");
		// shape.style.float = "right";
		// shape.className += "talk-bubble tri-right round border right-top";
		// var talktext = document.createElement("DIV");
		// talktext.className += "talktext";
		// var content = document.createElement("P");
		// var contentxt =  document.createTextNode(String(text));
		// content.appendChild(contentxt);
		// talktext.appendChild(content);
		// shape.appendChild(talktext);
		// space.appendChild(shape);
	};
});
