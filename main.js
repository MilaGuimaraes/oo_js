function Roupa(modelo, cor, tecido, valor) {
    this.modelo = modelo;
    this.cor = cor;
    this.tecido = tecido;
    this.valor = valor
}

function Vestido(modelo, cor, tecido, valor, tamanho) {
    this.tamanho = tamanho;

    Roupa.call(this, modelo, cor, tecido, valor);
}

function Calca(modelo, cor, tecido, valor, cos) {
    this.cos = cos;

    Roupa.call(this, modelo, cor, tecido, valor);
}
 
function Camisa(modelo, cor, tecido, valor, manga) {
    this.manga = manga;
    
    Roupa.call(this, modelo, cor, tecido, valor);
}

const vestido1 = new Roupa('vestido', 'verde', 'viscose', 19, 'curto');
const calca1 = new Roupa('calca', 'azul', 'jeans', 50, 'alto');
const camisa1 = new Roupa('camisa', 'laranja', 'linho', 30, 'com');
const vestido2 = new Roupa('vestido', 'roxo', 'malha', 60, 'longo');
const calca2 = new Roupa('calca', 'preta', 'moletom', 70, 'alto');
const camisa2 = new Roupa('camisa', 'branca', 'algodao', 15, 'sem');


console.log(vestido1);
console.log(calca1);
console.log(camisa1);
console.log(vestido2);
console.log(calca2);
console.log(camisa2);

