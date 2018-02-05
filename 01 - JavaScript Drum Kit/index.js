function removeTransition(e) {
	if (e.propertyName !== "transform") return;
	this.classList.remove("playing");
	console.log(e.propertyName);
}
function showAndPlay(key) {
	var el = document.querySelector(`[data-key = "${key}"]`);
	if (!el) return;
	el.className += " playing";
	var audioKey = document.querySelector(`audio[data-key = "${key}"]`);
	audioKey.currentTime = 0;
	audioKey.play();
}
window.addEventListener('keydown', function(e) {
	var key = e.keyCode;
	showAndPlay(key);
});
var drumKeys = document.querySelectorAll('.key');
var keyPressed = function() {
	var attr = this.getAttribute("data-key");
	showAndPlay(attr);
}

drumKeys.forEach(key => key.addEventListener('click',keyPressed));
drumKeys.forEach(key => key.addEventListener('transitionend',removeTransition));