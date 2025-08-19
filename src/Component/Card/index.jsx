import React, { useEffect, useRef } from "react";
import "./card.css";

const Card = ({ image, title, description, content, buttonLabel }) => {
  const div1Ref = useRef(null);

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

    if (div1Ref.current) observer.observe(div1Ref.current);

    return () => {
      if (div1Ref.current) observer.unobserve(div1Ref.current);
    };
  }, []);

  return (
    <div
      ref={div1Ref}
      className="fade-down max-w-sm h-[25rem] lg:mt-4 mt-8 mx-auto rounded-lg shadow-lg shadow-sky-300 bg-gray-100 flex flex-col justify-between"
    >
      {/* Gambar */}
      {image && (
        <img src={image} alt={title} className="w-full h-48 rounded-t-lg" />
      )}

      {/* Header + Konten */}
      <div className="p-4 flex-grow">
        <h2 className="text-xl font-bold text-cyan-700">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-black mt-2">{content}</p>
      </div>
      
    </div>
  );
};

export default Card;
