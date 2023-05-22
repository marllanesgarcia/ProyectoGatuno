window.onerror=new Function("return true");
 
function sendMail() {
var link = "317webpingu@gmail.com"
+ "?cc=317webpingu@gmail.com"
+ "&subject=" + escape(document.getElementById('subject').value)
+ "&body=" + escape(document.getElementById('comment').value);
 
window.location.href = "mailto:" +link;
}
