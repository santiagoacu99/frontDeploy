import axios from 'axios'
const baseUrl = 'http:http://localhost:3000/regist'
const login = async credentials =>{
    const {data} = await axios.post(baseUrl, credentials)
    return data
}
export default login;