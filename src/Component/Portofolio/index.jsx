import React, { useEffect, useRef } from "react";
import { Element } from "react-scroll";
import "./portofolio.css"
import Card from "../Card"; // Pastikan path sesuai
import p from "../img/p.png";
import p2 from "../img/p2.png";
import p4 from "../img/p4.png";
import p6 from "../img/p6.png";

const Portofolio = () => {
  const judulRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-down-animate");
          } else {
            entry.target.classList.remove("fade-down-animate");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (judulRef.current) observer.observe(judulRef.current);

    return () => {
      if (judulRef.current) observer.unobserve(judulRef.current);
    };
  }, []);

  return (
    <Element name="portofolio">
      <section className="w-full lg:h-[95rem] h-[170rem] bg-white">
        <div className="pt-16">
          <div className="fade-down" ref={judulRef}>
            <p className="text-7xl font-bold text-cyan-700 opacity-40 text-center -z-10 ">
              Portfolio
            </p>
            <p className="text-5xl font-bold mt-[-3.2rem] text-cyan-700 text-center z-10 ">
              Portfolio
            </p>
          </div>
          <div className="pt-12 grid mx-4 grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <Card
              image={p}
              title="Web Community"
              description="web community is an online platform for a community."
              content="An example of a web community is Abhaya Dhairya, which is the website of the 2024 Odd Scout community from Sriwijaya University, which is used to store albums or memories."
              buttonLabel="Create Your Version"
            />
            <Card
              image={p2}
              title="Web Personal"
              description="a portfolio website is an online platform for showcasing one's work, skills, and experience."
              content="A personal website or portfolio is an online platform to showcase work, skills, and experience, serving as a digital introduction to highlight projects and expertise."
              buttonLabel="Create Your Version"
            />
            <Card
              image={p4}
              title="Web E-Commerce"
              description="a web e-commerce site is an online platform for buying and selling products or services."
              content="A web e-commerce site is an online platform that allows businesses and individuals to buy and sell products or services. It features product listings, shopping carts, and secure payment options for a seamless shopping experience."
              buttonLabel="Create Your Version"
            />
            <Card
              image={p6}
              title="Freelance Web Development"
              description="Work on websites for academic assignments and personal projects with features as requested."
              content="Create websites according to your needs, including CRUD, database integration, and responsive design. Ready to accept special feature requests!"
              buttonLabel="Create Your Version"
            />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Portofolio;
