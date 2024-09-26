import React,{useState} from 'react'
import { IoClose } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";
import('./Index.css');
const Index = () => {
  const [showContactUs, setShowContactUs] = useState(false);
  return (
    <>
    <div className='footer p-5'>
      <div className="secton">
      <h2>One Price</h2>
        <div className="subscribe">
            <input type="email" className='d-block mt-4 mb-3 border-none  emailSub' placeholder='Enter your Email*'/>
            <button className='btn btn-none rounded-5 text-white border-white pl-5 mb-5 d-block'>Subscribe</button>
            <label> Get monthly updates and <br/> free resource. </label>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="secton">
      <h5 className='mb-4'>Mobirise</h5>
        <p>Phone: +91 000 0000 001</p>
=======
      <div className="secton">
        <h5 className='mb-4'>Mobirise</h5>
        <p>Phone: +91 7011128872</p>
>>>>>>> a894a7bf32db5568d56ba760b13103bcbf0149fb
        <p>Email: yourmail@example.com</p>
        <p>Address: 1234 Street Name City, AA <br/><br/> 99999</p>
        <div className="social-icons">
            <a href="a"><FaXTwitter /></a>
            <a href="a"><FaFacebookF /></a>
            <a href="a"><FaYoutube /></a>
            <a href="a"><FaInstagram /></a>
            <a href="a"><IoLogoGoogleplus /></a>
        </div>
      </div>
      <div className="secton">
          <h5 className='mb-4'>Help</h5>
          <p><a href="a">Payments</a></p>
          <p><a href="a">Shipping</a></p>
          <p><a href="a">FAQ</a></p>
          <p><a href="a">Cancellation & Returns</a></p>
<<<<<<< HEAD

          <h5 className='mb-3 mt-5'>Company</h5>
          <p className="contact-us"><a onClick={() => setShowContactUs(true)}>Contact Us</a></p>
          <p>About Us</p>
          <p>Career</p>
      </div>
      <div className="secton">
      <h5 className='mb-4'>Consumer Policy</h5>
        <p><a href="a">Cancellation & Returns</a></p>
        <p><a href="a">Terms & Condition</a></p>
        <p><a href="a">Security</a></p>
        <p><a href="a">Policy</a></p>
        <p><a href="a">Sitemap</a></p>
      </div>
    </div>

  {
    showContactUs && <section className={`contact-us-form-container`}>
        <span className="close-form" onClick={() => setShowContactUs(false)}><IoClose /></span>
        <div className={`contact-us-form`} style={{left: showContactUs? '50%' : '0%'}}>
          <h3>Queries & Feedback Form !</h3>
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
=======
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
>>>>>>> prince
=======

          <h5 className='mb-3 mt-5'>Company</h5>
          <p className="contact-us"><a onClick={() => setShowContactUs(true)}>Contact Us</a></p>
          <p>About Us</p>
          <p>Career</p>
      </div>
      <div className="secton">
      <h5 className='mb-4'>Consumer Policy</h5>
        <p><a href="a">Cancellation & Returns</a></p>
        <p><a href="a">Terms & Condition</a></p>
        <p><a href="a">Security</a></p>
        <p><a href="a">Policy</a></p>
        <p><a href="a">Sitemap</a></p>
      </div>
    </div>

  {
    showContactUs && <section className={`contact-us-form-container`}>
        <span className="close-form" onClick={() => setShowContactUs(false)}><IoClose /></span>
        <div className={`contact-us-form`} style={{left: showContactUs? '50%' : '0%'}}>
          <h3>Queries & Feedback Form !</h3>
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
>>>>>>> a894a7bf32db5568d56ba760b13103bcbf0149fb
  </>
  )
}

export default Index