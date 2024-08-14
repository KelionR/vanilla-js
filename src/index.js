class Auto { constructor(marca,modelo,lanzamiento)
    
{ this.marca=marca; this.modelo=modelo; this.lanzamiento=lanzamiento; }
 mostrarAuto(){ return console.log(`Este Vehiculo es ${this.marca} ${this.modelo} ${this.lanzamiento}`) 
} }
 
 
const miAutoToyota = new Auto('Toyota','Corolla','2024'); 
const miAutoHiundai = new Auto('Hiunday','Elentra','2024');