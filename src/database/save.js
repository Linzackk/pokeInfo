import { pool } from "./connection.js"
import { pegarInformacoes } from "../fetchPokemon/fetchInfo.js"

export async function salvarPokemon(id) {
    const query = `
        INSERT INTO pokemons(id, name, height, weight, type1, type2)
        VALUES ($1, $2, $3, $4, $5, $6)
        ON CONFLICT (id) DO NOTHING
    `
    const infos = await pegarInformacoes(id)
    await pool.query(query, infos)
    
    console.log(`Pokemon Num ${id} Salvo com Sucesso.`)
    return
}