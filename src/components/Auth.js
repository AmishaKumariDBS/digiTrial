const TOKEN_KEY = 'ClientID';
export const login = (user) =>{
    localStorage.setItem(TOKEN_KEY,user);
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