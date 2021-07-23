import React from "react";
import "./Accordion.css";
export default function Accordion({setAccordionOpened,accordionOpened, title, body,}) 
{
  const isOpened = title === accordionOpened;

  return (
    <div className="accordion">
      <hr ></hr>
      <div
        onClick={() => setAccordionOpened(title)}
        className="accordion-header  d-flex flex-row"
      >
        <p style={{fontSize:"16px",color:"#262626"}}>{title}</p>
        <div className="accordion-indicator ml-auto">{isOpened ? <i class="fal fa-minus"></i> : <i className="fal fa-plus"></i>}</div>
       </div>

      {isOpened && <div className="accordion-body d-flex flex-row">
        <div className="accordion-video-card">
          <img src="./images/accimg1.png" alt="error"/>
          <p>How does Meta-tagging work?</p>
        </div>
        <div className="accordion-video-card">
          <img src="./images/accimg2.png" alt="error"/>
          <p>How does Meta-tagging work?</p>
        </div>
        <div className="accordion-video-card">
          <img src="./images/accimg3.png" alt="error"/>
          <p>How does Meta-tagging work?</p>
        </div>
        <div className="accordion-video-card">
          <img src="./images/accimg4.png" alt="error"/>
          <p>How does Meta-tagging work?</p>
        </div>
        </div>}
    </div>
  );
}
