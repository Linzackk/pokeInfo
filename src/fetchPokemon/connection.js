import axios from 'axios';

async function conectar(id) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return response
}

export default conectar