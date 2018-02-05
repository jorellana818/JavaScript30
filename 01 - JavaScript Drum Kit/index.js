function removeClass(x) {
	const classToRemove = document.getElementsByClassName(x);
	for (var i=0; i<classToRemove.length;i++) {
		classToRemove[i].classList.remove(x);
	}
}
function showAndPlay(key) {
	var el = document.querySelector(`[data-key = "${key}"]`);
	if (!el) return;
	el.className += " playing";
	var audioKey = document.querySelector(`audio[data-key = "${key}"]`);
	audioKey.currentTime = 0;
	audioKey.play();
	setTimeout(removeClass,200,"playing");
}
window.addEventListener('keydown', function(e) {
	var key = e.keyCode;
	showAndPlay(key);
});
var drumKeys = document.getElementsByClassName('key');
var keyPressed = function() {
	var attr = this.getAttribute("data-key");
	showAndPlay(attr);
}
for (var j=0;j<drumKeys.length;j++) {
	drumKeys[j].addEventListener('click',keyPressed,false);
}