import axios from 'axios'


const api_host = axios.create({
    baseURL: 'https://youq.vercel.app/api',
})



const config = {
    api_host
}


export default config