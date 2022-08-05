import axios from 'axios'


const api_host = axios.create({
    baseURL: 'http://localhost:3000/api',
})



const config = {
    api_host
}


export default config