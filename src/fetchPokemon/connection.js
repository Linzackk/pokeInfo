import axios from 'axios';

async function conectar(dexNum) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${dexNum}`)
    return response
}

export default conectar