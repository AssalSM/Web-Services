"use client";

import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { useState } from "react";

// import icon
import { GoHome } from "react-icons/go";
import { IoLogoFreebsdDevil } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { PiExclamationMarkBold } from "react-icons/pi";
import { CiMenuFries } from "react-icons/ci";

import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const [showModal, setshowModal] = useState(false);

  return (
    <div className={styles.description}>
      <div>
        <Link
          href="/"
          // target="_blank"
          rel="noopener noreferrer"
          className={styles.textlogo}
        >
          <Image
            src="/logodevser.jpeg"
            alt="Vercel Logo"
            width={60}
            height={60}
            priority
          />
          WebServices
        </Link>
      </div>
      <div className={styles.links}>
        <Link
          href="/"
          className={styles.Link}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <GoHome />
          Home
        </Link>
        <Link
          className={styles.Link}
          href="/about"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <PiExclamationMarkBold />
          About
        </Link>
        <Link
          className={styles.Link}
          href="/services"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoFreebsdDevil />
          Services
        </Link>
        <Link
          className={styles.Link}
          href="/contact"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <FiMessageCircle />
          Contact
        </Link>
      </div>

      {!showModal && (
        <CiMenuFries
          className={styles.menu}
          onClick={() => {
            setshowModal(!showModal);
          }}
        />
      )}
      {showModal && (
        <IoCloseSharp
          className={styles.close}
          onClick={() => {
            setshowModal(false);
          }}
        />
      )}

      {showModal && (
        <div className={styles.fixed}>
          <div className={styles.links2}>
            <Link
              href="/"
              className={styles.Link2}
              // target="_blank"
              rel="noopener noreferrer"
            >
              <GoHome />
              Home
            </Link>
            <Link
              className={styles.Link2}
              href="/about"
              // target="_blank"
              rel="noopener noreferrer"
            >
              <PiExclamationMarkBold />
              About
            </Link>
            <Link
              className={styles.Link2}
              href="/services"
              // target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoFreebsdDevil />
              services
            </Link>
            <Link
              className={styles.Link2}
              href="/contact"
              // target="_blank"
              rel="noopener noreferrer"
            >
              <FiMessageCircle />
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
