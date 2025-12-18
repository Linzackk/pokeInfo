import express from "express"
import "dotenv/config"

const app = express()

export default app

import rotaPokemon from "./routes/pokemon.routes.js"

app.use(express.json())

app.use("/pokemon", rotaPokemon)

app.use((req, res) => {
    res.status(404).json({
        erro: "Rota nao encontrada"
    })
})