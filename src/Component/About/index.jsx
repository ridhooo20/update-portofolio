import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Element } from "react-scroll";
import gambarRidho from "../img/ridho.jpg";
import CertificateList from "../CertificateList";

const About = () => {
  const textRef = useRef(null);
  const gambarRef = useRef(null);
  const sRef = useRef(null);
  const timeRef = useRef(null);

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

    if (textRef.current) observer.observe(textRef.current);
    if (gambarRef.current) observer.observe(gambarRef.current);
    if (sRef.current) observer.observe(sRef.current);
    if (timeRef.current) observer.observe(timeRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (gambarRef.current) observer.unobserve(gambarRef.current);
      if (sRef.current) observer.unobserve(sRef.current);
      if (timeRef.current) observer.unobserve(timeRef.current);
    };
  }, []);

  return (
    <Element name="about">
      <section className="pt-12 lg:h-[100rem] h-[200rem] w-full background-about">
        <div className="text-center fade-down" ref={textRef}>
          <p className="text-6xl font-bold opacity-30 -z-10">"whoami"</p>
          <p className="text-4xl font-bold z-10 mt-[-2.5rem]">"whoami"</p>
        </div>

        <div className="pt-16 flex flex-col self-center items-center ">
          <div className="transition-transform  duration-300 hover:scale-105 hover:brightness-110">
            <img
              ref={gambarRef}
              src={gambarRidho}
              className="fade-down mx-auto cursor-pointer border-4 border-white rounded-full w-72 brightness-90"
            />
          </div>
          <h1
            ref={sRef}
            className="fade-down text-center lg:mx-72 mx-4 mt-8 text-md font-semibold text-white"
          >
            Hi, I'm Ridho Mulya — a Network & Cybersecurity Engineer and
            Software Engineer. I focus on designing and managing secure and
            reliable networks, conducting pentesting, and developing supporting
            applications to improve infrastructure performance and security.
            With this combination of expertise, I build efficient, resilient
            technology solutions that are ready to face the challenges of the
            digital world.
          </h1>
          <div className=" flex flex-col mt-4 mx-auto">
            <h1
              ref={timeRef}
              className="fade-down text-md font-semibold mx-auto text-center"
            >
              My Certificate
            </h1>
            <CertificateList />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
