// Desarrollar un programa en JS que reciba como parámetro una calificación numérica a través de un elemento <input> tipo número dentro de un formulario HTML. El archivo JS debe tener una función que haga la evaluación de acuerdo a la siguiente tabla:
// Rango de calificaciones 	Equivalencia
// [0,6) 	NA
// [6,7.5) 	S
// [7.5,9) 	B
// [9,10) 	MB
// 10 	    LAP
// Si el usuario ingresa una calificación menor a 0 o mayor a 10 se deberá mandar un mensaje de error. El resultado deberá escribirse en un párrafo.

function evaluacion() {
    let p = document.getElementById("resultado");
    let resultado = "";
    let calificacion = document.getElementById("calificacion").value;
    if (calificacion >= 0 && calificacion < 6) {
        resultado = "NA";
    } else if (calificacion >= 6 && calificacion < 7.5) {
        resultado = "S";
    } else if (calificacion >= 7.5 && calificacion < 9) {
        resultado = "B";
    } else if (calificacion >= 9 && calificacion < 10) {
        resultado = "MB";
    } else if (calificacion == 10) {
        resultado = "LAP";
    } else {
        resultado = "Error: la calificación debe estar entre 0 y 10";
    }
    p.innerHTML = resultado;
}


// 1. Desarrollar un script en JavaScript que reciba un número a través de un <input> tipo número dentro de un formulario HTML y calcule el factorial (de forma recursiva) de ese número.
// Considere que si n es positivo el factorial es n! = n*(n-1)!, si n es cero por definición el factorial es 1 y si n es negativo el factorial no está definido.
// Escriba el resultado en un párrafo.

function calcularFactorial() {
    let p = document.getElementById("resultado2");
    let numero = document.getElementById("numero").value;
    let resultado = factorial(numero);
    p.innerHTML = resultado;
}

function factorial(n) {
    if (n < 0) {
        return "Error: el factorial no está definido para números negativos";
    } else if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


// 2. Desarrolle un programa en JavaScript que reciba información de un formulario de HTML. El formulario deberá tener las siguientes entradas y el tipo de <input> indicado.

//     Nombre (text)
//     Correo (email)
//     Edad (number)
//     Género (radio)
//     Fecha de nacimiento (date)
//     Color favorito (color)

// Imprimir en un párrafo toda la información recibida de formulario.

function imprimirFormulario() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let edad = document.getElementById("edad").value;
    let genero = extraccionRadio("genero");
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let colorFavorito = document.getElementById("color").value;
    let resultado = `Nombre: ${nombre}, Correo: ${correo}, Edad: ${edad}, Género: ${genero}, Fecha de nacimiento: ${fechaNacimiento}, Color favorito: ${colorFavorito}`;
    document.getElementById("resultado3").textContent = resultado;
}

function extraccionRadio(name) {
    // Tercer método

    let resultado;
    let z = document.querySelector(`input[name=${name}]:checked`);

    if(z!=null) {
        resultado = z.value;
    }

    return resultado;
}              

