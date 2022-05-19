function semRetorno(...args:string[]):void{
     console.log(args.join(' '));
}

const pessoa = {
    name:'Luiz',
    surname:'Otávio',

    showName():void{
        console.log(this.name + ' ' + this.surname)
    }
};

semRetorno('João','Pedro');

pessoa.showName();
export {pessoa};
