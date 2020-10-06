  const readline = require("readline-sync");

  let estado;
  let n;

  do{
      tirada (parseInt(readline.question("Ingrese un numero:")));
      //tirada (num);
  } while (estado == false);

  if (n == createRandomInt(1, 12)){
      console.log("Felicidades! Has acertado el número");
  } else {
      console.log("No has acertado el número! Vuelve a intentarlo la próxima vez")
  }

  function tirada (num){
      n = num;
    if (isNaN(num)){
        console.log("Valor introducido incorrecto, debes introducir un número entre 1 y 12");
        return estado = false;
    }
    if (num >0 && num<=12){
    return estado = true;
    } else {
        console.log("Valor introducido incorrecto, debes introducir un número entre 1 y 12");
        return estado = false;
    }
  }

  function createRandomInt(min, max) { 
    return Math.floor(Math.random()* (max-min+1)+min); 
}

