export const Storage = {
    keys: {
        TOKEN: 'token',
        USER_ID: 'userId',
        IS_AUTHENTICADED: false
    },
    saveToken(token) {
        localStorage.setItem(this.keys.TOKEN, token)
    },
    saveUserId(userId) {
        localStorage.setItem(this.keys.USER_ID, userId)
    },
    setIsAuthenticated(isAuthenticated) {
        localStorage.setItem(this.keys.IS_AUTHENTICADED, isAuthenticated)
    },
    saveData({ userId, token, isAuthenticated }) {
        this.saveToken(token);
        this.saveUserId(userId);
        this.setIsAuthenticated(isAuthenticated);
    },
    getToken() {
        return localStorage.getItem(this.keys.TOKEN)
    },
    getUserId() {
        return localStorage.getItem(this.keys.USER_ID)
    },
    isAuthenticated() {
        return localStorage.getItem(this.keys.IS_AUTHENTICADED)
    }
}

