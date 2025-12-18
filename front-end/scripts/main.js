// Aqui vamos colocar os arquivos com as funções para importar e atribuir os valores para cada campo.
import pegarInfo from "./pegarInfoAPI.js"
import { atualizarAlturaPokemon, atualizarIdPokemon, atualizarImagemPokemon, atualizarNomePokemon, atualizarPesoPokemon, atualizarTiposPokemon, mostrarErro } from "./mudancasFront.js"

const inputNumero = document.getElementById("inputNumero")
const form = document.getElementById("formPokemon")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const valor = inputNumero.value
    atualizarInformacoes()
})

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