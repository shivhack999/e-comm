import React, { useContext } from 'react';
import { userLoginApi } from '../../utils/loginAPI';
import { userRegistrationApi } from '../../utils/registerAPI';

const Auth = React.createContext();

export const useAuth = () => useContext(Auth);


export const AuthProvider = ({ children }) => {
    const [checkIsAuthenticated, setCheckIsAuthenticated] = useState({
        status: false,
        accessToken: null,
        refreshToken: null,
        userId: null,
        name: null,
    });


    const userRegisteration = (userData, setLoader) => {
        userRegistrationApi(userData, setCheckIsAuthenticated, setLoader);
    }

    const userLogin = (loginCredentials, setLoader) => {
        userLoginApi(loginCredentials, setCheckIsAuthenticated, setLoader);
    }

    const value = { checkIsAuthenticated, userRegisteration, userLogin }
    return (
        <Auth.Provider value={value} >
            {children}
        </Auth.Provider>
    )
}

export default AuthProvider;