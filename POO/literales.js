const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso definitivo html y css",
    "Curso practico de html y css",
  ],
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
};

natalia.name = "Nath";
natalia.aprobarCurso("Curso de responsive design");
console.log(natalia);

//prototipo
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
}
Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
};

const juanita = new Student("juanita", 15, [
  "Curso de producción de video juegos",
  "Creación de personajes",
]);
console.log(juanita.cursosAprobados);
juanita.aprobarCurso("Css");
console.log(juanita.cursosAprobados);
