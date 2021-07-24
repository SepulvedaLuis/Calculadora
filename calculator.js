//Funciones de las operaciones de la calculadora
const sumar = (a, b) => a + b;

const resta = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => {
    if(b !=  0){
        return a / b;
    }else{
        alert("Division 0, no permitido");
    }
}
//Variables que guardara los numeros a operar y la operación indicada
var operandoA, operandoB, operacion;

function init(){
    //variables que tomaran los valores de cada ID o etiqueta button
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("sumar");
    var restar = document.getElementById("restar");
    var divison = document.getElementById("division");
    var multiplicacion = document.getElementById("multiplicar");
    var cero = document.getElementById("cero");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("one");
    var dos = document.getElementById("two");
    var tres = document.getElementById("three");
    var cuatro = document.getElementById("four");
    var cinco = document.getElementById("five");
    var seis = document.getElementById("six");
    var siete = document.getElementById("seven");
    var ocho = document.getElementById("eight");
    var nueve = document.getElementById("nine");

    //Eventos onclick para saber que número fue seleccionado
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }
    //Evento onClick de la tecla borrar la cual llama una función resetear
    reset.onclick = function(e){
        resetear();
    }
    //Eventos onClick según el operador que se sellecione
    suma.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "+";
        limpiar();
        
    }
    restar.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "-";
        limpiar();
        
    }
    multiplicacion.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "*";
        limpiar();
        
    }
    divison.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operandoB = resultado.textContent;
        resolver();
    }
}

//Funciones adicionales que serán para limpiar la pantalla del resultado y la
//función para resolver según la operación y números almacenados
function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    operandoB = 0;
    operandoA = 0;
    operacion = "";
}
//Contamos con un switch para saber operación vamos hacer y
//así podemos llamar la operación a realizar de la calculadora
function resolver(){
    let res = 0;
    switch(operacion){
      case "+":
        res = sumar(parseFloat(operandoA),parseFloat(operandoB));
        break;
      case "-":
          res = resta(parseFloat(operandoA),parseFloat(operandoB));
          break;
      case "*":
        res = multiplicar(parseFloat(operandoA),parseFloat(operandoB));
        break;
      case "/":
        res = dividir(parseFloat(operandoA),parseFloat(operandoB));
        break;
    }
    resetear();
    resultado.textContent = res;
}