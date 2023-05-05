let PrecioDurlock = 3000
let PrecioMachimbrePVC = 400
let PrecioEstructurasDeHierro = 1500
let PrecioCielorrasos = 1000

// Obtener todos los botones de "+" y "-" y agregar un EventListener a cada uno
let plusButtons = document.querySelectorAll(".plus-btn");
let minusButtons = document.querySelectorAll(".minus-btn");

// Agregar un EventListener a cada botón de "Agregar"
plusButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Obtener el input de cantidad y agregar 1 al valor actual
    let input = button.previousElementSibling;
    let currentValue = parseInt(input.value);
    input.value = currentValue + 1;

    // Actualizar el precio total
    updateTotal();
  });
});

// Agregar un EventListener a cada botón de "Quitar"
minusButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Obtener el input de cantidad y restar 1 al valor actual, pero no permitir que sea menor que 0
    let input = button.nextElementSibling;
    let currentValue = parseInt(input.value);
    if (currentValue > 0) {
      input.value = currentValue - 1;
    }

    // Actualizar el precio total
    updateTotal();
  });
});

// Función para actualizar el precio total
function updateTotal() {
    let items = document.querySelectorAll(".item");
 
  
    // Calcular el precio total sumando el precio de cada producto multiplicado por su cantidad
    items.forEach(function(item) {
      let priceString = item.querySelector("p").textContent.substring(8);
      let price = parseFloat(priceString.replace(",", ""));
      let quantity = parseInt(item.querySelector("input").value);
      totalPrice += price * quantity;
    });
  
    // Actualizar el precio total en la página
    let totalPriceElement = document.querySelector("#total-price");
    totalPriceElement.textContent = "$" + totalPrice;
  }