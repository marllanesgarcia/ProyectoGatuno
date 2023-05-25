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

/*  formulario */
  document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();
  var nombre = document.getElementById("nombre").value;
  document.getElementById("nombre").value = "";

  // Deshabilita el formulario
  document.getElementById("nombre").disabled = true;
  document.querySelector("#formulario button[type='submit']").disabled = true;

  var nombreDiv = document.createElement("div");
  nombreDiv.textContent = '¡Bienvenidx, '+nombre+'!';
  document.getElementById("nombre-registrado").appendChild(nombreDiv);        
}); 

// Obtener el valor de la cookie
function getCookie(name) {
  var cookieName = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');

  for (var i = 0; i < cookieArray.length; i++) {
      var cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
          return cookie.substring(cookieName.length, cookie.length);
      }
  }

  return "";
}

// Obtener el nombre registrado de la cookie
var nombreRegistrado = getCookie("nombreRegistrado");

// Establecer el nombre registrado en el cuadro de texto
document.getElementById("nombre-registrado").textContent = nombreRegistrado;


function aplicarCambios() {
  var color = document.getElementsByName('colorElegido')[0];
  console.log('color elegido ' + color.value);

  var tam = document.getElementsByName('tamFuente')[0];
  var tamelegido = tam[tam.selectedIndex].value;

  document.documentElement.style.fontSize = parseFloat(tamelegido) + "rem";
  document.documentElement.style.setProperty("--colorNormal", color.value);
//    document.getElementById('mensaje').innerHTML = "APLICADO";

}