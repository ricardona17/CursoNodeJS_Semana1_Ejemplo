let estudiante = {
      nombre : "Ricardo"
    , edad : 27
    , notas : {
          matematicas : 4.5
        , ingles : 4.4
        , programacion : 4.7
    }
};

let promedio = (nota1, nota2, nota3) => {
    return (nota1 + nota2 + nota3) / 3;
};

module.exports = {
      estudiante
    , promedio
};