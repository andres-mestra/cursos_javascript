class Student {
  constructor({ name, email, age, cursosAprobados = [] }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(curso) {
    this.cursosAprobados.push(curso);
  }
}

const miguelito = new Student({
  name: "miguel",
  age: 28,
  email: "miguelito@mail.com",
});
console.log(miguelito.cursosAprobados);
miguelito.aprobarCurso("Curso de negocios internacionales");
console.log(miguelito.cursosAprobados);
