/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */
const Generator = (opcion) => {
  let { longitud, isMayus, isNumbers, isSymbols, ...rest } = opcion;
  const aSymbols = [];
  /* Llenar Tabla Ascii del 32 al 254
    Numeros estan del 48 al 57
    Mayusculas estan del 65 al 90
    Minusculas estan del 97 al 122
    */
  let i = 32;
  while (i <= 254) {
    if (!isNumbers && i >= 48 && i <= 57) {
      i++;
      continue;
    }
    if (!isMayus && i >= 65 && i <= 90) {
      i++;
      continue;
    }
    if (
      !isSymbols &&
      ((i >= 33 && i <= 47) ||
        (i >= 58 && i <= 64) ||
        (i >= 91 && i <= 96) ||
        (i >= 127 && i <= 254))
    ) {
      i++;
      continue;
    }
    aSymbols.push(String.fromCharCode(i));
    i++;
  }
  aSymbols.push(["á", "é", "í", "ó", "ú", "Á", "É", "Í", "Ó", "Ú", "ñ", "Ñ"]);

  return aSymbols;
};

const clave = Generator({ longitud: 6, isNumbers: true, isSymbols: false });
console.log("Clave generada:", clave);
