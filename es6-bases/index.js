import materias from "./materias";

/*console.log(materias);*/
//metodos de los objeto arreglo
//foreach: recorre un arreglo
materias.forEach(function(materia) {
    if(materia.tipo === 'trasnversak'){
    console.log(`materia: ${materia.nombre}`. yellow)
    console.log(`profesor: ${materia.instructor}`. blue)
    }
})


//map: construye un arreglo con base en otro
const profesores =materias.map((materia)=>{
    return materia.instructor
})

//find: encontrar la primera ocurrencia(elemento) 
//           que cumpla con la criteria dada

const PHP = materias.filter((materia)=>{
    return materia.instructor === "Daniel Forero"
})

//push: agrega un elemento a un arreglo:
materias.push({
   
    id:1,
        nombre: "PHP Avanzado",
        instructor: "Cristian Buitrago",
        tipo: "técnica",
        notas: [
            4.5,
            4,
            3.2
        ]


})



materias.splice(1,2,"Luis Baquero")
console.log(materias)




