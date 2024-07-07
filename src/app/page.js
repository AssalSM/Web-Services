// import from next
export const metadata = {
  title: 'Welcome to Our Website Creation Services',
  description: 'We specialize in creating portfolio, e-commerce, and service websites. Contact us to get started.',
  keywords:"services, website creation, portfolio websites, e-commerce websites, service websites, web development"
}; 

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";



export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div>
        <div className={styles.center}>
          <div className={styles.welcome}>
            <p className={styles.title}>We provide high quality services in a short time</p>
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

     <Footer />
    </main>
  );
}
