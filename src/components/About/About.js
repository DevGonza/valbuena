import React from "react";
import imagen from "../../img/pers1.png";
import '../About/About.css'

const About = () => {
  return (
    <div className="d-flex justify-content-end main mt-5">
      <div className=" imagen ms-5">
        <img src={imagen} width="600" height="818" alt="hector"/>
      </div>
      <div className="container info text-center text-white text-uppercase fs-3 d-flex align-items-center w-50">
        <p><spam className="text-warning fs-1">Con este texto iniciamos la info</spam><br></br>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
      </div>
    </div>
  );
};

export default About;
