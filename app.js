//La firma es el nombre de la función, los parámetros y lo que retorna
//element ( figuras) start ( comienza ) (target finaliza) (duration )
// funcioin movimiento horizontal de izquierda a derecha
function animateElement(element, start, target, duration) { //Retornará promesa con elemento
  element.style.left = start;
  let counter = 0;
  const delta = (target - start) * 40 / duration; //delta es lo que se debe mover por cuadro
  return new Promise((resolve, reject) => { // Acá se está declarando la promesa. Los parametros indican lo que resuelven y lo que se rechaza, cuando se resuelve se llama a resolve() y si no se llama a reject()
    const loop = setInterval(() => { // toma una funcion y la repite cada ciertos milisegundos
      const current = start + counter++ * delta; //a acá indicamos el movimientoto, ++counter hace que sume y luego se multiplique. Counter ++ suma después. Formula = posición inicial + velocidad*tiempo
      element.style.left = current;
      if (start > target && current <= target) { // acá indicamos cuando queremos que finalize el moviento que seria alb llegar a target
        element.style.left = current;
        clearInterval(loop); // Acá se termina la promesa
        resolve();//Si queremos pasar una respuesta es a través del parámetro de resolve
      } else if (start < target && current >= target) {
        element.style.left = current;
        clearInterval(loop); // Acá se termina la promesa
        resolve();//Si queremos pasar una respuesta es a través del parámetro de resolve
      }
    }, 40);// 40 es lo que se va a demorar en ejecutar la funcion de nuevo, entre cada llamada a la funcion
  });
}

function animateVertical (elementVer, startVer, targetVer, durationVer) { //Retornará promesa con elemento
  elementVer.style.top = startVer;
  let counterVer = 0;
  const deltaVer = (targetVer - startVer) * 40 / durationVer; //delta es lo que se debe mover por cuadro
  return new Promise((resolve, reject) => { // Acá se está declarando la promesa. Los parametros indican lo que resuelven y lo que se rechaza, cuando se resuelve se llama a resolve() y si no se llama a reject()
    const loopVer = setInterval(() => { // toma una funcion y la repite cada ciertos milisegundos
      const currentVer = startVer + counterVer++ * deltaVer; //a acá indicamos el movimientoto, ++counter hace que sume y luego se multiplique. Counter ++ suma después. Formula = posición inicial + velocidad*tiempo
      elementVer.style.top = currentVer;
      if (startVer > targetVer && currentVer <= targetVer) { // acá indicamos cuando queremos que finalize el moviento que seria alb llegar a target
        elementVer.style.top = currentVer;
        clearInterval(loopVer); // Acá se termina la promesa
        resolve();//Si queremos pasar una respuesta es a través del parámetro de resolve
      } else if (startVer < targetVer && currentVer >= targetVer) {
        elementVer.style.top = currentVer;
        clearInterval(loopVer); // Acá se termina la promesa
        resolve();//Si queremos pasar una respuesta es a través del parámetro de resolve
      }
    }, 40);// 40 es lo que se va a demorar en ejecutar la funcion de nuevo, entre cada llamada a la funcion
  });
}



// Somos programadoras de la promise
//===================== Promise ===================
// Somos las usuarias de la promise

//Secuencial

const allLi = document.getElementsByTagName("li");


Promise.all( // esto devuelve un arreglo de promesas y ejecutarlas a la vez, se resuelve cuansdo terminan todas las promesas.
  [
    animateElement(allLi[1], -200, 600, 8000),
    animateElement(allLi[0], -200, 600, 6000),
    
  ]
).then((results) => {
  console.log("Todas las animaciones llegaron de izquierda a derecha");
  return Promise.all( // esto devuelve un arreglo de promesas y ejecutarlas a la vez, se resuelve cuansdo terminan todas las promesas.
    [
      animateVertical(allLi[1], 200, 500, 8000),
      animateVertical(allLi[0], 100, 500, 6000),    
    ]
  )
  }).then((results) => {
  console.log("Terminaron las animaciones llegaron abajo");
  return Promise.all(
    [
      animateElement(allLi[1], 500, 200, 8000),
      animateElement(allLi[0], 500, 100, 6000),
    ]
  )
  }).then((results) => {
    console.log("Terminaron las animaciones llegaron a izquierda");
  return Promise.all(
    [
      animateVertical(allLi[1], 700, 200, 8000),
      animateVertical(allLi[0], 600, 200, 6000),  
    ]
  )
  }).then((results) => {
    console.log("Terminaron las animaciones llegaron arriba");

}).catch(() => {
  console.log("Falló la animación");
});

