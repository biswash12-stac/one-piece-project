import React from "react";
import "./Programs.css";
import Program1 from "../../assets/hone.jpg";
import Program2 from "../../assets/roger.jpg";
import Program3 from "../../assets/oda1.jpg";


const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={Program1} alt="Program 1" />
        <div className="caption">
          <h4>Main character</h4>
          <p>Monkey D luffy</p>
        </div>
      </div>
      <div className="program">
        <img src={Program2} alt="Program 2" />
        <div className="caption">
          <h4>First King of the piarate</h4>
          <p>Gold D Roger</p>
        </div>
      </div>
      <div className="program">
        <img src={Program3} alt="" />
        <div className="caption">
          <h4>Author</h4>
          <p>Eiiichiro Oda</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
