// Aqui vamos colocar os arquivos com as funções para importar e atribuir os valores para cada campo.
import pegarInfo from "./pegarInfoAPI.js"
import { capitalizeText, formatarTipo, formatarNumDex } from "./formatarDados.js"

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

    imagemPokemon.src = "./imagens/pokebola.png"
    atualizarNomePokemon(name)
    atualizarIdPokemon(id)
    atualizarTiposPokemon(type1, type2)
    atualizarAlturaPokemon(height)
    atualizarPesoPokemon(weight)
}

function atualizarNomePokemon(nome) {
    nomePokemon.innerText = capitalizeText(nome)
}

function atualizarIdPokemon(id) {
    numDex.innerText = formatarNumDex(id)
}

function atualizarTiposPokemon(tipo1, tipo2) {
    const tipoUmFormatado = formatarTipo(tipo1)
    tipo1Pokemon.innerText = tipoUmFormatado[0]
    tipo1Pokemon.style.color = tipoUmFormatado[1]

    const tipoDoisFormatado = formatarTipo(tipo2)
    tipo2Pokemon.innerText = tipoDoisFormatado[0]
    tipo2Pokemon.style.color = tipoDoisFormatado[1]
}

function atualizarPesoPokemon(peso) {
    pesoPokemon.innerText = peso
}

function atualizarAlturaPokemon(altura) {
    alturaPokemon.innerText = altura
}