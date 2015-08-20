function smartRollover() {
	if(document.getElementsByTagName) {
		var images = document.getElementsByTagName("img");

		for(var i=0; i < images.length; i++) {
			if(images[i].getAttribute("src").match("_off."))
			{
				images[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
				}
				images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
				}
			}
		}
		
		
		var inputs = document.getElementsByTagName("input");
		for(var i=0; i < inputs.length; i++) {
			if (!inputs[i].getAttribute("src")) continue;
			if(inputs[i].getAttribute("src").match("_off."))
			{
				inputs[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
				}
				inputs[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
				}
			}
		}
	}
}

if(window.addEventListener) {
	window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
	window.attachEvent("onload", smartRollover);
}