import tipos from "./coresTipos.js"

export function capitalizeText(text) {
    return text.charAt(0).toUpperCase() +  text.slice(1)
}

function selecionarCorTipo(tipo) {
    return tipos[`${tipo}`]
}

export function formatarTipo(tipo) {
    if (!tipo) {
        return [
            " ",
            "white"
        ]
    }
    return [
        capitalizeText(tipo),
        selecionarCorTipo(tipo)
    ]
}

export function formatarNumDex(numDex) {
    const numFormatado = String(numDex).padStart(3, '0')
    return `# ${numFormatado}`
}

console.log(formatarNumDex(1))