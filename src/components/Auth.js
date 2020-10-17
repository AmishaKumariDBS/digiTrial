const TOKEN_KEY = 'ClientID';
export const login = () =>{
    localStorage.setItem(TOKEN_KEY, 'CI12345');
    console.log(localStorage.getItem(TOKEN_KEY));
}

export const logout = () => {
    localStorage.setItem(TOKEN_KEY,'');
    console.log(localStorage.getItem(TOKEN_KEY));
}

export const isLogin = () =>{
    if(localStorage.getItem(TOKEN_KEY)){
        return true;
    }
    return false;
}