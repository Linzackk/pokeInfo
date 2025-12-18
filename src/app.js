import express from "express"
import "dotnev/config"

const app = express()

export default app

app.use(express.json())

app.use((req, res) => {
    res.status(404).json({
        erro: "Pokemon nao encontrado"
    })
})