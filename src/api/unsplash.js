import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5PdXXFEzjUokHJOLipqbHQj1-2zg3Wp2wUah8t-IqTc'
    }
})