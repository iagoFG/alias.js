/// alias.js: simple aliases to get shortcuts of frequent used actions without all the boilderplate for simple projects
/// @author info@iagoFG.com
/// @license MPL-2.0

(function() {
	
	function $id(name) { return document.getElementById(name); }
	window.$id = $id;
	
	function $each(list, arg) { for (var i in list) if (typeof list[i] === "function") list[i](arg); }
	window.$each = $each;
	
	function $sel(query) { return document.querySelector(query); }
	window.$sel = $sel;
	
	function $all(query) { return document.querySelectorAll(query); }
	window.$all = $all;
	
	var $html_presets = {};
	function $html(content, dom) { // argument dom is optional, content instead can be a presets object
		if (typeof content == "object") {
			$html_presets = content;
		} else {
			if (dom === undefined && "default" in $html_presets) dom = $html_presets["default"];
			if (dom !== undefined) dom.innerHTML = content;
		}
	}
	window.$html = $html;
	
	function $css(styles, dom) { // argument dom is optional, styles instead can be a presets object
		if (dom === undefined && "default" in $html_presets) dom = $html_presets["default"];
		if (dom && dom.style) { if (typeof styles == "string") $css_from_str(dom, styles); else for (var i in styles) dom.style[i] = styles[i]; }
	}
	function $css_from_str(dom, textStyles) {
		if (dom && dom.style) {
			var styles = textStyles.split(";");
			for (var i = 0; i < styles.length; ++i) {
				var parts = styles[i].split(":", 2);
				if (parts.length === 2 && parts[0] !== undefined) dom.style[parts[0].replace(/-([a-z])/g, function(match, letter) { return letter.toUpperCase(); }).trim()] = parts[1];
			}
		}
	}
	window.$css = $css;
	
	var $fetch_presets = {};
	function $fetch(url, dom, iferror) { // argument dom is optional, url instead can be a presets object
		if (typeof url == "object") {
			$fetch_presets = url;
		} else {
			if (dom === undefined && "default" in $fetch_presets) dom = $fetch_presets["default"];
			if (dom !== undefined) {
				var xhr = new XMLHttpRequest();
				xhr.onreadystatechange = function () { if (xhr.readyState === 4) dom.innerHTML = xhr.status === 200 ? xhr.responseText : (iferror !== undefined ? iferror : xhr.statusText); }
				xhr.open("GET", url);
				xhr.send(null);
			}
		}
	}
	window.$fetch = $fetch;
	
})();
