export class Course {
  constructor({ name, classes = [], isFree = false, lang = "spanish" }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombre) {
    if (nuevoNombre === "Curso malo de programación") {
      console.error("Web... no");
    } else {
      this._name = nuevoNombre;
    }
  }
}

const nuevoCurso = new Course({
  name: "Nuevo curso",
});

/* console.log(nuevoCurso.name);
nuevoCurso.name = "Otro nombre";
console.log(nuevoCurso.name);
nuevoCurso.name = "Curso malo de programación"; */
