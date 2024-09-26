import React, { useState } from 'react'
import { useEffect } from 'react';
import { IoRemoveOutline } from "react-icons/io5";
import './authStyle.css';

const Auth = () => {
  //for login start
  const [loginTab, setLoginTab] = useState(true); // true: show login; false
  const [fillPersonalInfo, setFillPersonalInfo] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [otpVerificationPage, setOtpVerificationPage] = useState(false);
  const [storeOtp, setStoreOtp] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [rememberMe, setRememberMe] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);

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
      body: JSON.stringify({ mobile })
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
    const { success, msg } = response;
    if (success) {
      setOtpVerificationPage(() => true);
      console.log(msg);
      setSeconds(60);
    }
    else {
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
      body: JSON.stringify({ mobile: mobile, otp: storeOtp })
    });

    const response = await sendRequest.json();
    console.log(response);
    const { success } = response;
    if (success) {
      console.log("Verification Successful");
      setFillPersonalInfo(true);
    }
    else {
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
      body: JSON.stringify({ name: fullName, mobile: phoneNumberForSignup, password: newPassword })
    })

    const response = await userRegistrationAPI.json();
    const { accessToken, refreshToken } = response;
    console.log(accessToken, refreshToken);
    console.log(response);
    if (response.success) {
      console.log('Registration successful!');
      window.location.href = 'http://localhost:3000';
    }
    else {
      const { error } = response;
      if (error === "Already Register Mobile Number.") {
        setErrorsForSignup({ ...errorsForSignup, phoneNumberForSignup: error });
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
    if (passwordError) {
      setErrorsForSignup({ ...errorsForSignup, newPassword: passwordError });
      return;
    }

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setErrorsForSignup({ ...errorsForSignup, confirmPassword: 'Passwords do not match.' });
      return;
    }

    RegisterUser();

  };


  return (
    <>
      <div className="d-flex align-items-center justify-content-center m-5" style={{ height: '80vh' }}>
        <div className="userOuter d-flex flex-row shadow-lg bg-body rounded">
          <div className="innerLeft text-white p-4 d-flex flex-column align-items-center justify-content-center" >
            <p className='mb-4'>Nice to see you Again :)</p>
            <h1> WELCOME BACK</h1>
            <IoRemoveOutline className='vLine' />
            <p>To keep connected with us please
              login with<br />personal information !</p>
          </div>
          <div className="innerRight p-5">
            {loginTab
              &&
              <>
                <div className="d-flex flex-column align-items-center justify-content-center mb-4">
                  <h2>Login Account !</h2>
                  <p>Please sign in to access your<br />account and continue your shopping<br /> experience.</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <span className='countrtCode'>+91</span><input type="text" style={{ width: '250px' }} className='mText mb-3' placeholder='Phone Number' value={phoneNumber} onChange={handlePhoneNumberChange} /><br />
                  {errors.phone && <p className='loginErrorMsg'>{errors.phone}</p>}
                  <input type="password" className="pText mb-3" placeholder='Password' value={password} onChange={handlePasswordChange} /><br />
                  {errors.password && <p className='loginErrorMsg'>{errors.password}</p>}
                  <input type="checkbox" id="saveUser" className='mb-3' onChange={(event) => setRememberMe(event.target.value)} /><label htmlFor="saveUser">Keep me signed in</label><br />
                  <button type="submit" className="btnLogin mb-1">Login</button>
                </form>
                <a href='/fp' className='fp'>Forgot your password?</a>
                <hr></hr>
                <span>Don't have an  account ? <button onClick={() => {
                  setLoginTab(false)
                }}>Signup.</button></span><br />
              </>}


            {!loginTab &&
              <>
                {otpVerificationPage !== null && !otpVerificationPage &&
                  <>
                    <div className="d-flex flex-column align-items-center justify-content-center mb-3">
                      <h2>Create Account !</h2>
                      <p>Create your account <br />to unlock exclusive benefits and <br /> start shopping with ease.</p>
                    </div>
                    <form onSubmit={handleSendOTP}>
                      <span className='countrtCodeForSign'>+91</span><input type="text" style={{ width: '250px' }} className='mText mb-3' placeholder='Phone Number' value={phoneNumberForSignup} onChange={(e) => setPhoneNumberForSignup(e.target.value)} /><br />
                      {errorsForSignup.phoneNumberForSignup && <p className='loginErrorMsg'>{errorsForSignup.phoneNumberForSignup}</p>}
                      <button type="submit" className="btnLogin mb-1">Send OTP</button>
                    </form>
                    <span>Already a member ? <button onClick={() => { setLoginTab(true) }}>Login</button></span><br />
                  </>
                }
                {otpVerificationPage &&
                  <>
                    <div className="d-flex flex-column align-items-center justify-content-center mb-3">
                      <h2>OTP Verification !</h2>
                      <p>You will receive<br />an OTP that has been sended on<br /><strong><em>{phoneNumberForSignup}</em></strong></p>
                      <div>
                        <span className='timer'>{seconds}s ? </span>
                        <span style={{ fontStyle: 'italic', color: 'blue', cursor: seconds === 0 ? 'pointer' : 'not-allowed' }} onClick={() => {
                          if (seconds === 0) {
                            sendOtpAPI();
                            setSeconds(59);
                          }
                        }} >Resend OTP</span>
                      </div>
                    </div>
                    <form onSubmit={isOtpMatch}>
                      <input type="text" className='mText mb-3' placeholder='Enter OTP' value={storeOtp} onChange={(e) => setStoreOtp(e.target.value)} /><br />
                      {errorForOtpVerification.length !== 0 && <p className='loginErrorMsg'>{errorForOtpVerification}</p>}
                      <button type="submit" className="btnLogin mb-1">Verify</button>
                    </form>
                    <span>Want to change mobile ? <button onClick={() => {
                      setOtpVerificationPage(false);
                      setStoreOtp("");
                    }}>Edit Mobile</button></span><br />
                  </>
                }

                {fillPersonalInfo &&
                  <>
                    <div className="d-flex flex-column align-items-center justify-content-center mb-3">
                      <h2>Create Account !</h2>
                      <p>Create your account <br />to unlock exclusive benefits and <br /> start shopping with ease.</p>
                    </div>
                    <form onSubmit={signupSubmit}>
                      <input type="text" className='mText mb-3' placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} /><br />
                      {errorsForSignup.fullName && <p className='loginErrorMsg'>{errorsForSignup.fullName}</p>}
                      <span className='countrtCodeForSign'>+91</span><input type="text" style={{ width: '250px' }} className='mText mb-3' placeholder='Phone Number' value={phoneNumberForSignup} disable='true' /><br />
                      {errorsForSignup.phoneNumberForSignup && <p className='loginErrorMsg'>{errorsForSignup.phoneNumberForSignup}</p>}
                      <input type="password" className="pText mb-3" placeholder='New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} /><br />
                      {errorsForSignup.newPassword && <p className='loginErrorMsg'>{errorsForSignup.newPassword}</p>}
                      <input type="password" className="pText mb-3" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br />
                      {errorsForSignup.confirmPassword && <p className='loginErrorMsg'>{errorsForSignup.confirmPassword}</p>}
                      <button type="submit" className="btnLogin mb-1">Next</button>
                    </form>
                    <span>Already a member ? <button onClick={() => { setLoginTab(true) }}>Login</button></span><br />
                  </>}
              </>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth;