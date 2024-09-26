import axios from "axios";

export const userRegistrationApi = async( registrationData, setRegistrationResponse, setLoader, setErrors=null ) => {
    setLoader(true);
    try{
        const sendRequest = await axios.post(`http://localhost:8080/users/sendOTP`, registrationData);
        const response = await sendRequest.data;
        const { success } = response;
        if(success){
            const { _id, fullName, accessToken, refreshToken } = response;
            console.log(response);
            setRegistrationResponse((previous) => ({...previous, userId: _id, name: fullName, accessToken, refreshToken, status: success }));
        }
    }catch(error){
        console.error(error);
        setErrors(null);
    }finally{
        setLoader(false);
    }
}