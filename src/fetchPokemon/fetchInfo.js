import conectar from "./connection.js";

export async function pegarInformacoes(id) {
    try {
        const response = await conectar(id)
        const {id, name, height, weight, types} = response.data
        const type1 = types[0].type.name
        const type2 = types[1]?.type.name || null
        
        return [id, name, height, weight, type1, type2]
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