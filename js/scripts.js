function calculadora(){
    let carritoDeCompras = []

let salir = false

alert("¡Bienvenid@ a la página web oficial de Matías Beitez construcciones! Aquí encontrará y tendrá acceso a todo nuestro catálogo.")
    alert("Solo por hoy, con su compra mayor a 100.000 pesos, 10% de descuento y hasta 12 cuotas sin interés en todos los materiales.\nAdemás, envío gratis para toda compra superior a 50.000 pesos")
    alert("Nuestro catálogo cuenta con:\nDurlock (3000)\nMachimbres de PVC (400)\nEstructuras de hierro (1500)\nCielorrasos (1000)")

while (!salir) {
  let producto = prompt("¿Qué producto desea añadir al carrito?\n(Durlock/Machimbre de PVC/Estructuras De Hierro/Cielorrasos)\n(Escriba 'salir' para terminar o continuar al pago)")

  if (producto.toLowerCase() === "salir") {
    salir = true
  } else {
    let precio
    if (producto === "durlock") {
      precio = 3000
    } else if (producto === "machimbre de pvc") {
      precio = 400
    } else if (producto === "estructuras de hierro") {
      precio = 1500
    } else if (producto === "cielorrasos") {
      precio = 1000
    } else {
      alert("El producto ingresado no es válido.")
    }

    if (precio) {
        let cantidad = parseInt(prompt("¿Cuántas unidades desea agregar al carrito?"))
        if (!isNaN(cantidad) && cantidad > 0) {
          let total = precio * cantidad
          carritoDeCompras.push({producto: producto, precio: total})
          alert("Se ha añadido al carrito: " + producto + " - Precio total: $" + total)
        } else {
          alert("La cantidad ingresada no es válida.")
        }
      }
  
  }
}

if (carritoDeCompras.length === 0) {
    alert("El carrito de compras está vacío, no se cobrará envío")
  }

let totalCarrito = 0
for (let i = 0; i < carritoDeCompras.length; i++) {
  totalCarrito += carritoDeCompras[i].precio
}

let cargoEnvio = 0
if (totalCarrito < 50000) {
  cargoEnvio = 1564
}

if (totalCarrito === 0){
    cargoEnvio = 0
}

let descuento = 0
if (totalCarrito > 100000) {
  descuento = totalCarrito * 0.1
}

let totalConEnvioYDescuento = totalCarrito + cargoEnvio - descuento

let confirmacion = confirm("El contenido actual del carrito es: " + JSON.stringify(carritoDeCompras) + "\nTotal del carrito: $" + totalCarrito + "\nCargo extra por envío: $" + cargoEnvio + "\nDescuento aplicado: $" + descuento + "\nTotal con envío y descuento: $" + totalConEnvioYDescuento + "\n¿Desea confirmar el pago? (aceptar = si / cancelar = no)")


if (confirmacion) {
    let cuotas = parseInt(prompt("¿En cuántas cuotas desea realizar el pago?"))
    let montoCuota = totalConEnvioYDescuento / cuotas
    alert(`El monto total de cada cuota es de $${montoCuota.toFixed(2)}. El costo total del producto incluyendo el cargo por envío y el descuento aplicable es de $${totalConEnvioYDescuento.toFixed(2)}`)
    let segundaConfirmación = confirm("¿Desea continuar? (aceptar = si / cancelar = no)")
    if (segundaConfirmación) {
        alert("¡Gracias por su compra!")
    }else {
        alert("Su compra ha sido cancelada.")
    }
    carrito = []
  } else {
    alert("Su compra ha sido cancelada.")
  }

}
