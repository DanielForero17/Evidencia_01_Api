function llamarAlumno( alumno , callback){
     let llamadaAlumno = `llamdo a alumno: ${alumno}`
    //ejecutar la funcion callback
    callback(llamadaAlumno)
}

//definir funcion callback
function imprimir(texto){
    console.log(texto)
}

//invocar la funcion principal llamarAlumno
llamarAlumno("Daniel Forero" , imprimir)