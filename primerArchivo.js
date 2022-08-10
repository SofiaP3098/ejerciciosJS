//console.error es para errores
//console.warn es para advertencias
/*
let valor1 = prompt("ingresa valor 1");
let valor2 = prompt("ingrese valor 2");

let operador = prompt("ingrese la operacion que desee \n 1. Suma \n 2.Resta \n 3. Multiplicacion \n 4. Division");

//convertir a numeros todas las variables
/*num1=parseInt(valor1);
num2=parseInt(valor2);
operacion=parseInt(operador);

if (operacion == 1){
    resultado = num1+num2;
}
if (operacion == 2){
    resultado = num1-num2;
}
if (operacion == 3){
    resultado = num1*num2;
}
if (operacion == 4){
    if (num2==0){
        console.log("No se puede dividir entre 0")
    }
    else{
        resultado = parseInt(valor1)/parseInt(valor2);
    }    
}
console.log(resultado)*/
/*
const valor1 = prompt("ingrese el numero a consultar");
num1=parseInt(valor1);
resultado=num1%2
if(resultado==1){
    console.log("El numero es impar")
}
else{
    console.log("El numero es par")
}
console.log(num1%2)*/
/*
const valor1 = prompt("Ingrese el primer numero");
const valor2 = prompt("Ingrese el segundo numero");

num1=parseInt(valor1);
num2=parseInt(valor2);

console.log(valor1);
console.log(valor2);
if(valor1>valor2){
    console.log("El primer número: "+ valor1 + " es mayor");
}
else{
    console.log("El segundo número: "+ valor2 + " es mayor");
}*/
/*
let alumnos =["guillermo","pablito","sofia","kenny"];
console.log("Alumnos",alumnos)

let variosTipo=["guillermo",13,true,1.23]
console.log(variosTipo)

console.log(alumnos[3])
alumnos[3]="juan"
console.log(alumnos[alumnos.length-1])*/
/*
let personas =["guillermo","pablito","sofia","kenny","gerardo"];
let objetos =["sillon","silla","vaso","mesa","tablero"];

console.log("Personas",personas)
console.log("Objetos",objetos)*/
/*
function sumar(a,b){
    return a+b;
}
console.log("sumar",sumar(100,20));
sumar=sumar(a,b)*/

const avisoLluvia = (aviso)=>{
    if(aviso){
        console.log("Esta lloviendo")
    }
    else{
        console.log("No esta lloviendo")
    }
}

avisoLluvia(1)

let laptops=["nuevas",1500,true,65.5]

laptops[length-1]
laptops[1]=1000
console.log(laptops[1   ])
console.log(laptops);
