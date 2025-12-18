import express from "express"
import cors from "cors"
import "dotenv/config"

const app = express()

export default app

import rotaPokemon from "./routes/pokemon.routes.js"

app.use(express.json())

app.use(cors({
    origin: "http://127.0.0.1:5500",
    methos: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use("/pokemon", rotaPokemon)

app.use((req, res) => {
    res.status(404).json({
        erro: "Rota nao encontrada"
    })
})