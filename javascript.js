window.onerror=new Function("return true");
 
function sendMail() {
var link = "317webpingu@gmail.com"
+ "?cc=317webpingu@gmail.com"
+ "&subject=" + escape(document.getElementById('subject').value)
+ "&body=" + escape(document.getElementById('mensaje').value);
 
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

/* function seleccionar(name){

  event.preventDefault();

  // console.log('working');

  var name=document.getElementById('name').value;
  var user= {
    name:name,
  };
  var guardado=JSON.stringify(user);
  localStorage.setItem(name,guardado);
  console.log('Nombre añadido');
  /* 
localStorage.setItem("name", name);
document.getElementById("name").innerHTML = localStorage.getItem(name);
  
  var name=0;
  sessionStorage.setItem('',name); 
} */

/* function nombreUsuario() {
  document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    document.getElementById("nombre").value = ""; 
});
 }

 function seleccionar(){

    var nombreDiv = document.createElement("div");
    nombreDiv.setAttribute("id", "nombre");
    nombreDiv.textContent = nombre;
    document.body.appendChild(nombreDiv);

 } */



