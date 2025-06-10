import React from "react";
import "./MyCertificate.css";
import Mywork_Data from "../../assets/mywork_data";

const MyCertificate = () => {
  return (
    <div id="certificate" className="mycertificate">
      <div className="mycertificate-title">
        <h1 style={{ cursor: "default" }}>My Certificates</h1>
      </div>
      <div className="mycertificate-container">
        {Mywork_Data.map((work, index) => (
          <a
            key={index}
            href={work.w_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={work.w_img}
              alt={work.w_name || "Certificate"}
              style={{ cursor: "pointer" }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MyCertificate;
