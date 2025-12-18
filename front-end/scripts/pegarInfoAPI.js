import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/esm/axios.min.js"

async function pegarInfoAPI(id) {
    try {
        const {data} = await axios.get(`http://localhost:4000/pokemon/${id}`)
        return data
    }
    catch (erro) {
        return null
    }
}   

export default pegarInfoAPI