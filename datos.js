const {estudiante, promedio} = require("./calculos");

console.log(estudiante);

console.log("Promedio estudiante: "
    + promedio(estudiante.notas.matematicas
        , estudiante.notas.ingles
        , estudiante.notas.programacion)
);

//Destructuración
let {nombre, edad : anios, notas : {matematicas, ingles, programacion}} = estudiante;

console.log("El nombre del estudiante es: " + nombre);
console.log("Promedio notas: " + promedio(matematicas, ingles, programacion));
console.log("Edad del estudiante: " + anios);