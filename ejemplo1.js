function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
    // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
    // [PISTA]: "arguments" es un arreglo.
    // Tu código:
    if (arguments.length < 0) {
       return 0;
    }else if(arguments.length === 0 ){
       return arguments;
    }else{
       var acumulador = arguments.reduce(function(ac, ele){
          var total = ac * ele
      })
      return total
    }
 }

multiplicarArgumentos(1, 3, 0 , 10)