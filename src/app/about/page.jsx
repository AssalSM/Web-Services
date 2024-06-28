import Header from "@/component/header/Header";
import React from "react";
import styles from "../page.module.css";

import "./about.css";
function page() {
  return (
    <div>
      <div className={styles.main}>
        <Header />
      </div>
      {/* <main className="backgrouned"></main> */}
      <section className="section" >
        <div>
          <p className="prp1">
          Welcome to WebServices your go-to solution for professional and affordable website creation. Whether you need a portfolio, an e-commerce site, or a service-based website, we ve got you covered. Our mission is to bring your vision to life with high-quality design and development, tailored to meet your specific needs.
          </p>
          <h1>How We Work</h1>
          <p>
          1. *Contact Us*: Reach out to us via WhatsApp, email, Facebook, or Instagram to discuss your website requirements. <br />
2. *Design & Development*: Our team will craft a design and develop your website based on your specifications. We offer highly competitive pricing, with costs determined by the complexity of your project. Simpler websites are very budget-friendly. <br />
3. *Review & Selection*: Once your request is submitted, we ll provide you with sample designs. You can choose the one that best fits your vision. <br />
4. *Preview Your Site*: Well set up a live domain for you to preview your website. If youre satisfied, you can proceed with the payment. <br />
5. *Final Delivery*: After payment, youll receive all the necessary keys and access to your fully functional website. <br />
6. *Satisfaction Guaranteed*: If the initial design doesnt meet your expectations, we offer a redesign at no extra cost. Alternatively, you can cancel the service without any charges. <br />
          </p>
          <h1>Why Choose Us?</h1>
          <p>
          - *Tailored Solutions*: Each website is uniquely designed to reflect your brand and goals. <br />
- *Affordable Pricing*: Our pricing is transparent and based on the complexity of your site, ensuring you get the best value. <br />
- *Customer-Centric Approach*: Your satisfaction is our priority. We offer revisions and flexible cancellation policies to ensure youre happy with the final product. <br />
- *SEO Optimized*: We ensure your website is optimized for search engines, helping you reach your target audience effectively. <br />
          </p>
          <p>Were committed to delivering top-notch websites that not only look great but also perform excellently in todays digital landscape. Ready to get started? Contact us today and lets create something amazing together!</p>
        </div>
      </section>
    </div>
  );
}

export default page;
