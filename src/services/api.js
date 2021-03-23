import axios from 'axios'

export  const key = '9b8631bb'

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
})

export default api;