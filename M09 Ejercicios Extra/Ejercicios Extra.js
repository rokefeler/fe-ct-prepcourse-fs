/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const res=[]
   for(const p in objeto){
      const r=[]
      r.push(p)         //agregar clave
      r.push(objeto[p]) //agregar valor
      res.push(r)
   }
   return res;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   return string.split('').reduce((acc,e)=>{
      if(acc[e]==undefined)
         acc[e]=1
      else
         acc[e]+=1
      return acc;
   },{})
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   const res=string.split('').reduce((acc,e)=>{
      if(e>='A' && e<='Z')
         acc.may.push(e);
      else
         acc.min.push(e);
      return acc;
   },{may:[],min:[]})
   return res.may.join('').concat(res.min.join(''));
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   return frase.split(' ').reduce((acc,e)=>{
      acc.push(e.split('').reverse().join(''))
      return acc;
   },[]).join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   const c1=numero.toString();
   const c2=c1.split('').reverse().join('');
   return c1===c2 ? 'Es capicua' : 'No es capicua';
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return string.split('').reduce((acc,e)=>{
      if(!(e=='a' || e=='b' || e=='c'))
         acc.push(e)
      return acc;
   },[]).join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a,b)=>{ return a.length - b.length })
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   /* esto es mas facil de resolver con conjuntos
   const c1=new Set(array1);
   const c2=new Set(array2);
   const res=[];
   for(const e of c1){
      if(c2.has(e)){
         res.push(e);
      }
   }
   return res;
   */
  /* Resolviendo con for multiple */
  res = [];
   for(let i=0;i<array1.length;i++){
      for(let j=0; j<array2.length; j++){
         if(array1[i]===array2[j]){
            res.push(array1[i]) //si se encuentra, romper con break
            break;
         }
      }
   }
   return res;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
