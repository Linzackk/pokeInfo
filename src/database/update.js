import { pool } from "./connection.js"
import { pegarUrlImg } from "../fetchPokemon/fetchInfo.js"

export async function atualizarPokemon(id) {
    const query = `
        UPDATE pokemons
        SET linkImg = ($1)
        WHERE id = ($2)
    `

    const infos = [await pegarUrlImg(id), id]
    await pool.query(query, infos)

    return
}