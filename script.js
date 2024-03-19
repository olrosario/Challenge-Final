var mensaje1 = document.getElementsByName("mensaje1");
var mensaje2 = document.getElementsByName("mensaje2");

var btnEncriptar = document.getElementsByName("encriptar");
var btnDesencriptar = document.getElementsByName("desencriptar");

var dic = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat'
};


let criterio = "^[a-z0-9\\s]+$";

let exp_reg = new RegExp(criterio);

function encriptar() {
  let texto = document.querySelectorAll("textarea")[0].value;

  //Eliminamos caracteres no deseados
  texto = texto.split('');
  texto = texto.filter((el) => {
    return exp_reg.test(el);
  });
  texto = texto.join('');

  let result = "";

  if (
    texto.indexOf(dic["a"]) >= 0 ||
    texto.indexOf(dic["e"]) >= 0 ||
    texto.indexOf(dic["i"]) >= 0 ||
    texto.indexOf(dic["o"]) >= 0 ||
    texto.indexOf(dic["u"]) >= 0
  ) {
    var notification = new Notification(
      "El mensaje ya se encuentra encriptado"
    );
    setTimeout(function () {
      notification.close();
    }, 2000);
    alert("El mensaje ya se encuentra encriptado");
  } else {
    for (let i = 0; i < texto.length; i++) {
      if (dic[texto[i]]) {
        result += dic[texto[i]];
      } else {
        result += texto[i];
      }
    }
    if (result.length > 0) {
      document
        .querySelectorAll("textarea")[1]
        .setAttribute("class", "textarea-dec");

      document.getElementById("textarea-background-id").style.display =
        "none";
      document.getElementById("copiar").style.display = "block";

      var notification = new Notification(
        "El mensaje ha sido encriptado"
      );
      setTimeout(function () {
        notification.close();
      }, 2000);
    } else {
      document
        .querySelectorAll("textarea")[1]
        .setAttribute("class", "no-visible");

      document.getElementById("textarea-background-id").style.display =
        "block";
      document.getElementById("copiar").style.display = "none";
    }
    document.querySelectorAll("textarea")[1].value = result;
  }
}

function replaceTextDic(texto) {
  let result = texto;

  for (var i in dic) {
    result = result.replaceAll(dic[i], i);
  }

  if (result.length > 0) {
    document
      .querySelectorAll("textarea")[1]
      .setAttribute("class", "textarea-dec");
  } else {
    document
      .querySelectorAll("textarea")[1]
      .setAttribute("class", "no-visible");
  }
  return result;
}

function desencriptar() {
  let texto = document.querySelectorAll("textarea")[0].value;
  //Eliminamos caracteres no deseados
  texto = texto.split('');
  texto = texto.filter((el) => {
    return exp_reg.test(el);
  });
  texto = texto.join('');

  let result = "";

  result = replaceTextDic(texto);
  document.querySelectorAll("textarea")[1].value = result;
  if (result.length > 0) {
    document.getElementById("textarea-background-id").style.display =
      "none";
    document.getElementById("copiar").style.display = "block";
    var notification = new Notification(
      "El mensaje ha sido desencriptado"
    );
    setTimeout(function () {
      notification.close();
    }, 2000);
  } else {
    document.getElementById("textarea-background-id").style.display =
      "block";
    document.getElementById("copiar").style.display = "none";
  }
}

function copiarTextClipBoard_v1() {
  let texto = document.querySelectorAll("textarea")[1];
  let copy = texto.select();
  document.execCommand("copy");
  var notification = new Notification("El mensaje ha sido copiado");
  setTimeout(function () {
    notification.close();
  }, 2000);

  alert("Copied!");
}

function copiarAlPortapapelesOK() {
  let textarea = document.querySelectorAll("textarea")[1].select();
  document.execCommand("copy");
}

function copiarAlPortapapeles() {
  // Creamos un campo de texto "oculto"
  var aux = document.createElement("textarea");
  // Añadimos el campo a la página
  document.body.appendChild(aux);

  let texto = document.querySelectorAll("textarea")[1].value;
  // Asignamos el contenido del elemento
  aux.setAttribute("value", texto);
  aux.value = texto;
  aux.setAttribute("readonly", "");

  // Seleccionamos todo el contenido del campo
  aux.select();

  // Copiamos el texto seleccionado
  document.execCommand("copy");

  // Eliminamos el campo de la página
  document.body.removeChild(aux);
  var notification = new Notification("El mensaje ha sido copiado");
  setTimeout(function () {
    notification.close();
  }, 2000);
}

var rodapie =
  "Olga Rosario    -     " +
  "Github: olrosario    -     " +
  "LinkedIn: https://www.linkedin.com/in/olga-leticia-rosario-hernandez                            ";

function scroll() {
  document.frm.w.value = rodapie;
  rodapie = rodapie.substring(1, rodapie.length) + rodapie.charAt(0);
  window.setTimeout("scroll()", 150);
}

function classToggleAnimation() {
  var el = document.querySelector(".icon-cards__content");
  el.classList.toggle("step-animation");
}