import axios from "axios";
import { setCookies } from "./cookiesUtility";

export const userLoginApi = async( loginCredentials, setLoginResponse, setLoader, setErrors=null ) => {
    setLoader(true);
    try{
        const sendRequest = await axios.post(`http://localhost:8080/users/login`, loginCredentials);
        const response = await sendRequest.data;
        const { success, accessToken, refreshToken } = response;
        if(success){
            console.log(response);
            setCookies("accessToken", accessToken, { expires: 7, sameSite: 'strict' });
            setCookies("refreshToken", refreshToken, { expires: 7, sameSite: 'strict'});
            const { _id, fullName } = response.user;
            setLoginResponse((previous) => ({...previous, userId: _id, name: fullName, accessToken, refreshToken, status: success }));
        }
    }catch(error){
        console.error(error);
        setErrors(null);
    }finally{
        setLoader(false);
    }
}