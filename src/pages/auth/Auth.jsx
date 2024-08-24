import React, { useState } from 'react'
import { useEffect } from 'react';
import { IoRemoveOutline } from "react-icons/io5";
import './authStyle.css';
<<<<<<< HEAD
import loader from '../../assets/loader.gif';
import { useNavigate } from 'react-router-dom';
=======
>>>>>>> prince

const Auth = () => {
   //for registraion --Start 
   const [loginTab, setLoginTab] = useState(true); // true: show login; false
<<<<<<< HEAD
   const [name, setName] = useState();
   const [mobile, setMobile] = useState();
   const [password, setPassword] = useState();
   const [confirmP, setConfirmP] = useState();

  // It is store registraion error 
  const [errors, setErrors] = useState({
    name: '',
    mobile: '',
    password: '',
    confirmP: ''
  }); 
  // this useState uses for registration button disable after click
  const [regBtnDisable,setRegBtnDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  // Show server side error 
  const [serverRes,setServerRes] = useState("");
  // useHistory is use for page redirect in other page
  const navigate = useNavigate();
  // registration function
   const rSubmit = async(e) => {
     e.preventDefault();
    //  It is remove all error massage after click submit button 
    //  because if are not remove then error show after click submit button or 
    // after error currection 
     setErrors({
      name: '',
      mobile: '',
      password: '',
      confirmP: ''
    });

    // check input field empty or not start
    if (!name || !mobile || !password || !confirmP) {
      setErrors({
        name: !name ? 'Full name is required.' : '',
        mobile:!mobile ? 'Phone number is required.' : '',
        password: !password ? 'New password is required.' : '',
        confirmP: !confirmP ? 'Confirm password is required.' : ''
      });
      return;
    }
    // check input field empty or not end

    // mobile number validation check start
    const checkMobile = () => {
      const isValid = /^\d{10}$/.test(mobile);
      return isValid ? '' : 'Please enter a valid 10-digit mobile number.';
    };
    const mobileError = checkMobile();
     if (mobileError) {
       setErrors({ ...errors, mobile: mobileError });
       return;
     }
    // mobile number validation check end

    // password validation check start 
    const  checkPassword= () => {
      const isValidLength = password.length >= 8;
      const containsSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      const containsLetter = /[a-zA-Z]/.test(password);
      const containsNumber = /[0-9]/.test(password);
  
      return isValidLength && containsSpecialChar && containsLetter && containsNumber
        ? ''
        : 'Password must be at least 8 characters long and contain at least one special character, alphabet, and number.';
    };

    const passwordError = checkPassword();
=======
   const [fillPersonalInfo, setFillPersonalInfo] = useState(false);
   const [phoneNumber, setPhoneNumber] = useState('');
   const [password, setPassword] = useState('');
   const [errors, setErrors] = useState({});
   const [otpVerificationPage, setOtpVerificationPage] = useState(false);
   const [storeOtp, setStoreOtp] = useState('');
   const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
      let interval = setInterval(() => {
          if (seconds > 0) {
              setSeconds((prevSecond) => prevSecond - 1);
          }
      }, 1000);
      return () => {
          clearInterval(interval);
      };
  }, [seconds]);

   const validatePhoneNumber = () => {
     const isValid = /^\d{10}$/.test(phoneNumber);
     return isValid ? '' : 'Please enter a valid 10-digit phone number.';
   };

   const validatePassword = () => {
     const isValid = password.length >= 8;
     return isValid ? '' : 'Password must be at least 8 characters long.';
   };
 
   const handlePhoneNumberChange = (e) => {
     setPhoneNumber(e.target.value);
   };
 
   const handlePasswordChange = (e) => {
     setPassword(e.target.value);
   };
 
   const handleSubmit = (e) => {
     e.preventDefault();
     const phoneError = validatePhoneNumber();
     const passwordError = validatePassword();
     setErrors({ phone: phoneError, password: passwordError });
 
     // If no errors, submit the form
     if (!phoneError && !passwordError) {
       // Your submission logic here
       console.log('Form submitted!');
     }
   }

   //for Registration of New Customer
   const [fullName, setFullName] = useState('');
   const [phoneNumberForSignup, setPhoneNumberForSignup] = useState('');
   const [newPassword, setNewPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [errorsForSignup, setErrorsForSignup] = useState({
     fullName: '',
     phoneNumberForSignup: '',
     newPassword: '',
     confirmPassword: ''
   });
 
   const validatePhoneNumberForSignup = () => {
     const isValid = /^\d{10}$/.test(phoneNumberForSignup);
     return isValid ? '' : 'Please enter a valid 10-digit phone number.';
   };
 
   const validatePasswordForSignup = () => {
     const isValidLength = newPassword.length >= 8;
     const containsSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
     const containsLetter = /[a-zA-Z]/.test(newPassword);
     const containsNumber = /[0-9]/.test(newPassword);
 
     return isValidLength && containsSpecialChar && containsLetter && containsNumber
       ? ''
       : 'Password must be at least 8 characters long and contain at least one special character, alphabet, and number.';
   };
   

  // Mobile verification
  const sendOtpAPI = async () => {
    const mobile = "+91" + phoneNumberForSignup;
    const sendRequest = await fetch('http://localhost:8080/users/sendOTP', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({mobile})
    })

    const response = await sendRequest.json();
    console.log(response);
    return response;
  }

  const handleSendOTP = async (e) => {
    e.preventDefault();
    if (!phoneNumberForSignup) {
      setErrorsForSignup({ 
        ...errorsForSignup, phoneNumberForSignup: !phoneNumberForSignup ? 'Phone number is required.' : '',
      });
      return;
    }

    // Validate phone number
    const phoneError = validatePhoneNumberForSignup();
    if (phoneError) {
        setErrorsForSignup({ ...errorsForSignup, phoneNumberForSignup: phoneError });
        return;
    }

    const response = await sendOtpAPI();
    console.log(response);
    const {success, msg} = response;
    if(success){
      setOtpVerificationPage(() => true);
      console.log(msg);
      setSeconds(60);
    }
    else{
      console.log("Enter the valid mobile number");
    }

  }


  // OTP verification while Registration of New Customer
  const [errorForOtpVerification, setErrorForOtpVerification] = useState('');

  const verifyOtpAPI = async () => {
    const mobile = "+91" + phoneNumberForSignup;
    const sendRequest = await fetch('http://localhost:8080/users/verifyOTP', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({mobile: mobile, otp: storeOtp})
    });

    const response = await sendRequest.json();
    console.log(response);
    const { success } = response;
    if(success){
      console.log("Verification Successful");
      setFillPersonalInfo(true);
    }
    else{
      const { msg } = response;
      setErrorForOtpVerification(msg);
      console.log(msg);
    }
  }

  const isOtpMatch = (e) => {
    e.preventDefault();  
    verifyOtpAPI();
    setOtpVerificationPage(null);
  }


   // Posting the user Information in the back-end
   const RegisterUser = async () => {
      const userRegistrationAPI = await fetch('http://localhost:8080/users/register', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: fullName, mobile: phoneNumberForSignup, password: newPassword})
      })

      const response = await userRegistrationAPI.json();
      const {accessToken, refreshToken} = response;
      console.log(accessToken, refreshToken);
      console.log(response);
      if(response.success){
        console.log('Registration successful!');
        window.location.href = 'http://localhost:3000';
       }
       else{
        const {error} = response;
        if(error === "Already Register Mobile Number."){
          setErrorsForSignup({ ...errorsForSignup, phoneNumberForSignup:  error});
          return;
        }
       }
   }

  // For Registration
   const signupSubmit = (e) => {
     e.preventDefault();
 
     setErrorsForSignup({
       fullName: '',
       phoneNumberForSignup: '',
       newPassword: '',
       confirmPassword: ''
     });
 
     if (!fullName || !phoneNumberForSignup || !newPassword || !confirmPassword) {
       setErrorsForSignup({
         fullName: !fullName ? 'Full name is required.' : '',
         phoneNumberForSignup: !phoneNumberForSignup ? 'Phone number is required.' : '',
         newPassword: !newPassword ? 'New password is required.' : '',
         confirmPassword: !confirmPassword ? 'Confirm password is required.' : ''
       });
       return;
     }
 
     // Validate phone number
    //  const phoneError = validatePhoneNumberForSignup();
    //  if (phoneError) {
    //    setErrorsForSignup({ ...errorsForSignup, phoneNumberForSignup: phoneError });
    //    return;
    //  }
 
     // Validate password
     const passwordError = validatePasswordForSignup();
>>>>>>> prince
     if (passwordError) {
       setErrors({ ...errors, password: passwordError });
       return;
     }
    // password validation check end



    // confirm password validation check start
    if (password !== confirmP) {
      setErrors({ ...errors, confirmP: 'Passwords do not match.' });
      return;
    }
      setRegBtnDisable(true);
      setLoading(true);
     const res = await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,mobile,password
      })
     });
     const errorData = await res.json();
    //  console.log(errorData);
    //  console.log("status");
    //  console.log(res.status);
     if(!errorData || res.status === 404){
      setRegBtnDisable(false);
      setLoading(false);
      setServerRes(errorData.error);
     }else{
      alert("Registration successful!");
      setLoading(false);
      navigate('/home');
     }
<<<<<<< HEAD
   };

   // login function 
   const [logMobile, setLogMobile] = useState();
   const [logPass,setLogPass] = useState();
   const [logErrors, setLogErrors] = useState({
    mobile: '',
    password: ''
  }); 
  const [logUser, setLogUser] = useState();
  const [error, setError] = useState('');
  const [logBtnDisable,setLogBtnDisable] = useState(false);
  const lSubmit = async(e) => {
    e.preventDefault();
    setLogErrors({
      mobile: '',
      password: ''
    });
    // check input field empty or not start
    if (!logMobile || !logPass) {
      setLogErrors({
        mobile:!mobile ? 'Phone number is required.' : '',
        password: !password ? 'Password is required.' : '',
      });
      return;
    }
    // alert(logMobile + logPass);
    // mobile number validation check start
    const checkMobile = () => {
      const isValid = /^\d{10}$/.test(logMobile);
      return isValid ? '' : 'Please enter a valid 10-digit mobile number.';
    };
    const mobileError = checkMobile();
     if (mobileError) {
       setLogErrors({ ...logErrors, mobile: mobileError });
       return;
     }
    // mobile number validation check end

    // password validation check start 
    const  checkPassword= () => {
      const isValidLength = logPass.length >= 8;
      const containsSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(logPass);
      const containsLetter = /[a-zA-Z]/.test(logPass);
      const containsNumber = /[0-9]/.test(logPass);
  
      return isValidLength && containsSpecialChar && containsLetter && containsNumber
        ? ''
        : 'Password must be at least 8 characters long and contain at least one special character, alphabet, and number.';
    };

    const passwordError = checkPassword();
     if (passwordError) {
       setErrors({ ...logErrors, password: passwordError });
       return;
     }
    // password validation check end
    // setLogBtnDisable(true);
    setLoading(true);
    try {
      const res = await fetch("/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          logMobile,logPass
        })
       });
       setLoading(false);
       setLogBtnDisable(false);
       if(res.ok){
        const preuser = await res.json();
        setLogUser(preuser);
       }else{
        const errorData = await res.json();
        setError(errorData.error);
       }
    } catch (error) {
      setError(error);
    }
  }

  return (
    <>
    {loading && <img src={loader} alt='Loading.....' className="loader"/>}
       <div className="d-flex align-items-center justify-content-center" style={{height:'80vh'}}>
=======

     RegisterUser();
     
   };


  return (
    <>
      <div className="d-flex align-items-center justify-content-center m-5" style={{height:'80vh'}}>
>>>>>>> prince
        <div className="userOuter d-flex flex-row shadow-lg bg-body rounded">
          <div className="innerLeft text-white p-4 d-flex flex-column align-items-center justify-content-center" >
            <p className='mb-4'>Nice to see you Again :)</p>   
            <h1> WELCOME BACK</h1>
            <IoRemoveOutline className='vLine' />
            <p>To keep connected with us please 
               login with<br/>personal information !</p>
          </div>
          <div className="innerRight p-5">
            {loginTab 
            && 
            <>
              <div className="d-flex flex-column align-items-center justify-content-center mb-4"> 
                <h2>Login Account !</h2>
                <p>Please sign in to access your<br/>account and continue your shopping<br/> experience.</p>
              </div>
              <form onSubmit={lSubmit}>
                  <span className='countrtCode'>+91</span><input type="text" value={logMobile} onChange={(e)=> setLogMobile(e.target.value)}  style={{width:'250px'}} className='mText mb-3' placeholder='Phone Number'/><br/>
                  <input type="password" className="pText mb-3" value={logPass} onChange={(e)=> setLogPass(e.target.value)} placeholder='Password' /><br/>
                  {logErrors.mobile && <p className='loginErrorMsg'>{logErrors.mobile}</p>}
                  {logErrors.password && <p className='loginErrorMsg'>{logErrors.password}</p>}
                  {error && <p className="loginErrorMsg">{error}</p>}
                  <pre> {logUser && JSON.stringify(logUser.mobile, null, 2)}</pre>
                  <input type="checkbox" id="saveUser" className='mb-3' /><label htmlFor="saveUser">Keep me signed in</label><br/>
              
                  <button type="submit" disabled={logBtnDisable} className="btnLogin mb-1">Login</button>
              </form>
              <a href='/fp' className='fp'>Forgot your password?</a>
              <hr></hr>
              <span>Don't have an  account ? <button onClick={()=>{
                setLoginTab(false)
              }}>Signup.</button></span><br/>
            </>}
            

            {!loginTab &&
             <>
<<<<<<< HEAD
              <div className="d-flex flex-column align-items-center justify-content-center mb-3"> 
                <h2>Create Account !</h2>
                <p>Create your account <br/>to unlock exclusive benefits and <br/> start shopping with ease.</p>
              </div>
              <form onSubmit={rSubmit}>
                  <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} className='mText mb-3' placeholder='Full Name'/><br/>
                  <span className='countrtCodeForSign'>+91</span>
                  <input type="text" name="mobile" value={mobile} onChange={(e)=> setMobile(e.target.value)} style={{width:'250px'}} className='mText mb-3' placeholder='Phone Number' /><br/>
                  <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="pText mb-3" placeholder='New Password'   /><br/>
                  <input type="password" name="confirmP" value={confirmP} onChange={(e)=> setConfirmP(e.target.value)} className="pText mb-3" placeholder='Confirm Password' /><br/>
                  {errors.name && <p className='loginErrorMsg'>{errors.name}</p>}
                  {errors.mobile && <p className='loginErrorMsg'>{errors.mobile}</p>}
                  {errors.password && <p className='loginErrorMsg'>{errors.password}</p>}
                  {errors.confirmP && <p className='loginErrorMsg'>{errors.confirmP}</p>}
                  <p className='loginErrorMsg'> {serverRes}</p>
                  <button type="submit" disabled={regBtnDisable} className="btnLogin mb-1">Signup</button>
              </form>
              <span>Already a member ? <button onClick={()=>{setLoginTab(true)}}>Login</button></span><br/>
=======
              {otpVerificationPage !== null && !otpVerificationPage && 
                <>
                  <div className="d-flex flex-column align-items-center justify-content-center mb-3"> 
                    <h2>Create Account !</h2>
                    <p>Create your account <br/>to unlock exclusive benefits and <br/> start shopping with ease.</p>
                  </div>
                  <form onSubmit={handleSendOTP}>
                      <span className='countrtCodeForSign'>+91</span><input type="text" style={{width:'250px'}} className='mText mb-3' placeholder='Phone Number' value={phoneNumberForSignup} onChange={(e) => setPhoneNumberForSignup(e.target.value)}/><br/>
                      {errorsForSignup.phoneNumberForSignup && <p className='loginErrorMsg'>{errorsForSignup.phoneNumberForSignup}</p>}
                      <button type="submit" className="btnLogin mb-1">Send OTP</button>
                  </form>
                  <span>Already a member ? <button onClick={()=>{setLoginTab(true)}}>Login</button></span><br/>
                </>  
              }
              {otpVerificationPage && 
                <>
                  <div className="d-flex flex-column align-items-center justify-content-center mb-3"> 
                    <h2>OTP Verification !</h2>
                    <p>You will receive<br/>an OTP that has been sended on<br/><strong><em>{phoneNumberForSignup}</em></strong></p>
                    <div>
                      <span className='timer'>{seconds}s ? </span> 
                      <span style={{fontStyle: 'italic', color: 'blue', cursor: seconds === 0 ? 'pointer' : 'not-allowed'}} onClick={() => {
                        if(seconds === 0){
                          sendOtpAPI();
                          setSeconds(59);
                        }
                      }} >Resend OTP</span>
                    </div>
                  </div>
                  <form onSubmit={isOtpMatch}>
                      <input type="text" className='mText mb-3' placeholder='Enter OTP' value={storeOtp} onChange={(e) => setStoreOtp(e.target.value)}/><br/>
                      {errorForOtpVerification.length !== 0 && <p className='loginErrorMsg'>{errorForOtpVerification}</p>}
                      <button type="submit" className="btnLogin mb-1">Verify</button>
                  </form>
                  <span>Want to change mobile ? <button onClick={()=>{
                    setOtpVerificationPage(false);
                    setStoreOtp("");
                    }}>Edit Mobile</button></span><br/>
                </>  
              }

              {fillPersonalInfo &&
              <>
                <div className="d-flex flex-column align-items-center justify-content-center mb-3"> 
                  <h2>Create Account !</h2>
                  <p>Create your account <br/>to unlock exclusive benefits and <br/> start shopping with ease.</p>
                </div>
                <form onSubmit={signupSubmit}>
                    <input type="text" className='mText mb-3' placeholder='Full Name'value={fullName} onChange={(e) => setFullName(e.target.value)}/><br/>
                    {errorsForSignup.fullName && <p className='loginErrorMsg'>{errorsForSignup.fullName}</p>}
                    <span className='countrtCodeForSign'>+91</span><input type="text" style={{width:'250px'}} className='mText mb-3' placeholder='Phone Number' value={phoneNumberForSignup} disable='true'/><br/>
                    {errorsForSignup.phoneNumberForSignup && <p className='loginErrorMsg'>{errorsForSignup.phoneNumberForSignup}</p>}
                    <input type="password" className="pText mb-3" placeholder='New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} /><br/>
                    {errorsForSignup.newPassword && <p className='loginErrorMsg'>{errorsForSignup.newPassword}</p>}
                    <input type="password" className="pText mb-3" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/><br/>
                    {errorsForSignup.confirmPassword && <p className='loginErrorMsg'>{errorsForSignup.confirmPassword}</p>}
                    <button type="submit" className="btnLogin mb-1">Next</button>
                </form>
                <span>Already a member ? <button onClick={()=>{setLoginTab(true)}}>Login</button></span><br/>
              </>}
>>>>>>> prince
           </>}
          </div>
        </div>
      </div> 
    </>
  )
}

export default Auth;