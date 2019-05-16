const opciones = {
    matematicas : {
          default : 0
        , alias : "m"
    }, ingles : {
          default : 1
        , alias : "i"
    }, programacion : {
        demand : true
      , alias : "p"
    }
}

const argv = require("yargs")
                .command("promedio", "Calcular promedio", opciones)
                .argv;

//console.log(argv);
//console.log(argv.matematicas);
console.log("El promedio es: "
    + ((argv.m + argv.i + argv.p) / 3));