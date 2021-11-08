// function f(){
//     console.log('Hola');
//     }
//     try{
//         f();
//     }catch{
//         console.log('Se ha producido una excepción');
//     }finally{
//         console.log('El finally se ejecuta sí o sí');
//     }


    // try {
    //     throw 'Error creado por Davinia';  //Lanzamos la excepción 
    // } catch (e) { //capturamos el error 
    //     console.log('Se ha producido una excepción: ' + e); //e : string de throw 
    // } finally {
    //     console.log('El finally se ejecuta sí o sí');
    // }


    // try {
    //     throw 'Error creado por Davinia';
    // } catch (e) {
    //     console.log('Se ha producido una excepción: ' + e);
    // } finally {
    //     console.log('El finally se ejecuta sí o sí');
    // }


    // try {
    //     throw { toString: function () { return "Error creado por Davinia desde una función anónima";} };
    // } catch (e) {
    //     console.log('Se ha producido una excepción: ' + e);
    // } finally {
    //     console.log('El finally se ejecuta sí o sí');
    // } 


    // try {
    //     function f() { 
    //         return "'Error creado por Davinia desde una función"; 
    //     };
    //     throw { toString: f };
    // } catch (e) {
    //     console.log('Se ha producido una excepción: ' + e);
    // } finally {
    //     console.log('El finally se ejecuta sí o sí');
    // }

// lanzar una excepción propia usando un objeto creado por nosotros


    // Crea un objeto tipo de UserException
    
    //Constructor
    // Crea un objeto tipo de UserException
    function UserException(message) { //Lo usamos como clase por eso es mayuscula 
        this.message = message; //.this guarda el espacio de memoria - mensaje . Si se quiere poner fijo se delcara aqui. Sino se usa en throw 
        this.name = 'UserException'; //valor de la excepcion
        // casa .this es una propiedad del objeto
    }
    // Prueba a ver esto para entender prototype: console.log(new UserException);
    
    
    // Hacer que la excepción se convierta en una cadena con formato cuando se usa como cadena
    // (por ejemplo, por la consola de errores)
    UserException.prototype.toString = function() {
        return '${this.name}: "${this.message}"';
    }
    
    // Crea una instancia del tipo de objeto y tírala
    throw new UserException('Valor incorrecto '); //da una casilla de memoria que se guarda en .this


    try {
        f();
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('Se ha producido una excepción: '+ e);
        }
    } finally {
        console.log('El finally se ejecuta sí o sí');
    }