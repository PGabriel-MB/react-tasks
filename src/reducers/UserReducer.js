import { Storage } from "../services/storage"

export const userIntialState = {
    user: {},
    token: '',
    isAuthenticated: false
}

export const UserReducer = (state, action) => {
    switch(action.type) {
        case 'setUser':
            const userId = action.payload.user.id;
            const { token, isAuthenticated } = action.payload
            
            Storage.saveData({ userId, token, isAuthenticated });
            return action.payload
        case 'clearUser':
            return userIntialState
        default:
            return state;
    }
}