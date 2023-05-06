// Obtener todos los botones de "+" y "-" y agregar un EventListener a cada uno
let plusButtons = document.querySelectorAll(".plus-btn")
let minusButtons = document.querySelectorAll(".minus-btn")
let totalPrice = 0

// Agregar un EventListener a cada botón de "Agregar"
plusButtons.forEach(function(button) {
button.addEventListener("click", function() {
    // Obtener el input de cantidad y agregar 1 al valor actual
    let input = button.previousElementSibling
    let currentValue = parseInt(input.value)
    input.value = currentValue + 1
    // Actualizar el precio total
    updateTotal()
})
})

// Agregar un EventListener a cada botón de "Quitar"
minusButtons.forEach(function(button) {
button.addEventListener("click", function() {
    // Obtener el input de cantidad y restar 1 al valor actual, pero no permitir que sea menor que 0
    let input = button.nextElementSibling
    let currentValue = parseInt(input.value)
    if (currentValue > 0) {
    input.value = currentValue - 1
    }
    // Actualizar el precio total
    updateTotal()
})
})
// Función para actualizar el precio total
function updateTotal() {
    let items = document.querySelectorAll(".item")
    totalPrice = 0
    // Calcular el precio total sumando el precio de cada producto multiplicado por su cantidad
    items.forEach(function(item) {
    let priceString = item.querySelector("p").textContent.substring(9)
    let price = parseFloat(priceString.replace(",", ""))
    let quantity = parseInt(item.querySelector("input").value)
    totalPrice += price * quantity
    let shippinFee = 0
    if (totalPrice < 50000) {
        shippinFee = 1564
    }
    if (totalPrice === 0){
        shippinFee = 0
    }
    totalPrice = totalPrice + shippinFee
    })

    // Actualizar el precio total en la página
    let totalPriceElement = document.querySelector("#total-price")
    totalPriceElement.textContent = "$" + totalPrice
}


let cuotasInput = document.querySelector('#cuotas')
let calcularCuotasButton = document.querySelector('#calcularCuotas')
let montoCuotaElement = document.querySelector('#montoCuota')



calcularCuotasButton.addEventListener('click', function() {
let cuotas = parseInt(cuotasInput.value)
if (![1, 3, 6, 9, 12].includes(cuotas)) {
    alert("Por favor, elija un número de cuotas válido (1/3/6/9/12)")
    return
}
let montoCuota = totalPrice / cuotas
montoCuotaElement.textContent = `El monto total de cada cuota es de $${montoCuota.toFixed(2)}`})

const mensajeCompraElement = document.querySelector('#mensajeCompra')
const confirmarCompraSiButton = document.querySelector('#confirmarCompraSi')
const confirmarCompraNoButton = document.querySelector('#confirmarCompraNo')

confirmarCompraSiButton.addEventListener('click', function() {
mensajeCompraElement.textContent = "¡Gracias por su compra!"
})

confirmarCompraNoButton.addEventListener('click', function() {
mensajeCompraElement.textContent = "Su compra ha sido cancelada."
})
