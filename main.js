function livrosAdd(nome, autor, editora, preco){
    this.nome = nome
    this.autor = autor
    this.editora =editora
    this.preco=preco
}
class Adicionar{

constructor(){
    this.cadastroDeLivro = []

}
adicionarLivro(){
   
    let nome = prompt ("Digite o nome do  Título ")      
    let autor = prompt ("Digite o nome do Autor: ")
    let editora = prompt ("Digite o nome da Editora: ")
    let preco = prompt ("Digite o preço: "+"R$:")
    const novoLivro = new livrosAdd (nome,autor, editora, preco)

        this.cadastroDeLivro.push(novoLivro)
      
}

listarLivros(){
  
   for(let cont of this.cadastroDeLivro){
        
        
        alert("Livros encontrados:" +"\n" + cont.nome +"\n" + "R$" +" "+ cont.preco)
    }

      
    }


    
}
removerlivro(indice){
    this.cadastroDeLivro.splice(indice,1)

}
buscarLivro(){
      this.cadastroDeLivro.forEach((nomes) => {
        alert (this.cadastroDeLivro.nome)
        
      });
}
}
    

const sair =0
const cadastrar = 1
const buscar = 2
const remover =3

const escolha = () =>{
    return `
   0 - Sair
   1 - Adicionar Livro
   2 - Listar Livros
   3 - remover Livro
   4 - Editar Editar`
}

function livraria(){
    const add = new Adicionar()
   let menu
    do{
         menu =parseInt( prompt ("Escolha: "+ escolha()))

         switch(menu){

            case cadastrar:
              add.adicionarLivro()
                break

            case buscar:
                // let nomeBusca=prompt("Digite o nome do livro que deseja buscar:")
                add.listarLivros()
            break
            case remover:
                let indice = parseInt( prompt ("Escolha o índice que deseja remover:"))
                add.removerlivro(indice)
                break
            
                case sair:
                alert ("até logo")
                break
            
                default:
                    alert(
                        "Opção inválida! Escolha uma das opções abaixo:" + escolha())
         }

    }while (menu != sair)
    
 
    }
livraria()