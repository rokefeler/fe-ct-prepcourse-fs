/* Reto #1: EL "LENGUAJE HACKER"
Dificultad: Fácil | Publicación: 02/01/23 | Corrección: 09/01/23
Enunciado */
/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/)
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

const traduceHacker = (cad) => {
  const leet = [
    "4",
    "I3",
    "[",
    ")",
    "3",
    "|=",
    "&",
    "#",
    "1",
    ",_|",
    ">|",
    "1",
    "/\\/\\",
    "^/",
    "0",
    "|*",
    "(_,)",
    "I2",
    "5",
    "7",
    "(_)",
    "\\/",
    "\\/\\/",
    "><",
    "j",
    "2",
    "L",
    "R",
    "E",
    "A",
    "S",
    "b",
    "T",
    "B",
    "g",
    "o",
  ];
  const alfabeto = [];
  let letter = "A";
  /* Llenar letras de la A to Z */
  while (letter <= "Z") {
    alfabeto.push(letter);
    letter = String.fromCharCode(letter.charCodeAt(0) + 1);
  }
  letter = "0";
  while (letter <= "9") {
    alfabeto.push(letter);
    letter = String.fromCharCode(letter.charCodeAt(0) + 1);
  }

  //Construir Alfabeto con Equivalencias
  const alfaHacker = alfabeto.reduce((n, e, i) => {
    n[e] = leet[i];
    return n;
  }, {});

  //Traducir texto recibido segun alfabeto
  return cad
    .split("")
    .map((e) => {
      return alfaHacker[e.toUpperCase()] != undefined
        ? alfaHacker[e.toUpperCase()]
        : e;
    })
    .join("");
};
const cad1 = "Saludos Mortal 2023";
const cadLeet = traduceHacker(cad1);
console.log(cad1, ":", cadLeet);
