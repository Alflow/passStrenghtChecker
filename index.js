const letras = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "Y",
  "Z",
];

const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const caracteresEspeciales = [
  "!",
  "#",
  "$",
  "&",
  "@",
  "_",
  "-",
  "(",
  "=",
  "?",
  ",",
  "+",
  ".",
  "ç",
];

let minCaracteres = 8;
let minCaracteresEspeciales = 3;
let minNumeross = 3;
let contieneMayus = false;
let contieneMinus = false;


document.getElementById("passwordInput").addEventListener("keyup", (e) => {
  // declaración de constantes con los requisitos.
  console.log(e)

  let proofSucces = 0;
  // elementos del DOM
  let $numCaracteres = document.getElementById("numCaracteres");
  let $caracteresEspeciales = document.getElementById("caracteresEspeciales");
  let $tresNumeros = document.getElementById("tresNumeros");
  let $mayusMinus = document.getElementById("mayusMinus");

  //   Información del input
  let passGenerada = document.getElementById("passwordInput").value;

  //   Comienzo de la lógica del ejercicio -> creamos un array de mayúsculas
  let mayusculas = [...letras.slice(26)];

  //   Creamos un array de minúsculas
  let minusculas = [...letras.slice(0, 26)];

  let arrayPassGenerada = [...passGenerada];

  letMayusAux = false;
  letMinusAux = false;

  for (let i = 0; i < arrayPassGenerada.length; i++) {
    if (mayusculas.includes(arrayPassGenerada[i])) {
      console.log(
        "LA LETRA " + arrayPassGenerada[i] + "es reconocida en Mayusculas"
      );
      letMayusAux = true;
    }

    if (minusculas.includes(arrayPassGenerada[i])) {
      console.log(
        "LA LETRA " + arrayPassGenerada[i] + "es reconocida en minusculas"
      );
      letMinusAux = true;
    }
  }

  if (letMayusAux && letMinusAux) {
    $mayusMinus.classList.remove("text-danger");
    $mayusMinus.classList.add("text-success");
    proofSucces++;
  } else {
    $mayusMinus.classList.add("text-danger");
    $mayusMinus.classList.remove("text-success");
  }

  if (arrayPassGenerada.length >= minCaracteres) {
    $numCaracteres.classList.remove("text-danger");
    $numCaracteres.classList.add("text-success");
    proofSucces++;
  }else{
    $numCaracteres.classList.add("text-danger");
    $numCaracteres.classList.remove("text-success");
  }

  let auxEspeciales = 0;
  for (let i = 0; i < arrayPassGenerada.length; i++) {
    if (caracteresEspeciales.includes(arrayPassGenerada[i])) {
      auxEspeciales++;
    }
  }
  if (minCaracteresEspeciales <= auxEspeciales) {
    $caracteresEspeciales.classList.remove("text-danger");
    $caracteresEspeciales.classList.add("text-success");
    proofSucces++;
  } else {
    $caracteresEspeciales.classList.add("text-danger");
    $caracteresEspeciales.classList.remove("text-success");
  }

  //   comprobación de cantidad de números
  let auxNumeros = 0;
  for (let i = 0; i < arrayPassGenerada.length; i++) {
    if (numeros.includes(arrayPassGenerada[i])) {
      auxNumeros++;
    }
  }
  if (minNumeross <= auxNumeros) {
    $tresNumeros.classList.remove("text-danger");
    $tresNumeros.classList.add("text-success");
    proofSucces++;
  } else {
    $tresNumeros.classList.add("text-danger");
    $tresNumeros.classList.remove("text-success");
  }

  if (proofSucces == 4) {
    document.getElementById("strengthImg").src = "assets/strong.png";
  }else{
    document.getElementById("strengthImg").src="assets/weak.png"
  }
});
