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

    buscarLivros(busca){
        let livroNaoEncontrado = true
        this.cadastroDeLivro.forEach(element => {
            if(element.nome == busca){
                livroNaoEncontrado = false
                alert("Livros encontrados:" +"\n" + element.nome +"\n" + "R$" +" "+ element.preco)
            } 
            
        });
        if (livroNaoEncontrado == true){
            alert("Nenhum livro encontrado com o título " + busca) 
        }
    }

    listarLivros(){
        let titulosLivros = ""
        this.cadastroDeLivro.forEach(element => {
            titulosLivros += element.nome + "\n"
        });
        alert("Os livros cadastrados sao:" + "\n" + titulosLivros)
    }

    removerlivro(indice){
        this.cadastroDeLivro.splice(indice,1)

    }
}
    

const sair = 0
const cadastrar = 1
const buscar = 2
const remover = 3
const listar = 4

const escolha = () =>{
    return `
   0 - Sair
   1 - Adicionar Livro
   2 - Buscar Livros
   3 - remover Livro
   4 - Listar Livros`
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
                let busca = prompt("Digite o livro que deseja buscar")
                add.buscarLivros(busca)
                break

            case remover:
                let indice = parseInt( prompt ("Escolha o índice que deseja remover:"))
                add.removerlivro(indice)
                break
            
            case listar:
                add.listarLivros()
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