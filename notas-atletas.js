// Definição da classe
class NotasAtletas {
    constructor(notasGeral){
        this.notasGeral = notasGeral
    }
    obterNumeroAtletas(){
        return this.notasGeral.length;
    }
    obterNomesAtleta(){
        let nomes = [];
        for (let i = 0; i < this.notasGeral.length; i++) {
            nomes.push(this.notasGeral[i].nome);
        }
        return nomes;
    }
    obterNotasAtleta(){
        let notasTodos = [];
        for (let i = 0; i < this.notasGeral.length; i++) {
            notasTodos.push("(" + this.notasGeral[i].notas + ")");
        }
        return notasTodos;
    }
    mediaGeral(){
        let medias = [];
        for (let i = 0; i < this.notasGeral.length; i++) {
            let organizar = this.notasGeral[i].notas;
            function comparaNumeros(a,b) {
                if (a == b) return 0; 
                if (a < b) return -1; 
                if (a > b) return 1;
                }
            let ordem = organizar.sort(comparaNumeros);
            let notasComputadas = ordem.slice(1,4)
            let media = notasComputadas.reduce(function(total, atual){
                return total + atual
            },0);    
           medias[i] = (media/notasComputadas.length).toFixed(2);
        }
        return medias;
    }    
    listaFinal(){
       let nomes = [];
       let notasTodos = [];
       let medias = [];
       let frase= [];
       for (let i = 0; i < this.notasGeral.length; i++) {
            nomes.push(this.notasGeral[i].nome);
            notasTodos.push("(" + this.notasGeral[i].notas + ")");
            let organizar = this.notasGeral[i].notas;
            function comparaNumeros(a,b) {
                if (a == b) return 0; 
                if (a < b) return -1; 
                if (a > b) return 1;
                }
            let ordem = organizar.sort(comparaNumeros);
            let notasComputadas = ordem.slice(1,4)
            let media = notasComputadas.reduce(function(total, atual){
                return total + atual
            },0)    
           medias[i] = (media/notasComputadas.length).toFixed(2);
        
            frase[i] = console.log(`Atleta: ${nomes[i]}, Notas Obtidas: ${notasTodos[i]}, Médias Válidas: ${medias[i]}`);
            }
        }
}
// Uso da classe
let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];
let notasAtletas = new NotasAtletas(atletas);

notasAtletas.listaFinal();
