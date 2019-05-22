import axios from 'axios'



const baseUrl = "https://hob-backend-express.herokuapp.com/api/"

export default () => {
  return axios.create({
    baseURL : baseUrl,
    timeout: 5000,
  })
}