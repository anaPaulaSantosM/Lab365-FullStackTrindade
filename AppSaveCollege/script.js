var exec1 = "->Exercício 1: [App SaveCollege] Dados dos alunos"
console.log(exec1);

var aluno = [
    {nome: "Ana", altura: 1.65, idade: 38, sexo: "Feminino", sala: "Trindade", matematica: 7},
    {nome: "Bruna", altura: 1.70, idade: 31, sexo: "Feminino", sala: "Trindade", matematica: 7},
    {nome: "Jully", altura: 1.68, idade: 35, sexo: "Feminino", sala: "Trindade", matematica: 6},
    {nome: "Dora", altura: 1.58, idade: 21, sexo: "Feminino", sala: "Trindade", matematica: 8},
    {nome: "Bernardo", altura: 1.72, idade: 32, sexo: "Masculino", sala: "Trindade", matematica: 5}        
];

console.log(aluno);

var exec2 = "->Exercício 2: [App SaveCollege] Média dos alunos"
console.log(exec2);
var media = aluno[0].matematica + aluno[2].matematica + aluno[3].matematica + aluno[4].matematica / 5;
console.log(`A média dos alunos é: ${media}`);

var exec3 = "->Exercício 3: [App SaveCollege] Alunos aprovados"
console.log(exec3);

aluno[0].matematica >= 7 ? console.log(aluno[0].nome + ": Aprovado!") : console.log(aluno[0].nome + ": Reprovado!");
aluno[1].matematica >= 7 ? console.log(aluno[1].nome + ": Aprovado!") : console.log(aluno[1].nome + ": Reprovado!");
aluno[2].matematica >= 7 ? console.log(aluno[2].nome + ": Aprovado!") : console.log(aluno[2].nome + ": Reprovado!");
aluno[3].matematica >= 7 ? console.log(aluno[3].nome + ": Aprovado!") : console.log(aluno[3].nome + ": Reprovado!");
aluno[4].matematica >= 7 ? console.log(aluno[4].nome + ": Aprovado!") : console.log(aluno[4].nome + ": Reprovado!");
