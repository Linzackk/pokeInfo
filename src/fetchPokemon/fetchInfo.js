import conectar from "./connection.js";

export async function pegarInformacoes(id) {
    try {
        const response = await conectar(id)
        const {name, height, weight, types, sprites} = response.data
        const { front_default } = sprites
        const type1 = types[0].type.name
        const type2 = types[1]?.type.name || null
        
        return [id, name, height, weight, type1, type2, front_default]
    }
    catch (erro) {
        if (erro.response && erro.response.status === 404) {
            console.log("Pokémon Não encontrado " + id)
        } 
        else {
            console.log("Erro ao buscar Pokemon: ", erro.message)
        }
    }
}

export async function pegarUrlImg(id) {
    try {
        const response = await conectar(id)
        const { sprites } = response.data;
        const { front_default } = sprites;
        return front_default
    }
    catch (erro) {
        if (erro.response && erro.response.status === 404) {
            console.log("Pokémon Não encontrado " + id)
        } 
        else {
            console.log("Erro ao buscar Pokemon: ", erro.message)
        }
    }
}

