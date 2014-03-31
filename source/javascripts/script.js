var latestKnownScrollY = 0, ticking = false;
function onScroll() {
	if (window.matchMedia("(min-width: 1000px)").matches) {
		latestKnownScrollY = window.scrollY;
		requestTick();
	}
}
function requestTick() {
	if (!ticking) {
		requestAnimationFrame(update);
	}
	ticking = true;
}
function update() {
	ticking = false;
	var currentScrollY = latestKnownScrollY;
	if (currentScrollY < 72) {
		document.querySelector('#header .top').style.transform = 'translateY(' + currentScrollY + 'px)';
		document.querySelector('#header .top2').style.transform = 'translateY(' + currentScrollY * 0.5 + 'px)';
	}
	var footer = document.getElementById('footer');
	if (currentScrollY + document.documentElement.clientHeight > footer.offsetTop) {
		var offset = -70 + (footer.clientHeight - (currentScrollY + document.documentElement.clientHeight - footer.offsetTop)) * 0.5;
		document.getElementById('bottom').style.bottom = offset + 'px';
	}
	if (currentScrollY > 30 && currentScrollY < 150 && document.querySelector('.pillar')) {
		document.querySelector('.pillar').style.transform = 'translateY(' + ((currentScrollY - 30) * 0.5 - 20) + 'px)';
	}
	if (currentScrollY > 150 && currentScrollY < 280 && document.querySelector('.pillar2')) {
		document.querySelector('.pillar2').style.transform = 'translateY(' + ((currentScrollY - 150) * 0.7 - 30) + 'px)';
	}
	if (currentScrollY > 280 && currentScrollY < 380) {
		//document.querySelector('.tap').style.transform = 'translateY(' + ((currentScrollY - 250)) + 'px)';
	}
	if (currentScrollY > 380 && document.querySelector('.drop')) {
		document.querySelector('.drop').classList.add('start');
	}
}
window.addEventListener('scroll', onScroll, false);
window.addEventListener('resize', function(){
	document.getElementById('bottom').removeAttribute('style');
}, false);
