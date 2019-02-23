# jwt-authentication-helper

Just a helper to check the status of you JWT token

#### React Router with react-router-route example:
```js
    /**
    * @desc Delete the token saved in the cookie cookieName
    * @param string $cookieName - the name of the cookie with the token
    * @return void
    */
    deleteToken(cookieName);

    /**
    * @desc Get the token saved in the cookie cookieName
    * @param string $cookieName - the name of the cookie with the token
    * @return void
    */
    getToken(cookieName);

    /**
    * @desc Return true or false to your jwt string
    * @param string $jwtToken - a JWT
    * @return void
    */
    isTokenExpired(jwtToken);

    /**
    * @desc Is the client authenticated ? check the token saved in cookieName.
    * @param string $cookieName - the name of the cookie with the token
    * @return boolean
    */
    isAuthenticated(cookieName);
```
