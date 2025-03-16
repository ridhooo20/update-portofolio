import React, { useEffect, useRef } from "react";
import "./index.css";

const CertificateCard = ({ title, provider, image }) => {
  const sRef = useRef(null);

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

    if (sRef.current) observer.observe(sRef.current);

    return () => {
      if (sRef.current) observer.unobserve(sRef.current);
    };
  }, []);

  return (
    <div className="transition-transform duration-300 hover:scale-105">
      <div
        ref={sRef}
        className="bg-white fade-down rounded-lg shadow-md overflow-hidden"
      >
        <img src={image} alt={title} className="w-full lg:h-72 h-56" />
        <div className="p-4">
          <h3 className="text-lg font-bold text-cyan-600">{title}</h3>
          <p className="text-gray-600">{provider}</p>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
