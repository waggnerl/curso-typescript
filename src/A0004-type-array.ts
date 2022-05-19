const objetoA:  {
    chaveA: string;
    chaveB: string;
    chaveC?:string;
    [key: string]:unknown;
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
}

objetoA.chaveA = 'Outro valor'

console.log(objetoA.chaveA)
