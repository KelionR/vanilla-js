class Contador {

  constructor() {
    this.valor = 0;
  }


  siguiente() {
    this.valor += 1;
  }
}

export const instancia = new Contador();

return console.log(instancia.valor);