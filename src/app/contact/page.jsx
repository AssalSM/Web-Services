"use client";
import Line from "@/component/Line";
import React from "react";
import "./Contact.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import styles from "../page.module.css";
import { useForm, ValidationError } from "@formspree/react";
import Header from "@/component/header/Header";




// export const metadata = {
//   title: 'Contact Us - Get in Touch',
//   description: 'Reach out to us for any inquiries or support related to our website creation services. We are here to help you!',
//   keywords:"contact, website creation, web development, portfolio websites, e-commerce websites, service websites"
// };

function Page() {
  const [state, handleSubmit] = useForm("mjvnrwkr");

  return (
    <>
    
   
    
  
    <div className={styles.main}>
      <Header />
      <div className="flexcontact">
      <div className="partemail">
              <form onSubmit={handleSubmit}>
                <div className="formemail" >
                  {/* <label htmlFor="email" >Email</label> */}
                  <p  >Email</p>
                  <input
                    autoComplete="on"
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@email.com"
                    className="formplace"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="formemail">
                  <p htmlFor="number">Number  </p>
                  <input
                    autoComplete="off"
                    placeholder="+212 123456789"
                    type="text"
                    name="number"
                    id="email"
                    className="formplace"
                  />
                  <ValidationError
                    prefix="number"
                    field="number"
                    errors={state.errors}
                  />
                </div>
                <div className="formemail" >
                  <p htmlFor="message">  message</p>
                  <textarea  className="formplace2" placeholder="just saying hi " required name="message" id="message">


                  </textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="submit"
                >
                  {state.submitting ? "submitting..." : "submit"}
                </button>
                {state.succeeded && <p className="thanksmessage">Thanks for joining!</p>}
              </form>
             
            </div>
        <div className="partinfo" >
          <section id="contact" className="contact-us">
            <div className="textinfo" >
              <p className="title">let&apos;s connect</p>
              <div className="sub-title">
                <p>We offer support for website design and development.</p>
                <p>For inquiries or to create a new site,</p>
                <p>
                  please fill out the form below, or contact us via WhatsApp or
                  other platforms.
                </p>
              </div>
             
            </div>
            <div className="socialicon" >
          
          <span className="spancontact">
            <FaWhatsapp />
            <p>+212 768-866259</p>
          </span>
          <Line />
          <span className="spancontact">
            <FaFacebookF />
            <p> AssalDev</p>
          </span>
          <Line />
          <span className="spancontact">
            <FaInstagram />
            <p> @Assal_Dev_</p>
          </span>
          <Line />
          <span className="spancontact">
            <FaTiktok />
            <p> @Assal_Dev</p>
          </span>
          <Line />
        </div>
          </section>
        </div>
        
      </div>
    </div>
    </>
  );
}

export default Page;
