import { Storage } from "../services/storage"

export const userIntialState = {
    user: {},
    token: '',
    isAuthenticated: false
}

export const UserReducer = (state, action) => {
    switch(action.type) {
        case 'setAuthentication':
            const userId = action.payload.user.id;
            const { token, isAuthenticated } = action.payload
            
            Storage.saveData({ userId, token, isAuthenticated });
            return action.payload

        case 'setUser':
            Storage.saveUserId(action.payload.user.id)
            return { ...state, user: action.payload }

        case 'setToken':
            return { ...state, token: action.payload }

        case 'clearAuthentication':
            return userIntialState

        default:
            return state;
    }
}