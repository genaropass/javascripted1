let array = ["Salsa","Queso","Harina","Sal","Levadura","Agua","Tomate","Cebolla","Aceite", "Oregano",],
  ingredientPar = [],
  ingredientImpar = [];

let parinpar = (array) => {
    // dato
    // cuando se pone length hay que poner menor no menor o igual 
  for (let i = 0; i < array.length; i++) {
    if (array[i].length % 2 === 0) {
      // ingredientLengthPair[ingredientLengthPair.length] =
      //   array[i]; se agrega igualando a un elemento 
      ingredientPar.push(array[i]);
    } else {
      // ingredientLengthOdd[ingredientLengthOdd.length] =
      //   array[i];
      ingredientImpar.push(array[i]);
    }
  }
};
parinpar(array);
console.log(`Los ingredientes pares son: ${ingredientPar}.`);
console.log(`Los ingrediente impares son: ${ingredientImpar}.`);


