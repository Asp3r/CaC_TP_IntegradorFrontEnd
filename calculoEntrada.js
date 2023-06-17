
let botonTotal = document.getElementById("botonResumen")
let botonBorrar = document.getElementById("botonBorrar")

let numeroEntradasGlobal = document.getElementById("numeroEntradas")
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let correo = document.getElementById("infoPostulacion")

let menuDesplegable = document.getElementById("menuDesplegable")

let textoPagar = document.getElementById("montoTotal")

let entradaNeto = 200
let costeTotal = 0

function esNumero(cadenaNums) {
    
    let num = true

    for (let index = 0; index < cadenaNums.length; index++) {
        const element = cadenaNums[index];
        
        if ((element != "1") && (element != "2") && (element != "3") && (element != "4") && (element != "5") && (element != "6") && (element != "7") && (element != "8") && (element != "9")) {
            num = false
        }

    }

    if (cadenaNums.length === 0) {
        num = false
    }

    return num

}

function cliquear() {

    let cantidadEntradas = document.querySelector("#numeroEntradas")
    let numeroEntradas = cantidadEntradas.value
    //let textoPagar = document.getElementById("montoTotal")

    let opcionMenu = menuDesplegable.value


    if (esNumero(numeroEntradas)) {
        
        switch (opcionMenu) {
            case "Estudiante":
                costeTotal = (entradaNeto*0.2)*numeroEntradas
                //alert("Coste total: " + costeTotal)
                textoPagar.textContent = "Total a pagar: $" + costeTotal
                break;
    
            case "Trainee":
                costeTotal = (entradaNeto*0.5)*numeroEntradas
                //alert("Coste total: " + costeTotal)
                textoPagar.textContent = "Total a pagar: $" + costeTotal
                break;
    
            case "Junior":
                costeTotal = (entradaNeto*0.85)*numeroEntradas
                //alert("Coste total: " + costeTotal)
                textoPagar.textContent = "Total a pagar: $" + costeTotal
                break;
        }

    } else {
        alert("Error. Ingrese un numero entero en el campo de 'Cantidad'.")
    }

}

function borrarCampos() {
    
    numeroEntradasGlobal.value = ""
    nombre.value = ""
    apellido.value = ""
    correo.value = ""
    textoPagar.textContent = "Total a pagar: $"

}

botonTotal.addEventListener("click", cliquear)
botonBorrar.addEventListener("click", borrarCampos)

