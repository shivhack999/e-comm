import React, { useState } from 'react'
import { IoRemoveOutline } from "react-icons/io5";
import './authStyle.css';


const Auth = () => {
   //for login start
   const [loginTab, setLoginTab] = useState(true); // true: show login; false
   const [phoneNumber, setPhoneNumber] = useState('');
   const [password, setPassword] = useState('');
   const [errors, setErrors] = useState({});
 
 
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
   //for login end
 
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
     const phoneError = validatePhoneNumberForSignup();
     if (phoneError) {
       setErrorsForSignup({ ...errorsForSignup, phoneNumberForSignup: phoneError });
       return;
     }
 
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
 
     // If all validations pass, submit the form
     console.log('Registration successful!');
   };

  return (
    <>
       <div className="d-flex align-items-center justify-content-center" style={{height:'80vh'}}>
        <div className="userOuter d-flex flex-row shadow-lg bg-body rounded">
          <div className="innerLeft text-white p-4 d-flex flex-column align-items-center justify-content-center">
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
              <form onSubmit={handleSubmit}>
                  <span className='countrtCode'>+91</span><input type="text" style={{width:'250px'}} className='mText mb-3' placeholder='Phone Number' value={phoneNumber} onChange={handlePhoneNumberChange} /><br/>
                  {errors.phone && <p className='loginErrorMsg'>{errors.phone}</p>}
                  <input type="password" className="pText mb-3" placeholder='Password' value={password} onChange={handlePasswordChange}/><br/>
                  {errors.password && <p className='loginErrorMsg'>{errors.password}</p>}
                  <input type="checkbox" id="saveUser" className='mb-3' /><label htmlFor="saveUser">Keep me signed in</label><br/>
                  <button type="submit" className="btnLogin mb-1">Login</button>
              </form>
              <a href='/fp' className='fp'>Forgot your password?</a>
              <hr></hr>
              <span>Don't have an  account ? <button onClick={()=>{
                setLoginTab(false)
              }}>Signup.</button></span><br/>
            </>}
            {!loginTab &&
             <>
              <div className="d-flex flex-column align-items-center justify-content-center mb-3"> 
                <h2>Create Account !</h2>
                <p>Create your account <br/>to unlock exclusive benefits and <br/> start shopping with ease.</p>
              </div>
              <form onSubmit={signupSubmit}>
                  <input type="text" className='mText mb-3' placeholder='Full Name'value={fullName} onChange={(e) => setFullName(e.target.value)}/><br/>
                  {errorsForSignup.fullName && <p className='loginErrorMsg'>{errorsForSignup.fullName}</p>}
                  <span className='countrtCodeForSign'>+91</span><input type="text" style={{width:'250px'}} className='mText mb-3' placeholder='Phone Number' value={phoneNumberForSignup} onChange={(e) => setPhoneNumberForSignup(e.target.value)}/><br/>
                  {errorsForSignup.phoneNumberForSignup && <p className='loginErrorMsg'>{errorsForSignup.phoneNumberForSignup}</p>}
                  <input type="password" className="pText mb-3" placeholder='New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} /><br/>
                  {errorsForSignup.newPassword && <p className='loginErrorMsg'>{errorsForSignup.newPassword}</p>}
                  <input type="password" className="pText mb-3" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/><br/>
                  {errorsForSignup.confirmPassword && <p className='loginErrorMsg'>{errorsForSignup.confirmPassword}</p>}
                  <button type="submit" className="btnLogin mb-1">Signup</button>
              </form>
              <span>Already a member ? <button onClick={()=>{setLoginTab(true)}}>Login</button></span><br/>
           </>}
          </div>
        </div>
        {/* Login Form */}
      </div> 
    </>
  )
}

export default Auth