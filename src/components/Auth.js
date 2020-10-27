const TOKEN_KEY = 'ClientID';
export const login = (id) =>{
    localStorage.setItem(TOKEN_KEY,id);
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