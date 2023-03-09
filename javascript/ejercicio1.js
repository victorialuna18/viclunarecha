
function isANumber(valor) {
    return !isNaN(valor);
}

function sumar(valorA, valorB) {
    return valorA + valorB 
}

function multiplicar(valorA, valorB) {
    return valorA * valorB
}
function obtenerPrecio(proSelect) {
    if(proSelect === "1") {
return 2000;
    }else if (proSelect === "2") {
        return 1000;
    } else if (proSelect === "3") {
        return 1500;
    }
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

let productoSeleccionado = null;
while (!prodSeleccionadoValido) {
    productoSeleccionado = prompt("Seleccione un producto: 1. " + productoA + "- $" + precioA + 
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

let subtotal = multiplicar (cantidad,obtenerPrecio(productoSeleccionado));
total = sumar(total, subtotal);

console.log(subtotal)

while (seguirComprando) {
    let seguirComprando = prompt("Quieres seguir comprando? : " + "si" + "o" + "no").toLowerCase();
    if(seguirComprando !== "si") {
        seguirComprando === false;
    } else {
     // Hacer lo mismo que antes: pedir producto y cantidad, usar un while hasta que ponga valores válidos
     let subtotal = multiplicar (cantidad, obtenerPrecio(productoSeleccionado));
     total = sumar(total, subtotal);
    }
}

alert("Total : $" + total);
console.log("Total : $" + total)



