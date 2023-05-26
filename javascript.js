

function sendMail() {
  var link =
    "317webpingu@gmail.com" +
    "?cc=317webpingu@gmail.com" +
    "&subject=" +
    escape(document.getElementById("subject").value) +
    "&body=" +
    escape(document.getElementById("mensaje").value);

  window.location.href = "mailto:" + link;
}

function cargarXML() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      mostrarXML(this);
    }
  };
  xhttp.open(
    "GET",
    "https://marllanesgarcia.github.io/ProyectoGatuno/necesidadesFelinas.xml",
    true
  );
  xhttp.send();
}

function mostrarXML(xml) {
  var xmlDoc = xml.responseXML;
  var xmlString = new XMLSerializer().serializeToString(xmlDoc);
  document.getElementById("xmlDiv").innerHTML =
    "<pre><code>" + xmlString + "</code></pre>";
}

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function cambiarModo() {
  if (document.body.classList.contains('modo-noche')) {
      document.body.classList.remove('modo-noche');
      localStorage.setItem('modo', 'dia');
  } else {
      document.body.classList.add('modo-noche');
      localStorage.setItem('modo', 'noche');
  }
}

// funcion para cambiar el color y tamaño de letra
function aplicarCambios() {
  var colorElegido = document.getElementsByName("colorElegido")[0].value;
  sessionStorage.setItem("colorElegido", colorElegido);

  window.location.href = "recursos.html";
}

// Obtener el elemento de entrada de texto
const textoInput = document.getElementById('texto-input');
const textoMostrado = document.getElementById('texto-mostrado');


function mostrarTextoAlmacenado() {
  var textoAlmacenado = sessionStorage.getItem('text') || 'sin identificar';
  var textoMostrado = document.getElementById('texto-mostrado');
  textoMostrado.textContent = '¡Bienvenido, '+textoAlmacenado+'!';
  if (colorElegido) {
    cambiarColorElementos(colorElegido);
  }
  console.log("Bienvenido al proyecto gatuno");

}

function almacenarEnSessionStorage() {
  var textoInput = document.getElementById('texto-input').value;
  sessionStorage.setItem('text', textoInput);
  alert('Bienvenido '+textoInput);
  
}

function cambiarColorElementos(color) {
  var elementosP = document.getElementsByTagName("p");
  var elementosH1 = document.getElementsByTagName("h1");

  for (var i = 0; i < elementosP.length; i++) {
    elementosP[i].style.color = color;
  }

  for (var j = 0; j < elementosH1.length; j++) {
    elementosH1[j].style.color = color;
  }
}
