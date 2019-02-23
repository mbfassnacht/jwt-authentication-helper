import jwtDecode from 'jwt-decode';

export default {

    deleteToken(cookieName) {
        document.cookie = `${cookieName}=; Max-Age=-99999999`;
    },

    getToken(cookieName) {
        const name = `${cookieName}=`;
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i += 1) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    },

    isTokenExpired(jwtToken) {
        const jwtDecodedToken = jwtDecode(jwtToken);
        const currentTime = new Date().getTime() / 1000;
        return currentTime > jwtDecodedToken.exp;
    },

    isAuthenticated(tokenName) {
        const token = this.getToken(tokenName);
        let authenticated = false;
        if (token !== '') {
            authenticated = !this.isTokenExpired(token);
            if (!authenticated) {
                this.deleteToken(tokenName);
            }
        }
        return authenticated;
    },
};
