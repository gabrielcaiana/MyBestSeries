import axios from 'axios'

const http = axios.create({
 baseURL: 'https://series-api-mock.herokuapp.com'
})

export { http }
