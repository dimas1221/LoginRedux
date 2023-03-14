import config from '../config/config'
import axios from 'axios'

const List = async()=>{
    try {
        // const result = await axios.get(`${config.domain}/api/region/`)
        const result = await axios.get(`${config.domain}/cats/customers`)
        const data = result.data
        return data
    } catch (error) {
        return await error.message
    }
}

const Delete = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/user/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}
const Create = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/user/`,payload)
        console.log(payload);
        return result
    } catch (error) {
        return await error.message
    }
}
const Update = async(data)=>{
    try {
        const result = await axios.put(`${config.domain}/user/${data.id}`,data)
        return result
    } catch (error) {
        return await error.message
    }
}
const UpdateFile = async(data)=>{
    const id = parseInt(data.get('custId'))
    try {
        const result = await axios.put(`${config.domain}/cats/${id}`,data)
        return result
    } catch (error) {
        return await error.message
    }
}
const FindOne = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/cats/${id}`)
        return result.data 
    } catch (error) {
        return await error.message
    }
}
export default {List,Delete,Create,Update,FindOne,UpdateFile}