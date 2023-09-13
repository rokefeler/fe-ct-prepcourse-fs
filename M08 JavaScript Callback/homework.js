/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   
   //1era Solución: return nombre.split('').reduce((acc,e,i)=>{ if(i==0) acc.push(e.toUpperCase()); else acc.push(e); return acc; },[]).join('')
   
   //2da. Solución: Usando CallBack
   // Función que toma un nombre y un callback para modificar el nombre
   function primeraLetraMayuscula(nom, callback) {
      // Verificamos si el nombre no está vacío
      if (nom.length === 0) {
         return callback("El nombre no puede estar vacío");
      } else {
      // Convertimos la primera letra a mayúscula y el resto a minúscula
         const nombreModificado = nom.charAt(0).toUpperCase() + nom.slice(1);
         return callback(null, nombreModificado); // Llamamos al callback con el resultado
      }
   }
   
   // Función de callback que muestra el resultado
   function mostrarResultado(e, resultado) {
      if (e){
         throw new error(e);
      }
      return resultado;
   }
   // Uso de la funciones con CallBack
   return primeraLetraMayuscula(nombre, mostrarResultado);
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   return cb()
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1,num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   return cb(arrayOfNumbers.reduce((acc,e)=>acc+=e,0))
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   array.forEach(e=>cb(e))
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   return array.map((e,i)=>cb(e))
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   return arrayOfStrings.reduce((acc,e)=>{
      if(e.charAt(0)=='a')
         acc.push(e);
      return acc;
   },[]);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
