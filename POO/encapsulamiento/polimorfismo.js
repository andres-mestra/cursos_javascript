class Animal {
  constructor({ name }) {
    this.name = name;
  }
}

//Polimorfismo inclusivo
class Volador extends Animal {
  constructor(props) {
    super(props);
  }

  volar() {
    console.log("Estoy volando :D");
  }

  superVuelo() {
    const superVolador = new SuperVolador({});
    superVolador.superVuelo();
  }
}

class SuperVolador {
  constructor({ type = "" }) {
    this.type = type;
    this.flash = "Volando super rapido";
  }

  superVuelo() {
    console.log(`${this.flash} ${this.type}`);
  }
}

//Polimorfismo inclusivo, re-escribir un metodo
class EspecialVolador extends Volador {
  constructor(props) {
    super(props);
  }

  superVuelo() {
    const superVolador = new SuperVolador({
      type: this.name,
    });
    superVolador.superVuelo();
  }
}

const volador1 = new Volador({
  name: "Volador 1",
});
volador1.superVuelo();

const aguila = new EspecialVolador({
  name: "Aguila",
});
aguila.superVuelo();
