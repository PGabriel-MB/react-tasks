export const userIntialState = {
    user: {},
    token: '',
    isAuthenticated: false
}

export const UserReducer = (state, action) => {
    switch(action.type) {
        case 'setUser':
            localStorage.setItem('token', action.payload.token)
            return action.payload
        case 'clearUser':
            return userIntialState
        default:
            return state;
    }
}