import { capitalizeText, formatarTipo, formatarNumDex } from "./formatarDados.js"

export function atualizarNomePokemon(nome) {
    const nomePokemon = document.getElementById("nome")
    nomePokemon.innerText = capitalizeText(nome)
}

export function atualizarIdPokemon(id) {
    const numDex = document.getElementById("numDex")
    numDex.innerText = formatarNumDex(id)
}

export function atualizarImagemPokemon(linkimg) {
    const imagemPokemon = document.getElementById("imagem")
    imagemPokemon.src = linkimg
}

export function atualizarTiposPokemon(tipo1, tipo2) {
    const tiposPokemon = document.getElementById("tipos")
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

export function atualizarPesoPokemon(peso) {
    const tagPesoPokemon = document.getElementById("tagPeso")
    const pesoPokemon = document.getElementById("peso")
    const pesoFormatado = peso / 10
    pesoPokemon.innerText = `${pesoFormatado} Kg`
    tagPesoPokemon.innerText = "Peso "
}

export function atualizarAlturaPokemon(altura) {
    const tagAlturaPokemon = document.getElementById("tagAltura")
    const alturaPokemon = document.getElementById("altura")
    const alturaFormatada = altura / 10
    alturaPokemon.innerText = `${alturaFormatada} M`
    tagAlturaPokemon.innerText = "Altura"
}

export function mostrarErro() {
    atualizarIdPokemon("# ???")
    atualizarNomePokemon("Pokemon não encontrado")
}