import React from 'react';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import './MyProfileStyle.css';

const MyProfile = () => {
    return(
        <section className="profile-container">
            <div className="profile-menu-container">
                <div className='my-order-container'>
                    My Orders
                    <ul className='my-order-options'>
                        <Link className='option'><li>Orders on Way</li></Link>
                        <Link className='option'><li>Orders Delivered</li></Link>
                        <Link className='option'><li>Orders Cancelled</li></Link>
                        <Link className='option'><li>Orders Returned</li></Link>
                    </ul>
                </div>
                <div className='account-setting-container'>
                    Account Setting
                    <ul className='account-setting-options'>
                        <Link className='option'><li>Profile Information</li></Link>
                        <Link className='option'><li>Manage Address</li></Link>
                    </ul>
                </div>
                <div className='payment-container'>
                    Payments
                    <ul className="payment-options">
                        <Link className='option'><li>Saved UPI</li></Link>
                        <Link className='option'><li>Saved Cards</li></Link>
                    </ul>
                </div>
                <div className='my-stuff-container'>
                    My Stuff
                    <ul className='my-stuff-options'>
                        <Link className='option'><li>My Review & Ratings</li></Link>
                        <Link className='option'><li>My wishlist</li></Link>
                    </ul>
                </div>
                <div className='option logout'>
                    Logout
                </div>
            </div>
            <div className='user-container'>
                <div className='user-info-container'>
                    {/* <h4>Hello, OnePrice Customer</h4> */}
                    <div className='user-info'>
                        <div className="avatar-container" style={{marginTop: '-8px'}}>
                            {/* <div className="avatar"></div>  */}
                            <CgProfile className='avatar' />
                        </div>
                        <div className="user-input-fields">
                            <div className="user-name">
                                <div className="first">
                                    <label htmlFor="first-name">First Name</label>
                                    <input id='first-name' type="text" name="first-name" placeholder='e.g Prince' autoComplete='off'/>
                                </div>
                                <div className='last'>
                                    <label htmlFor="last-name">Last Name</label>
                                    <input id='last-name' type="text" name='last-name' placeholder='e.g Kumar' autoComplete='off'/>
                                </div>
                            </div>
                            <div className='user-gender-container'>
                                <div className="user-gender">
                                    <div>Your Gender</div>
                                    <div className='gender-radio-btn' style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
                                        <input type="radio" name="gender" id="gender-male" /> <label htmlFor="gender-male">Male</label>
                                        <input type="radio" name="gender" id="gender-female" /> <label htmlFor="gender-female">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className="phone-mail-container">
                                <div className="email">
                                    <label htmlFor="mail">Email</label>
                                    <input type="email" name="mail" id="mail" autoComplete='off' placeholder='e.g abc123@gmail.com' required/>
                                </div>
                                <div className="phone">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="number" name="mobile" id="mobile" autoComplete='off' placeholder='e.g 7011128872' required/>
                                </div>
                            </div>
                            <div className='save-info-btn'>Update</div>
                        </div>
                    </div>
                </div>
                <div className='faq-container'>
                    <h5 className='heading'>Some Commonly Asked Questions</h5>
                    <div className='questions-container'>
                        <div className='question'>
                            What happens when I update my email address (or mobile number)?
                        </div>
                        <div className='answer'>
                            Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
                        </div>
                        <div className='question'>
                            When will my Flipkart account be updated with the new email address (or mobile number)?
                        </div>
                        <div className='answer'>
                            It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.
                        </div>
                        <div className='question'>
                            What happens to my existing Flipkart account when I update my email address (or mobile number)?
                        </div>
                        <div className='answer'>
                            Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.
                        </div>
                        <div className='question'>
                            Does my Seller account get affected when I update my email address?
                        </div>
                        <div className='answer'>
                            Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyProfile;