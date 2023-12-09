function Roupa(modelo, cor, tecido, tamanho, valor) {
    this.modelo = modelo;
    this.cor = cor;
    this.tecido = tecido;
    this.tamanho = tamanho;
    this.valor = valor
}

const roupaPeca1 = new Roupa('vestido', 'verde', 'viscose', 'pequeno', 19);
const roupaPeca2 = new Roupa('calca', 'azul', 'jeans', 'grande', 50);
const roupaPeca3 = new Roupa('blusa', 'branca', 'linho', 'medio', 30);

console.log(roupaPeca1);
console.log(roupaPeca2);
console.log(roupaPeca3);

console.log(roupaPeca1 instanceof Roupa);