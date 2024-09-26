import axios from "axios";
import { setCookies } from "./cookiesUtility";

export const userRegistrationApi = async( registrationData, setRegistrationResponse, setLoader, setErrors=null ) => {
    setLoader(true);
    try{
        const sendRequest = await axios.post(`http://localhost:8080/users/register`, registrationData);
        const response = await sendRequest.data;
        const { success } = response;
        if(success){
            const { _id, fullName, accessToken, refreshToken } = response;
            console.log(response);
            setCookies("accessToken", accessToken, { expires: 7, sameSite: 'strict' });
            setCookies("refreshToken", refreshToken, { expires: 7, sameSite: 'strict'});
            setRegistrationResponse((previous) => ({...previous, userId: _id, name: fullName, accessToken, refreshToken, status: success }));
        }
    }catch(error){
        console.error(error);
        setErrors(null);
    }finally{
        setLoader(false);
    }
}