const {estudiante, promedio} = require("./calculos");
const fs = require("fs"); //FileSystem

let crearArchivo = (estudiante) => {
    texto = "El estudiante " + estudiante.nombre
        + "\nha obtenido un promedio de notas de "
            + promedio(estudiante.notas.matematicas
                , estudiante.notas.ingles
                , estudiante.notas.programacion);
    fs.writeFile("promedio.txt", texto
        , (err) => {
            if (err) {
                throw err;
            } else {
                console.log("El archivo ha sido creado exitosamente.");
            }
        }
    );
};

crearArchivo(estudiante);