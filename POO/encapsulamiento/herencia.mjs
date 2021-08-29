import {
  Student,
  cursoProgBasica,
  cursoDefinitivoHTML,
} from "../literalesVsClases.mjs";

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.log(`Lo siento, ${this.name}, solo puedes tomar cursos basicos`);
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.log(`Lo siento, ${this.name}, no puedes tomar cursos en ingles`);
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

const estudiante1 = new BasicStudent({
  name: "juan",
  username: "juandev",
  email: "juan@mail.com",
  twitter: "juandev",
});

estudiante1.approveCourse(cursoProgBasica);
console.log(estudiante1.approvedCourses);
estudiante1.approveCourse(cursoDefinitivoHTML);
console.log(estudiante1.approvedCourses);
