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
          <section id="contact" className="contact-us">
            <div>
              <h1 className="title">contact us</h1>
              <div className="sub-title">
                <p>We offer support for website design and development.</p>
                <p>For inquiries or to create a new site,</p>
                <p>
                  please fill out the form below, or contact us via WhatsApp or
                  other platforms.
                </p>
              </div>
              <p className="sub-title"></p>
              <p className="sub-title"></p>
            </div>
            <div className="flex">
              <form onSubmit={handleSubmit}>
                <div className="flex1">
                  <label htmlFor="email">Email Address:</label>
                  <input
                    autoComplete="off"
                    required
                    type="email"
                    name="email"
                    id="email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="flex1">
                  <label htmlFor="number"> Your Number : </label>
                  <input
                    autoComplete="off"
                    type="text"
                    name="number"
                    id="email"
                  />
                  <ValidationError
                    prefix="number"
                    field="number"
                    errors={state.errors}
                  />
                </div>
                <div className="flex" style={{ marginTop: "24px" }}>
                  <label htmlFor="message"> your message:</label>
                  <textarea required name="message" id="message"></textarea>
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
                {state.succeeded && <p>Thanks for joining!</p>}
              </form>
              <div className=" animation"></div>
            </div>
          </section>
        </div>
        <div className="partinfo">
          <p className="sub-title">
            or contact us via WhatsApp or other platforms.
          </p>
          <span className="spancontact">
            <FaWhatsapp />
            <p>+212 768-866259</p>
          </span>
          <Line />
          <span className="spancontact">
            <FaFacebookF />
            <p> WebServices</p>
          </span>
          <Line />
          <span className="spancontact">
            <FaInstagram />
            <p> @WebServices</p>
          </span>
          <Line />
          <span className="spancontact">
            <FaTiktok />
            <p> @WebServices</p>
          </span>
          <Line />
        </div>
      </div>
    </div>
    </>
  );
}

export default Page;
