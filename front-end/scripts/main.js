// Aqui vamos colocar os arquivos com as funções para importar e atribuir os valores para cada campo.
import pegarInfo from "./pegarInfoAPI.js"

const botaoBusca = document.getElementById("botaoBusca")
botaoBusca.addEventListener("click", atualizarInformacoes)

const inputNumero = document.getElementById("inputNumero")

const nomePokemon = document.getElementById("nome")
const numDex = document.getElementById("numDex")
const imagemPokemon = document.getElementById("imagem")
const tipo1Pokemon = document.getElementById("tipo1")
const tipo2Pokemon = document.getElementById("tipo2")
const pesoPokemon = document.getElementById("peso")
const alturaPokemon = document.getElementById("altura")

async function atualizarInformacoes() {
    const idDex = inputNumero.value
    const infos = await pegarInfo(idDex)
    const {name, id, type1, type2, weight, height} = infos

    nomePokemon.innerText = name
    numDex.innerText = `# ${id}`
    imagemPokemon.src = "./imagens/pokebola.png"
    tipo1Pokemon.innerText = type1
    tipo2Pokemon.innerText = type2
    pesoPokemon.innerText = weight
    alturaPokemon.innerText = height
}