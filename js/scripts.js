let PrecioDurlock = 5000
let PrecioMachimbrePVC = 6000
let interes = 1.1
let cuotas

function login(){
    alert("¡Bienvenid@ a la página web oficial de Matías Beitez construcciones! Aquí encobtrará y tendrá acceso a todo nuestro catálogo.")
    alert("Solo por hoy, con su compra mayopr a 100.000 pesos, 10% de descuento y hasta 12 cuotas sin interés en todos los materiales.")
    let busqueda = prompt("¿Qué es lo que busca? (durlock/PVC)")
    if (busqueda == "durlock"){
        alert("El precio del m2 de durlock es de 5000 pesos")
        let cantidad = prompt("¿Cuántos metros cuadrados está buscando?")
        preciofinal = PrecioDurlock * cantidad
        while (preciofinal > 100000){
            preciofinal = preciofinal * 0.9
            interes = 1
        }
        alert("El precio final de su compra será de " + preciofinal)

        continuar = prompt("¿Desea continuar con su compra? (sí/no)")
        if(continuar == "sí"){
            cuotas = prompt("¿En cuantas cuotas desea realizar su compra? (1/3/6/9/12)")
            preciofinal = preciofinal / cuotas * interes
            alert("El precio final por cuota será de " + preciofinal)
            confirmacion = prompt("¿Desea continuar con la operación? (sí/no)")
            if (confirmacion == "sí"){
                alert("¡Muchas gracias por su compra, vuelva pronto!")
            }else{
                alert("¡No hay problema! puede seguir navegando por nuestra página y realizar consultas cuando guste.")
            }

        }else{
            alert("¡No hay problema! puede seguir navegando por nuestra página y realizar consultas cuando guste.")
        }
    }else if(busqueda == "PVC"){
        alert("El precio del m2 de machimbrePVC es de 6000 pesos")
        let cantidad = prompt("¿Cuántos metros cuadrados está buscando?")
        preciofinal = PrecioMachimbrePVC * cantidad
        while (preciofinal > 100000){
            preciofinal = preciofinal * 0.9
            interes = 1
        }
        alert("El precio final de su compra será de " + preciofinal)

        continuar = prompt("¿Desea continuar con su compra? (sí/no)")
        if(continuar == "sí"){
            cuotas = prompt("¿En cuantas cuotas desea realizar su compra? (1/3/6/9/12)")
            preciofinal = preciofinal / cuotas * interes
            alert("El precio final por cuota será de " + preciofinal)
            confirmacion = prompt("¿Desea continuar con la operación? (sí/no)")
            if (confirmacion == "sí"){
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



//let m2 = prompt("¿Cuántos metros cuadrados quiere?")


login()