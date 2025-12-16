import { pool } from "./connection.js";
import { pegarInformacoes } from "../fetchPokemon/fetchInfo.js";

export async function salvarPokemon(dexNum) {
    const query = `
        INSERT INTO pokemons(id, name, height, weight, type1, type2)
        VALUES ($1, $2, $3, $4, $5, $6)
        ON CONFLICT (id) DO NOTHING
    `
    const infos = await pegarInformacoes(dexNum)
    await pool.query(query, infos)
    
    console.log(`Pokemon Num ${dexNum} Salvo com Sucesso.`)
    return
}