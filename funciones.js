function CallMenu() {
    let nro_ejercicio = parseInt(
        prompt("ingrese el numero de ejercicio que quiere ejecutar: \r\n 1.suma. \r\n 2.Promedio de Examanes \r\n 3. Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.calcular el area del Circulo \r\n 6. Calcular salario semanal \r\n 7. convertir pulgadas \r\n 8. cambiar a dolares \r\n 9. Saber la edad del empleado \r\n 10. Calcular la persona con menor edad \r\n 11. Calcular el bono por antigüedad \r\n 12. Calcular el incremento de salario \r\n 13. Saber la cantidad de aprobados y desaprobados \r\n 14. Calcular la cantidad de focos \r\n 15. Saber si puede votar")
    );
    if (isNaN(nro_ejercicio)) {
        alert("porfavor ingresa valores numericos");
    } else {
        MenuEjercicios(nro_ejercicio)
    }
}

const MenuEjercicios = (nro_ejercicio) => {
    switch (nro_ejercicio) {
        case 1:
            alert(calcularSuma());
            break;
        case 2:
            alert(calcularExamenes())
            break;
        case 3:
            alert(areaRectangulo())
            break;
        case 4:
            alert(areaTriangulo())
            break;
        case 5:
            alert(areaCirculo())
            break;
        case 6:
            alert(sueldoSemanal())
            break;
        case 7:
            alert(pulgadas())
            break;
        case 8:
            alert(dolares())
            break;
        case 9:
            alert(nacimiento())
            break;
        case 10:
            alert(personaMenor())
            break;
        case 11:
            alert(bono())
            break;
        case 12:
            alert(salario())
            break;
        case 13:
            alert(aprobados())
            break;
        case 14:
            alert(focos())
            break;
        case 15:
            alert(elecciones())
            break;
        default:
            alert("Ejercicio no encontrado")
            break;
    }
}

function calcularSuma() {
    let num1 = parseInt(prompt("Ingrese primer numero"));
    let num2 = parseInt(prompt("Ingrese segundo numero"));
    return isNaN(num1) || isNaN(num2) ? "Ingrese valores válidos" : `La suma es ${num1 + num2}`
}
function calcularExamenes() {
    let num1 = parseInt(prompt("Ingrese nota del primer examen"));
    let num2 = parseInt(prompt("Ingrese nota del segundo examen"));
    return isNaN(num1) || isNaN(num2) ? "Ingrese valores válidos" : `El resultado de los exámenes es ${(num1 + num2) / 2}`
}
function areaRectangulo() {
    let num1 = parseInt(prompt("Ingrese base del rectangulo"));
    let num2 = parseInt(prompt("Ingrese altura del rectangulo"));
    return isNaN(num1) || isNaN(num2) ? "Ingrese valores válidos" : `El área del rectángulo es ${(num1 * num2)}`
}
function areaTriangulo() {
    let num1 = parseInt(prompt("Ingrese base del triangulo"));
    let num2 = parseInt(prompt("Ingrese altura del triangulo"));
    return isNaN(num1) || isNaN(num2) ? "Ingrese valores válidos" : `El área del triangulo es ${((num1 * num2) / 2)}`
}

function areaCirculo() {
    let num1 = parseInt(prompt("Ingrese el radio de la circunferencia"));
    return isNaN(num1) ? "Ingrese valores válidos" : `El área del círculo es ${Math.PI * Math.pow(num1, 2)}`
}
function sueldoSemanal() {
    let num1 = parseInt(prompt("Ingrese horas trabajadas"));
    let num2 = parseInt(prompt("Ingrese salario por hora"));
    return isNaN(num1) || isNaN(num2) ? "Ingrese valores válidos" : `El sueldo semanal es ${(num1 * num2)}`
}
function pulgadas() {
    let num1 = parseInt(prompt("Ingrese los metros requeridos"));
    return isNaN(num1) ? "Ingrese valores válidos" : `La cantidad de pulgadas a necesitar es ${(num1 * 0.0254)}`
}
function dolares() {
    let num1 = parseInt(prompt("Ingrese la cantidad de dólares"));
    return isNaN(num1) ? "Ingrese valores válidos" : `El dinero en soles es ${(num1 * 3.9)}`
}
function nacimiento() {
    let num1 = parseInt(prompt('Ingrese el año de su nacimiento'));
    let presentYear = new Date();
    let year = presentYear.getFullYear();
    return isNaN(num1) ? "Ingrese valores válidos" : `Su edad es: ${(year - num1)}`
}
function personaMenor() {
    let nom1 = prompt('Ingrese el nombre de la primera persona');
    let num1 = parseInt(prompt('Ingrese la edad de la primera persona'));
    let nom2 = prompt('Ingrese el nombre de la segunda persona');
    let num2 = parseInt(prompt('Ingrese la edad de la segunda persona'));
    let nom3 = prompt('Ingrese el nombre de la tercera persona');
    let num3 = parseInt(prompt('Ingrese la edad de la tercera persona'));
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        return "Los valores ingresados no son válidos";
    }
    else {
        if (num1 < num2) {
            if (num1 < num3) {
                return `La persona con menor edad es: ${nom1} y su edad es: ${num1}`;
            }
            else {
                return `La persona con menor edad es: ${nom3} y su edad es: ${num3}`;
            }
        }
        else {
            if (num2 < num3) {
                return `La persona con menor edad es: ${nom2} y su edad es: ${num2}`;
            }
            else {
                return `La persona con menor edad es: ${nom3} y su edad es: ${num3}`;
            }
        }
    }
}
function bono() {
    let year = parseInt(prompt('Ingrese el año de ingreso del empleado'));
    let presentYear = new Date();
    let present = presentYear.getFullYear();
    let dif = present - year;
    if (dif <= 5) {
        return `El bono que le corresponde es: ${(dif * 100)}`;
    }
    else {
        return `El bono que le corresponde es: ${1000}`;
    }
}
function salario() {
    let salary = 1500;
    let salaries = new Array();
    for (var i = 0; i < 6; i++) {
        salary=salary+(salary*0.1);
        salaries[i]=salary.toFixed(2)
    }
    let strSalary=salary.toFixed(2)
    return `El salario del profesor después de 6 años es: ${strSalary} y sus salarios anuales fueron: ${(salaries)}`;
}
function aprobados(){
    let total=0;
    let approved=0;
    let calif=parseInt(prompt("Ingrese la nota aprobatoria"));
    while(true){
        let req=parseInt(prompt("Si desea agregar una nota presione 1, si desea ver la cantidad de aprobados y desaprobados ingrese 0"));
        if(req==1){
            let note=parseInt(prompt("Ingrese la nota del estudiante"));
            if (note>=calif){
                approved++;
            }
            total++;
        }
        else{
            break;
        }
    }
    return `La cantidad de alumnos es: ${total} de los cuales ${approved} son los aprobados y ${(total-approved)} son los reprobados`
}
function focos(){
    let total=0;
    let green=0;
    let white=0;
    let red=0;
    while(true){
        let req=parseInt(prompt("Si desea agregar un nuevo foco presione 1, si desea ver la cantidad de cada color de foco ingrese 0"));
        if(req==1){
            let enter=parseInt(prompt("Ingrese el color del foco: \n 1. Verde \n 2. Blanco \n 3. Rojo"));
            if (enter==1){
                green++;
            } else if (enter==2){
                white++;
            }else{
                red++;
            }
            total++;
        }
        else{
            break;
        }
    }
    return `La cantidad total de focos es: ${total} de los cuales ${green} son verdes, ${white} son blancos y ${red} son rojos`
}
function elecciones(){
    while(true){
        let req=parseInt(prompt("Si desea realizar la consulta presione 1, si desea salir ingrese 0"));
        if(req==1){
            let enter=parseInt(prompt("Ingrese su edad"));
            if (enter>=18){
                alert("Usted si puede votar en estas elecciones")
            }else{
                alert("Usted aún no puede votar en estas elecciones")
            }
        }
        else{
            break;
        }
    }
    return`Gracias por sus consultas`
}