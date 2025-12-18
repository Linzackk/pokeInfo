// Aqui vamos colocar os arquivos com as funções para importar e atribuir os valores para cada campo.
import pegarInfo from "./pegarInfoAPI.js"
import { capitalizeText, formatarTipo, formatarNumDex } from "./formatarDados.js"

const inputNumero = document.getElementById("inputNumero")
const form = document.getElementById("formPokemon")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const valor = inputNumero.value
    atualizarInformacoes()
})

const nomePokemon = document.getElementById("nome")
const numDex = document.getElementById("numDex")

const imagemPokemon = document.getElementById("imagem")
const tiposPokemon = document.getElementById("tipos")

const pesoPokemon = document.getElementById("peso")
const alturaPokemon = document.getElementById("altura")

const tagPesoPokemon = document.getElementById("tagPeso")
const tagAlturaPokemon = document.getElementById("tagAltura")

async function atualizarInformacoes() {
    const idDex = inputNumero.value
    const infos = await pegarInfo(idDex)
    if (!infos) {
        mostrarErro()
        return
    }
    const {name, id, type1, type2, weight, height, linkimg} = infos

    atualizarImagemPokemon(linkimg)
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

function atualizarImagemPokemon(linkimg) {
    imagemPokemon.src = linkimg
}

function atualizarTiposPokemon(tipo1, tipo2) {
    tiposPokemon.innerHTML = ""
    if (tipo1) {tiposPokemon.innerHTML += "<span id='tipo1'></span>"}
    if (tipo2) {tiposPokemon.innerHTML += "<span id='tipo2'></span>"}

    const tipo1Pokemon = document.getElementById("tipo1") || null
    const tipo2Pokemon = document.getElementById("tipo2") || null

    if (tipo1Pokemon) {
        const tipoUmFormatado = formatarTipo(tipo1)
        tipo1Pokemon.innerText = tipoUmFormatado[0]
        tipo1Pokemon.style.color = tipoUmFormatado[1]
    }

    if (tipo2Pokemon) {
        const tipoDoisFormatado = formatarTipo(tipo2)
        tipo2Pokemon.innerText = tipoDoisFormatado[0]
        tipo2Pokemon.style.color = tipoDoisFormatado[1]  
    }
}

function atualizarPesoPokemon(peso) {
    const pesoFormatado = peso / 10
    pesoPokemon.innerText = `${pesoFormatado} Kg`
    tagPesoPokemon.innerText = "Peso "
}

function atualizarAlturaPokemon(altura) {
    const alturaFormatada = altura / 10
    alturaPokemon.innerText = `${alturaFormatada} M`
    tagAlturaPokemon.innerText = "Altura"
}

function mostrarErro() {
    nomePokemon.innerText = "Pokemon não encontrado"
    numDex.innerText = "# ???"
}