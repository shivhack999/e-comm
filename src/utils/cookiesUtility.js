import Cookies from 'js-cookie';

export const setCookies = ( key, value, option = {} ) => {
    Cookies.set(key, value, option);
}

export const getCookies = ( key ) => {
    return Cookies.get(key);
}

export const removeCookies = ( key ) => {
    Cookies.remove(key);
}