import { request } from './baseAxios'

export const Auth = {
    async login({ email, password }) {
        return await request.post('/auth/authenticate', { email, password });
    },
    async register({ name, email, password }) {
        return await request.post('/auth/register', {
            name,
            email,
            password
        })
    },
    async validateToken({ token, userId }) {
        return await request.post('/auth/validate-token', { token, userId });
    }
}