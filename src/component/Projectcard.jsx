"use client";

import Image from "next/image";
import './projectcard.css'

const projectsData = [
    {
      id: 1,
      title: "React Portfolio Website",
      description: "Project 1 description",
      image: "/projects/1.png",
      
      gitUrl: "/",
     
    },
    {
      id: 2,
      title: "Potography Portfolio Website",
      description: "Project 2 description",
      image: "/projects/2.png",
      gitUrl: "/",
     
    },
    {
      id: 3,
      title: "E-commerce Application",
      description: "Project 3 description",
      image: "/projects/3.png",
      gitUrl: "/",
    },
    {
      id: 4,
      title: "Food Ordering Application",
      description: "Project 4 description",
      image: "/projects/4.png",
      gitUrl: "/",
    },
   
   
  ];
function Projectcard() {
    
  return (
    <div className="allprojectdetails">
     {projectsData.map((item) => {
          return (
            <article key={item.imgpath} className="card">
             <Image width={200} height={200} className="imageproject" src={item.image} alt="image" />
              <div  className="  box">
                <h1 className="title">{item.title}</h1>
                <p className="subtitle">{item.description}</p>
                
              </div>
            </article>
          );
        })}
    </div>
  )
}

export default Projectcard
