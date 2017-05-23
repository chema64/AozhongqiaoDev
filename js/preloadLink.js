function preloadJS(href) {
	var script = document.createElement('script');
	script.src = href;
	document.body.appendChild(script);
}