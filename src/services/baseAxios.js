import axios from 'axios'
import { base_url } from '../config'

export const request = axios.create({
    baseURL: base_url,
    timeout: 1000
})