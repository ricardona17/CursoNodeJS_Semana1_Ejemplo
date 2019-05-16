function promedio(nota1, nota2, nota3) {
    setTimeout(function(){
        let resultado = (nota1 + nota2 + nota3) / 3;
        console.log("Promedio 1: " + resultado);
    }, 2000)
}

let promedio_flecha = (nota1, nota2, nota3) => {
    let resultado = (nota1 + nota2 + nota3) / 3;
    console.log("Promedio 2: " + resultado);
}

promedio(3.9, 4.2, 3.7);
promedio_flecha(3.9, 4.2, 3.7);