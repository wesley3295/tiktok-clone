import axios from'axios'

const instance = axios.create({
    baseURL:"https://ticktok-clone.herokuapp.com",
})

export default instance