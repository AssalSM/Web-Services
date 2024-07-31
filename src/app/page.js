// import from next
export const metadata = {
  title: "Welcome to Our Website Creation Services",
  description:
    "We specialize in creating portfolio, e-commerce, and service websites. Contact us to get started.",
  keywords:
    "services, website creation, portfolio websites, e-commerce websites, service websites, web development",
};

import Image from "next/image";
import styles from "./page.module.css";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import { SiCodeproject } from "react-icons/si";
import Projectcard from "../component/Projectcard";
import { FaThList } from "react-icons/fa";
import Slider from "../component/Slider";
import { isDragActive } from "framer-motion";
// import Slider2 from "../component/slider2";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div>
        <div className={styles.center}>
          <div className={styles.welcome}>
            <p className={styles.title}>
              We provide high quality services in a short time
            </p>
            <p className={styles.parg}>
              Visit the Services page to see what we offer, the About page to
              learn how we work, and Contact us to create your own website.
            </p>
          </div>

          <Image
            className={styles.logo}
            src="/Untitled3.png"
            alt="Next.js Logo"
            width={390}
            height={400}
          />
        </div>
      </div>
      <div id="project" className="projectsection">
        <dev className="titleallproject">
          
          {/* <Image
          className={styles.logo2}
            src="/Pngtree.png"
            alt="Next.js Logo"
            width={390}
            height={400}
          /> */}
          <div className="flex item">
          <FaThList />
            <p className="title2">
             Projects List
            </p>
          </div>
        
         
        </dev>
        <div className="allproject">
          <Projectcard />
        </div>
      </div>
      <div className="allcommint">
        <Slider />
      </div>
      <Footer />
    </main>
  );
}
