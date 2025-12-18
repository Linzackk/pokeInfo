import express from "express"

import { lerInformacoesPokemon } from "../controller/pokemon.controller.js"

const router = express.Router()

export default router

router.get("/:id", lerInformacoesPokemon)

// TODO Adicionar rotas para:
// TODO     Adicionar pokémon, Atualizar Pokémon, Remover Pokémon