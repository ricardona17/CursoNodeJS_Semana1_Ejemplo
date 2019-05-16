function promedio(nota1, nota2, nota3, callback) {
    setTimeout(function(){
        let resultado = (nota1 + nota2 + nota3) / 3;
        callback(resultado);
    }, 2000)
}

promedio(3.5, 4.2, 3.7, function(resultado) {
    console.log("El promedio es: " + resultado);
});