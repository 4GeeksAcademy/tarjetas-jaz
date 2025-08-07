window.onload = function () {
        const palos = ["♦", "♥", "♠", "♣"];
        const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "Q", "k", "A"];


        const generarNumeroRandom = () => {
          return Math.floor(Math.random() * numeros.length);

        };
        const generarPaloRandom = () => {
          return Math.floor(Math.random() * palos.length);

        };



        //Elwgir numeros y palos
        const paloElegido = palos[generarPaloRandom()];
        const numeroElegido = numeros[generarNumeroRandom()];


    

      //Obtener Elementos
      const paloArriba = document.querySelector("#paloArriba");
      const numero = document.querySelector("#numero");
      const paloAbajo = document.querySelector("#paloAbajo");
      const carta = document.querySelector(".card");



//Asignar Contenido
paloArriba.textContent = paloElegido;
numero.textContent = numeroElegido;
paloAbajo.textContent = paloElegido;


//estilos
paloArriba.style.textAlign = "left";
paloArriba.style.height = "50px";

numero.style.textAlign = "center";
numero.style.height = "80px";


paloAbajo.style.textAlign = "right";
paloAbajo.style.height = "50px";

//Color segun el palo
if (paloElegido === "♥" || paloAbajo === "♦") {
  carta.style.color = "red";
} else {
  carta.style.color = "black";
}

};