# alias.js
a simple javascript library for shorcuts/aliases with much less memory fingerprint than jQuery and others.
	
_**$id(name)**_ returns the dom object by id (is an alias of document.getElementById).

_**$each(list, arg)**_ iterates over list applying arg, usually list contains a set of functions.

_**$sel(query)**_ is an alias of document.querySelector

_**$all(query)**_ is an alias of document.querySelectorAll

_**$html(content, dom)**_ writes the content into a domobject, if no domobject is specified then the default one is used; for specifying the default domobject call to $html with {default: yourdomobject} instead of contents.

_**$css(styles, dom)**_ applies css rules to a domobject, if no domobject is specified, then the styles are applied to the default domobject

_**$fetch(url, dom, iferror)**_ get contents from an url and writes them into a domobject, if no domobject is specified, then the default will be used. Its very similar to $html but where in $html a content is specified, here an url from where to load the contents is specified. If the url cannot be loaded, then the contents specified on iferror argument will be used.
