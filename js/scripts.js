let PrecioDurlock = 3000
let PrecioMachimbrePVC = 400
let PrecioEstructurasDeHierro = 1500
let PrecioCielorrasos = 1000
let interes = 1.1
let cuotas
let PrecioEnvio = 1564

function ComingSoon(){
    alert("¡Disponible pronto!")
}
function calculadora(){
    alert("¡Bienvenid@ a la página web oficial de Matías Beitez construcciones! Aquí encontrará y tendrá acceso a todo nuestro catálogo.")
    alert("Solo por hoy, con su compra mayor a 100.000 pesos, 10% de descuento y hasta 12 cuotas sin interés en todos los materiales.\nAdemás, envío gratis para toda compra superior a 50.000 pesos")
    alert("Nuestro catálogo cuenta con:\nDurlock\nMachimbres de PVC\nEstructuras de hierro\nCielorrasos")
    let busqueda = prompt("¿Qué es lo que busca? (Durlock/PVC/EstructurasDeHierro/Cielorrasos)").toUpperCase().replace(/\s+/g, '')
    if (busqueda == "DURLOCK"){
        alert("El precio del m2 de durlock es de 3000 pesos")
        let cantidad = prompt("¿Cuántos metros cuadrados está buscando?")
        preciofinal = PrecioDurlock * cantidad
        if (preciofinal > 50000){
            PrecioEnvio = 0
        }
        if (preciofinal > 100000){
            preciofinal = preciofinal * 0.9
            interes = 1
        }
        preciofinal + PrecioEnvio
        alert("El precio final de su compra será de " + preciofinal.toFixed() + " (tenga en cuenta que el precio del envío de su pedido será de " + PrecioEnvio + " ).")

        continuar = prompt("¿Desea continuar con su compra? (sí/no)")
        continuar = continuar.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        if(continuar === "si"){
            cuotas = prompt("¿En cuantas cuotas desea realizar su compra? (1/3/6/9/12)")
            if (cuotas === 1){
                interes = 1
            }
            if(isNaN(cuotas) || cuotas !== 1 || 3 || 6 || 9 || 12){
                alert("Por favor, ingrese un número de cuotas válido para realizar la operación (1/3/6/9/12).")
                cuotas = prompt("¿En cuantas cuotas desea realizar su compra? (1/3/6/9/12)")
            }
            preciofinal = preciofinal / cuotas * interes
            alert("El precio final por cuota será de " + preciofinal.toFixed())
            confirmacion = prompt("¿Desea continuar con la operación? (sí/no)")
            confirmacion = confirmacion.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            if (confirmacion === "si"){
                alert("¡Muchas gracias por su compra, vuelva pronto!")
            }else{
                alert("¡No hay problema! puede seguir navegando por nuestra página y realizar consultas cuando guste.")
            }
        }else{
            alert("¡No hay problema! puede seguir navegando por nuestra página y realizar consultas cuando guste.")
        }
    }else if(busqueda == "PVC"){
        alert("El precio del m2 de machimbre de PVC es de 400 pesos")
        let cantidad = prompt("¿Cuántos metros cuadrados está buscando?")
        preciofinal = PrecioMachimbrePVC * cantidad
        if (preciofinal > 50000){
            PrecioEnvio = 0
        }
        if (preciofinal > 100000){
            preciofinal = preciofinal * 0.9
            interes = 1
        }
        preciofinal + PrecioEnvio
        alert("El precio final de su compra será de " + preciofinal.toFixed() + " (tenga en cuenta que el precio del envío de su pedido será de " + PrecioEnvio + " ).")

        continuar = prompt("¿Desea continuar con su compra? (sí/no)")
        continuar = continuar.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        if(continuar === "si"){
            cuotas = prompt("¿En cuantas cuotas desea realizar su compra? (1/3/6/9/12)")
            if (cuotas === 1){
                interes = 1
            }
            if(isNaN(cuotas) || cuotas !== 1 || 3 || 6 || 9 || 12){
                alert("Por favor, ingrese un número de cuotas válido para realizar la operación (1/3/6/9/12).")
                cuotas = prompt("¿En cuantas cuotas desea realizar su compra? (1/3/6/9/12)")
            }
            preciofinal = preciofinal / cuotas * interes
            alert("El precio final por cuota será de " + preciofinal.toFixed())
            confirmacion = prompt("¿Desea continuar con la operación? (sí/no)")
            confirmacion = confirmacion.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            if (confirmacion === "si"){
                alert("¡Muchas gracias por su compra, vuelva pronto!")
            }else{
                alert("¡No hay problema! puede seguir navegando por nuestra página y realizar consultas cuando guste.")
            }
        }else{
            alert("¡No hay problema! puede seguir navegando por nuestra página y realizar consultas cuando guste.")
        }
    }else if(busqueda == "ESTRUCTURASDEHIERRO"){
        alert("El precio del metro de las estructuras de hierrro es de 1500 pesos")
        let cantidad = prompt("¿Cuántos metros está buscando?")
        preciofinal = PrecioEstructurasDeHierro * cantidad
        if (preciofinal > 50000){
            PrecioEnvio = 0
        }
        if (preciofinal > 100000){
            preciofinal = preciofinal * 0.9
            interes = 1
        }
        preciofinal + PrecioEnvio
        alert("El precio final de su compra será de " + preciofinal.toFixed() + " (tenga en cuenta que el precio del envío de su pedido será de " + PrecioEnvio + " ).")

        continuar = prompt("¿Desea continuar con su compra? (sí/no)")
        continuar = continuar.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        if(continuar === "si"){
            cuotas = prompt("¿En cuantas cuotas desea realizar su compra? (1/3/6/9/12)")
            if (cuotas === 1){
                interes = 1
            }
            if(isNaN(cuotas) || cuotas !== 1 || 3 || 6 || 9 || 12){
                alert("Por favor, ingrese un número de cuotas válido para realizar la operación (1/3/6/9/12).")
                cuotas = prompt("¿En cuantas cuotas desea realizar su compra? (1/3/6/9/12)")
            }
            preciofinal = preciofinal / cuotas * interes
            alert("El precio final por cuota será de " + preciofinal.toFixed())
            confirmacion = prompt("¿Desea continuar con la operación? (sí/no)")
            confirmacion = confirmacion.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            if (confirmacion === "si"){
                alert("¡Muchas gracias por su compra, vuelva pronto!")
            }else{
                alert("¡No hay problema! puede seguir navegando por nuestra página y realizar consultas cuando guste.")
            }
        }else{
            alert("¡No hay problema! puede seguir navegando por nuestra página y realizar consultas cuando guste.")
        }
    }else if(busqueda == "CIELORRASOS"){
        alert("El precio del m2 de Cielorraso de cualquier tipo es de 1000 pesos")
        let cantidad = prompt("¿Cuántos metros cuadrados está buscando?")
        preciofinal = PrecioCielorrasos * cantidad
        if (preciofinal > 50000){
            PrecioEnvio = 0
        }
        if (preciofinal > 100000){
            preciofinal = preciofinal * 0.9
            interes = 1
        }
        preciofinal + PrecioEnvio
        alert("El precio final de su compra será de " + preciofinal.toFixed() + " (tenga en cuenta que el precio del envío de su pedido será de " + PrecioEnvio + " ).")

        continuar = prompt("¿Desea continuar con su compra? (sí/no)")
        continuar = continuar.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        if(continuar === "si"){
            cuotas = prompt("¿En cuantas cuotas desea realizar su compra? (1/3/6/9/12)")
            if (cuotas === 1){
                interes = 1
            }
            if(isNaN(cuotas) || cuotas !== 1 || 3 || 6 || 9 || 12){
                alert("Por favor, ingrese un número de cuotas válido para realizar la operación (1/3/6/9/12).")
                cuotas = prompt("¿En cuantas cuotas desea realizar su compra? (1/3/6/9/12)")
            }
            preciofinal = preciofinal / cuotas * interes
            alert("El precio final por cuota será de " + preciofinal.toFixed())
            confirmacion = prompt("¿Desea continuar con la operación? (sí/no)")
            confirmacion = confirmacion.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            if (confirmacion === "si"){
                alert("¡Muchas gracias por su compra, vuelva pronto!")
            }else{
                alert("¡No hay problema! puede seguir navegando por nuestra página y realizar consultas cuando guste.")
            }
        }else{
            alert("¡No hay problema! puede seguir navegando por nuestra página y realizar consultas cuando guste.")
        }
    }else{
        alert("No contamos con dicho producto en nuestro catálogo")
    }
}