import { lerInfoPokemon } from "../database/read.js"

export async function lerInformacoesPokemon(req, res) {
    const id = Number(req.params.id)
    if (!id) {
        res.status(400).json({
            erro: "Id invalido"
        })
        return
    }

    const infos = await lerInfoPokemon(id)

    if (!infos) {
        res.status(404).json({
            erro: "Pokemon nao encontrado"
        })
        return
    }
    res.status(200).json(infos)
}