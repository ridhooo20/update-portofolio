import React from "react";
import CertificateCard from "../CertificateCard";
import image1 from "../Certificate/SIBERMUDA.png";
import image2 from "../Certificate/MERN.png";
import image3 from "../Certificate/CYBERACADEMY.png";

const certificates = [
  {
    title: "Basic Web Security Pentester & Hacking ",
    provider: "SIBERMUDA IDN",
    image: image1,
  },
  {
    title: "MERN Stack Course",
    provider: "WPU COURSE",
    image: image2,
  },
  {
    title: "Web Penetration Testing Course",
    provider: "CYBER ACADEMY",
    image: image3,
  }
];

const CertificateList = () => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {certificates.map((cert, index) => (
        <CertificateCard
          key={index}
          title={cert.title}
          provider={cert.provider}
          image={cert.image}
        />
      ))}
    </div>
  );
};

export default CertificateList;
