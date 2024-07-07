
//import component
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";
import Slider from "../../component/Slider";
import React from "react";

// style import
import "./services.css";
import styles from "../page.module.css";

// icon
import { FaShopify } from "react-icons/fa";
import { LiaAws } from "react-icons/lia";
import { GiEgyptianProfile } from "react-icons/gi";

//images
const images = [
  "/portfolio/portfolio1.jpg",
  "/portfolio/portfolio2.jpg",
  "/portfolio/portfolio3.jpg",
  "/portfolio/portfolio.jpg",
];
const images2 = [
  "/ecommerce/ecommrce.jpeg",
  "/ecommerce/ecommrce1.jpeg",
  "/ecommerce/ecommrce3.jpeg",
  "/ecommerce/ecommrce2.jpeg",
];
const images3 = [
  "/services/services.jpg",
  "/services/services1.jpg",
  "/services/services2.jpg",
  "/services/services3.jpg",
];
export const metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'We offer a range of website creation services including portfolio, e-commerce, and service websites. Discover how we can help you.',
  keywords:"services, website creation, portfolio websites, e-commerce websites, service websites, web development"
};

function Page() {
  return (
    <>
      <div className={styles.main}>
        <Header />
        <div className="all-services">
          <main className="main-services">
            <div className="services">
              <div className="title">
                <GiEgyptianProfile />
                <p>Portfolio</p>
              </div>
              <p className="parag">
                Creating innovative personal portfolio websites that showcase
                your skills and achievements in a unique and engaging way,
                enhancing your online presence.
              </p>
              {/* <Link href={"/"}>
              <div className="title2">
                <FaWhatsapp />
                <p>contact</p>
              </div>
            </Link> */}
            </div>
            <div className="images">
              <Slider images={images} />
            </div>
          </main>

          <main className="main-services">
            <div className="services">
              <div className="title">
                <FaShopify />
                <p>E-commerce</p>
              </div>
              <p className="parag">
                Designing and developing e-commerce websites using cutting-edge
                technologies and industry standards, ensuring seamless user
                experience and maximizing online sales.
              </p>
              {/* <Link href={"/"}>
              <div className="title2">
                <FaWhatsapp />
                <p>contact now</p>
              </div>
            </Link> */}
            </div>
            <div className="images">
              <Slider images={images2} />
            </div>
          </main>

          <main className="main-services">
            <div className="services">
              <div className="title">
                <LiaAws />
                <p>Services</p>
              </div>
              <p className="parag">
                Offering flexible and efficient web support and maintenance
                services to optimize website performance and cater to your
                evolving business needs.
              </p>
              {/* <Link href={"/"}>
              <div className="title2">
                <FaWhatsapp />
                <p>contact now</p>
              </div>
            </Link> */}
            </div>
            <div className="images">
              <Slider images={images3} />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Page;
