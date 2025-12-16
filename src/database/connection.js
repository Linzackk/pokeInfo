import pkg from "pg"
const { Pool } = pkg

export const pool = new Pool({
    user: "pokemon_user",
    host: "localhost",
    database: "pokemon_api",
    password: 0,
    "port": 5432,
})