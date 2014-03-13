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
	if (latestKnownScrollY + document.documentElement.clientHeight > footer.offsetTop) {
		var offset = -30 + (footer.clientHeight - (latestKnownScrollY + document.documentElement.clientHeight - footer.offsetTop)) * 0.5;
		footer.style.backgroundPosition = 'center bottom ' + offset + 'px';
	}
}
window.addEventListener('scroll', onScroll, false);