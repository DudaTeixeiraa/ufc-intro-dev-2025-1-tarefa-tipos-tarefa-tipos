
let NúmeroDeAlunos: number = 25;
console.log(NúmeroDeAlunos);

let NomeDoProfessor: string = 'Professora Lana';
console.log(NomeDoProfessor);

let aulaEmAndamento: boolean = true;
console.log(aulaEmAndamento);

let NomeDoMonitor: string = 'Victor e Bia';
console.log(NomeDoMonitor);

let Vazio;
console.log(Vazio);

type Caderno = {
    tamanho: number;
    marca: string;
};
let caderno: Caderno = {
    tamanho: 20,
    marca: 'Foroni',
};
console.log(
    `O caderno da marca ${caderno.marca} tem ${caderno.tamanho} centímetros.`
);
