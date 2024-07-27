"use client";

import Image from "next/image";
import "./projectcard.css";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Application",
    description: "Project 1 E-commerce",
    image: "/projects/10.jpeg",
    gitUrl: "https://shopsy-test-project.vercel.app/",
  },
  {
    id: 2,
    title: "Food Ordering Application",
    description: "Project 2 Food ",
    image: "/projects/7.jpeg",
    gitUrl: "https://food-store-test.vercel.app/",
  },
 
  {
    id: 3,
    title: "React Portfolio Website",
    description: "Project 3 Portfolio",
    image: "/projects/1.png",
    gitUrl: "https://shopsy-test-project.vercel.app/",
  },
  {
    id: 3,
    title: "developer Portfolio Website",
    description: "Project 4 portfolio",
    image: "/projects/9.jpeg",
    gitUrl: "https://portfolio-test-gules.vercel.app/",
  },
];
function Projectcard() {
  return (
    <div className="allprojectdetails">
      {projectsData.map((item) => {
        return (
          <article key={item?.imgpath} className="card">
            <Image
              width={200}
              height={200}
              className="imageproject"
              src={item.image}
              alt="image"
            />
            <div className="  box">
              <p className="title">{item.title}</p>
              <p className="subtitle">{item.description}</p>
            </div>
            <div className="viewandshare">
              <div className="share">
                <BsWhatsapp />
                <p>share</p>
              </div>
              <Link className="viewproject" href={item?.gitUrl}>
                view project
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Projectcard;
