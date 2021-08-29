// Objetos literales
const andres = {
  name: "andres",
  username: "andresdev",
  points: 100,
  socialMedia: {
    twitter: "andresmestradev",
    instragram: "andresdevjs",
  },
  approvedCourses: ["Curso definitivo de HTML y CSS"],
  learningPaths: [
    {
      name: "Escuela de desarrollo web",
      courses: ["Curso práctico de html y css"],
    },
    {
      name: "Escuela de desarrollo de video juegos",
      courses: ["Curso de unity"],
    },
  ],
};

//Clases
class Courses {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }
}

const cursoProgBasica = new Courses({
  name: "Curso programación basica",
});

const cursoDefinitivoHTML = new Courses({
  name: "Curso definitivo HTML y CSS",
});

const cursoPracticoHTML = new Courses({
  name: "Curso práctico HTML y CSS",
});

class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const desarrolloWeb = new LearningPath({
  name: "Escuela de desarrollo web",
  courses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
});

const desarrolloJuegos = new LearningPath({
  name: "Escuela de desarrollo de video juegos",
  courses: [],
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instragram = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instragram,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan = new Student({
  name: "juan",
  username: "juandev",
  email: "juan@mail.com",
  twitter: "juandev",
  learningPaths: [desarrolloWeb],
});

const juan2 = new Student({
  name: "juan2",
  username: "juan2dev",
  email: "juan2@mail.com",
  twitter: "juandev2",
  instragram: "juan_dev",
  learningPaths: [desarrolloWeb, desarrolloJuegos],
});
