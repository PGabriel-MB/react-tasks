import axios from 'axios'
import config from '../../config'

export const request = axios.create({
    baseURL: config.base_url,
    timeout: 15000
})