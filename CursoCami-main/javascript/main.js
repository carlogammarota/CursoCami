// dispara una alerta
// alert("hola")


//Variables
let numero = 1

//imprimimos la variable en la consola del navegador
console.log(numero)


//Objetos

let alumno = {
    edad: 13,
    estatura: "1.75",
    capital: 3000,
    ciudad: "Capilla del monte"
};

console.log(alumno.edad)


//Array"s

let nombres = ["Cami", "Pepe", "Jorge", 1];

nombres.push("Charly")

console.log(nombres);


//Booleano
let semaforo = true;

//condicionales "if significa si"
//si la variable semaforo es igual a true se va a mostrar
if(semaforo){
    console.log("es verdadero (es true)")
}else {
    console.log("es falso (la variable es falsa)")
}


//funciones
function ejemplo(numero1, numero2){
    //aca iria la estructura del codigo
    console.log("ejemplo: ", numero1 + numero2)
}


ejemplo(100, 200);


//ciclo for

let chicos = ["Jorge", "Pepe", "Angelina Joli", "Brad Pitt"];

// console.log(chicos.length)

for (let index = 0; index < chicos.length; index++) {
   console.log(chicos[index])
}



let autos = [];


function dispararAlerta(){
    // alert("soy una alerta", texto);
    //traemos la data que contiene el input
    let texto = document.getElementById("cajaTexto").value;
    autos.push(texto)

    console.log(autos);

    //pisamos la data que se encuentra en el id soyUnico
    document.getElementById("soyUnico").textContent = autos;
    
}




//Tarea
//1_crear 4 funciones: suma, resta, multiplicacion, division. 
//2_ dentro de cada funcion agregarle un console.log que diga "el resultado es: "
// 3_ desde html vamos a crear 4 botones 
//    los cuales cada uno va a llamar a su respectiva funcion (suma, resta, multiplicacion, division)
//4_CSS > cambiar background-color de cada uno de los botones, utilizar una clase para cada boton.
//5_CSS > crear una clase general con los siguientes parametros 
//          .un tamaño de letra de 20px
//          .borde de 2px color rojo solido

let numero1= 0;
let numero2= 0;

//guardamos el select en una variable llamada operacion
let operacion = null;




    //imprimimos la variable operacion para ver que esta guardando
    console.log(operacion)
    
    //si se cumple la condicion tiene que llamar a su respectiva funcion ya creada
    //ejemplo
    // if(operacion == "suma"){ llamar a la funcion que corresponda }
    
function guardarDatos(){
       numero1= document.getElementById('numero1').value
       numero2= document.getElementById('numero2').value

       operacion = document.getElementById("tipoDeCalculo").value;
}

function suma(){
    guardarDatos()
   
    if(numero1 && numero2){
        let total= parseFloat(numero1) + parseFloat(numero2);
        console.log('El resultado es: ', total)
        document.getElementById('resultado').innerHTML = total;
    } else {
        alert('No has ingresado ningun numero')
    }
    
} 

//suma (100, 200);



function resta(){
    guardarDatos()
    
    if(numero1 && numero2){
        let total= parseFloat(numero1) - parseFloat(numero2);
        console.log('El resultado es: ', total)
        document.getElementById('resultado').innerHTML = total;
    } else {
        alert('No has ingresado ningun numero')
    }
}

//resta (400, 150);



function multiplicar( e, f){
    guardarDatos()
    
    if(numero1 && numero2){
        let total= parseFloat(numero1) * parseFloat(numero2);
        console.log('El resultado es: ', total)
        document.getElementById('resultado').innerHTML = total;
    } else {
        alert('No has ingresado ningun numero')
    }
}

//multiplicar (50, 300);



function division( g, h){
    guardarDatos()

     if(numero1 && numero2){
        let total= parseFloat(numero1) / parseFloat(numero2);
        console.log('El resultado es: ', total)
        document.getElementById('resultado').innerHTML = total;
    } else {
        alert('No has ingresado ningun numero')
    }
}


//aca iria la funcion que determina que calculo quiere hacer el individuo
function determinar(){
    guardarDatos()
    if (operacion == "suma") {
        suma(numero1, numero2) 
    } else if (operacion == "resta") {
        resta(numero1, numero2)
    } else if (operacion == "multiplicacion") {
        multiplicar (numero1, numero2)
    } else {
        division(numero1, numero2)
    }
    
}

//division (980, 70);