window.onerror=new Function("return true");
 
function sendMail() {
var link = "317webpingu@gmail.com"
+ "?cc=317webpingu@gmail.com"
+ "&subject=" + escape(document.getElementById('subject').value)
+ "&body=" + escape(document.getElementById('comment').value);
 
window.location.href = "mailto:" +link;
}

  function cargarXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        mostrarXML(this);
      }
    };
    xhttp.open("GET", "https://marllanesgarcia.github.io/ProyectoGatuno/necesidadesFelinas.xml", true); // Reemplaza "ruta/archivo.xml" con la ruta real de tu archivo XML
    xhttp.send();
  }

  function mostrarXML(xml) {
    var xmlDoc = xml.responseXML;
    var xmlString = new XMLSerializer().serializeToString(xmlDoc);
    document.getElementById("xmlDiv").innerHTML = "<pre><code>" + xmlString + "</code></pre>";
  }

  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }