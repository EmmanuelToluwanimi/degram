import Cookies from "js-cookie";

export const baseURL = process.env.NODE_ENV === 'production' ? 'https://degram.herokuapp.com/api' : 'http://localhost:5000/api';

export const setCookie = (cname, cvalue, exdays)=> {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;secure=true";
}

export const getToken =()=> {
    return Cookies.get('x-token') || '';
}

export const getOptions =()=> {
    return {
        headers: {
            Authorization: `Bearer ${getToken()}`,
            "Access-Control-Allow-Origin": "*"
        }
    }
}