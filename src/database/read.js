// vamos ler as informações do banco ihaaaa
import { pool } from "./connection.js"

export async function lerInfoPokemon(id) {
    const query = `
        SELECT * 
        FROM pokemons 
        WHERE id = ($1)
    `
    const { rows } = await pool.query(query, [id])
    return rows[0]
}