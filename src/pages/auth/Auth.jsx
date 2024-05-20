import React, { useState } from 'react'
import { IoRemoveOutline } from "react-icons/io5";
import './authStyle.css';
import loader from '../../assets/loader.gif';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
   //for registraion --Start 
   const [loginTab, setLoginTab] = useState(true); // true: show login; false
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
           </>}
          </div>
        </div>
        {/* Login Form */}
      </div> 
    </>
  )
}

export default Auth