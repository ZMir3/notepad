import axios from 'axios'

const api = axios.create({
  baseURL: `${import.meta.env.BASE_URL}api`
})

export default api
