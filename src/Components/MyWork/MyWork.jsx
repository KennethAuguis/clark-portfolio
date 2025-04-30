import React from "react";
import "./MyWork.css";
import Mywork_Data from "../../assets/mywork_data";

const MyWork = () => {
    return (
        <div id='work' className="mywork">
            <div className="mywork-title">
            <h1>My Latest Work</h1>
            </div>
            <div className="mywork-container">
            {Mywork_Data.map((work,index) => {
                return <img key={index} src={work.w_img} alt="" />
            })}
            </div>
            <div className="mywork-showmore">
                
            </div>
        </div>
    );
}

export default MyWork;