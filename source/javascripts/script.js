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
		document.querySelector('#header .top').style.top = currentScrollY - 60 + 'px';
		document.querySelector('#header .top2').style.top = currentScrollY * 0.5 + 170 + 'px';
	} else {
		document.querySelector('#header .top').style.top = '10px';
		document.querySelector('#header .top2').style.top = '205px';
	}
	var footer = document.getElementById('footer');
	if (currentScrollY + document.documentElement.clientHeight > footer.offsetTop) {
		var offset = -70 + (footer.clientHeight - (currentScrollY + document.documentElement.clientHeight - footer.offsetTop)) * 0.5;
		document.getElementById('bottom').style.bottom = offset + 'px';
	}
	if (currentScrollY > 30 && currentScrollY < 150 && document.querySelector('.pillar')) {
		document.querySelector('.pillar').style.top = -80 + ((currentScrollY - 30) * 0.5) + 'px';
	}
	if (currentScrollY > 150 && currentScrollY < 280 && document.querySelector('.pillar2')) {
		document.querySelector('.pillar2').style.top = 120 + ((currentScrollY - 150) * 0.7) + 'px';
	}
	if (currentScrollY >= 280 && document.querySelector('.pillar2')) {
		document.querySelector('.pillar2').style.top = '210px';
	}
	if (currentScrollY > 380 && document.querySelector('.drop')) {
		document.querySelector('.drop').classList.add('start');
	}
	if (currentScrollY > 300) {
		document.getElementById('scroll').classList.add('show');
	} else {
		document.getElementById('scroll').classList.remove('show');
	}
}
window.addEventListener('scroll', onScroll, false);
window.addEventListener('resize', function(){
	document.getElementById('bottom').removeAttribute('style');
}, false);
