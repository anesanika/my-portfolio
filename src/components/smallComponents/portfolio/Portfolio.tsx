import pStyle from "./Portfolio.module.css";
import Card from "../card/Card";

const image1: any = require("../../../assets/project/project1.png");
const image2: any = require("../../../assets/project/project2.png");
const image3: any = require("../../../assets/project/project3.png");
const image4: any = require("../../../assets/project/project4.png");
const image5: any = require("../../../assets/project/project5.png");
const image6: any = require("../../../assets/project/project6.png");

const Portfolio = () =>{
  return(
    <div className={pStyle.portfolioCont} id="portfolio">
      <div className="content">
        <div className={pStyle.pHeader}>
          <h1>Projects</h1>
        </div>
        <div className={pStyle.projectCont} >
          <Card image={image1} link="https://yoloooo.netlify.app/" />
          <Card image={image2} link="https://zoommercopy.netlify.app/" />
          <Card image={image3} link="https://fsweetn.netlify.app" />
          <Card image={image4} link="https://anesanika.github.io/KRIA_APP/" />
          <Card image={image5} link="https://becleans.netlify.app/" />
          <Card image={image6} link="https://evacuators.netlify.app/" />
        </div>
      </div>
    </div>
  );
}
export default Portfolio;