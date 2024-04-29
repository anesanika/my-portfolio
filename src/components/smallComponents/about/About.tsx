import { useState } from "react";
import aStyle from "./About.module.css";

const About = () =>{

  const [moreAbout, setMoreAbout] = useState<boolean>(false);
  return (
    <div className="content" >
      <div className={aStyle.about} id="about">
        <h1>Hi, I'm Nika 18 years Old, from Georgia Front-End Developer With ReactJs.</h1>
        <button
        onClick={() => setMoreAbout(!moreAbout)}>
          Read More
        </button>
      </div>
      {moreAbout
      ?
      <div className={aStyle.moreAboutCont}>
        <button onClick={() => setMoreAbout(false)}> X </button>
        <p>I'm an 18-year-old experienced web developer, I learn programming by myslef, I starting with the Python language. After four months, I delved into HTML, CSS, and JavaScript and them I expanded my skills with ReactJs, I can make full Resoinsive website, performance optimization, I've also some experience in back-end development using PHP.</p>
      </div>
      : 
      null
      }
    </div>
  );
}

export default About;