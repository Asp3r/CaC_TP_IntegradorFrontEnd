//objetos literales

const producto = {

    //atributos:

    id: 1001,
    nombre: "oreo",
    marca: "bagley",
    precio: 350,
    cantidad: 1500,     

    //metodos (metodo = funcion dentro de un objeto):

    inicializar: function name() {
        
        console.log("Estoy inicializando.")

    },

}

console.log(producto.id)

producto.inicializar()

//TAREA: Crear 3 objetos literales distintos

let persona = {

    id: 001,
    nombre: "juan",
    apellido: "perez",
    edad: 38,
    estado: true,

    //metodos

    ingresar: function(){
        console.log("ingresando...")
    },

    modificar: function(){
        console.log("Modificando datos...")
    },

    verificarUsuario: function(){
        console.log("Verificando pass y usuario...")
    }

}


//TAREA 2: Hacer unn array de objetos




