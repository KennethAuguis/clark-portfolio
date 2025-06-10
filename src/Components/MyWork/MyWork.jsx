import React from "react";
import "./MyWork.css";
import Mywork_Data from "../../assets/mywork_data";

const MyWork = () => {
    return (
        <div id='work' className="mywork">
            <div className="mywork-title">
            <h1 style={{ cursor: 'default' }}>My Certificates</h1>
            </div>
            <div className="mywork-container">
            {Mywork_Data.map((work, index) => {
                return (
      <a
        key={index}
        href={work.w_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={work.w_img}
          alt={work.w_name}
          style={{ cursor: 'pointer' }}
        />
      </a>
    );
  })}
            </div>
            <div className="mywork-showmore">
                
            </div>
        </div>
    );
}

export default MyWork;