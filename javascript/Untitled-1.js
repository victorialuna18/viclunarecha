
function isANumber(valor) {
    return !isNaN(valor);
}

function sumar(total, precio) {
    return total + precio 
}

function multiplicar(cantidad,precio) {
    return cantidad * precio
}
function obtenerPrecio(proSelect) {
    if(

    )
}

let productoA = 'Camisa';
let precioA = 2000 ; 
let productoB = 'Remera';
let precioB =  1000 ;
let productoC = 'Short';
let precioC =  1500;

let total = 0;
let seguirComprando = true;


let prodSeleccionadoValido = false;

while (!prodSeleccionadoValido) {

    let productoSeleccionado = prompt("Seleccione un producto: 1. " + productoA + "- $" + precioA + 
    "2. "+ productoB + "- $" + precioB + 
    "3. " + productoC + "- $" + precioC);

    if(isANumber(productoSeleccionado)) {
        if(parseInt(productoSeleccionado) < 1 || parseInt(productoSeleccionado) > 3) {
            alert("Opción seleccionada es inválida")
        } else {
            prodSeleccionadoValido = true;
        }
    } else {
        alert("Ingrese un valor valido");
    }

}
    let cantidad = prompt("Indique la cantidad deseada:")

let subtotal = multiplicar (cantidad,obtenerPrecio(productoSeleccionado))

while (seguirComprando) {
    if(productoSeleccionado == 1) {
        total = sumar(total, precioA);
        alert("Usted seleccionó el producto Camisa por un valor de $2000");//hacer igual que en console.log
        console.log("seleccionaste : " + productoA + "- $" + precioA)
    }else if (productoSeleccionado == 2) {
        total = sumar(total, precioB);
        alert("Usted seleccionó el producto Remera por un valor de $1000");
        console.log("seleccionaste : " + productoB + "- $" + precioB)
    } else if (productoSeleccionado == 3) {
        total = sumar(total, precioC);
        alert("Usted seleccionó el producto Short por un valor de $1500");
        console.log("seleccionaste : " + productoC + "- $" + precioC)
    } else {
        alert("Por favor, seleccione un producto entre el 1 y el 3")
        console.log("Por favor, seleccione un producto entre el 1 y el 3")
    }
    alert( "actual total" + " $ " + total);
    console.log("actual total" + " $ " + total);
    let seguirComprando = prompt("Quieres seguir comprando? : " + "si" + "o" + "no").toLowerCase();
    if (seguirComprando == "no") {
        seguirComprando = false
        ;
    }

}

alert("Total : $" + total);
console.log("Total : $" + total)


/*const valor = 2;
if (!isNaN(valor)) {
    console.log('Es un número');
  }
*/
//para comprobar si el valor que se ingresa es numerico o no. 
