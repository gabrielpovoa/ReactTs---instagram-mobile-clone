import axios from 'axios'

const baseURL = 'https://www.breakingbadapi.com/api/'

export const api = {
    getallPosts: async () => {
        let json = await axios.get(`${baseURL}characters/`)
        return json.data
    }
}