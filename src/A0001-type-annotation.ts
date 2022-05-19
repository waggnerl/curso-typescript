/* eslint-disable */
let nome: string = 'Luiz';
let idade:number = 20;
let adulto:boolean = true;
let simbolo:symbol = Symbol('qualquer-symbol');
//let big:bigint = 10n;

// Arrays
let arrayDeNumeros: Array<number> = [1,2,3];
let arrayDeNumeros2: number[] = [1,2,3];
let arrayOfStrings: Array<string> = ['1','2','3'];
let arrayOfStrings2: string[] = ['1','2','3'];

// Objetos
let pessoa: {nome:string, idade:number, adulto?:boolean} = {
    idade:20,
    nome: 'Wagner',
    adulto:true
};

function soma(x:number,y:number){
    return x+y
}

console.log(soma(2,3))
