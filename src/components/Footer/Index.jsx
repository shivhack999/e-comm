import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import "./Index.css";
const Index = () => {

  const [showContactUs, setShowContactUs] = useState(false);

  return (
    <>
    <footer className="footer d-flex">
      <div>
        <img src={logo} alt="company" />
        {/* <span>copyright@2024</span> */}
      </div>
      
      <div className="footer-menu d-flex">
        <div className="company">
          <h3>Company</h3>
          <span className="contact-us" onClick={() => setShowContactUs(true)}>Contact Us</span>
          <span>About Us</span>
          <span>Career</span>
        </div>
        <div className="Help">
          <h3>Help</h3>
          <span>Payments</span>
          <span>Shipping</span>
          <span>Cancellation & Returns</span>
          <span>FAQ</span>
        </div>
        <div className="consumer-policy">
          <h3>Consumer Policy</h3>
          <span>Cancellation & Returns</span>
          <span>Terms & Condition</span>
          <span>Security</span>
          <span>Policy</span>
          <span>Sitemap</span>
        </div>
      </div>
    </footer>
    

    {/* contact us form visible after clicking the contact-us of footer section */}
    {
      showContactUs && <section className={`contact-us-form-container`}>
          <span className="close-form" onClick={() => setShowContactUs(false)}>&times;</span>
          <div className={`contact-us-form`} style={{left: showContactUs? '50%' : '0%'}}>
            <h2>Queries And Feedback Form</h2>
            <form action="#" onSubmit={(event) => {
              event.preventDefault();
              console.log("Submitted Successfully");
              setShowContactUs(false);
            }}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label  htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows={5} required></textarea>
                </div>
                <div className="form-group" style={{textAlign: 'center'}}>
                  <input type="submit" value="Submit" />
                </div>
            </form>
          </div>
      </section> 
    }
  </>
)}

export default Index