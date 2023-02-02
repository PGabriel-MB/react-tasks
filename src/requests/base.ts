import axios from 'axios'

export const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000'

export const baseRequest = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${2}`
  }
})
