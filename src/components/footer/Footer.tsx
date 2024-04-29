import fStyle from './Footer.module.css';
import "../smallComponents/cursor/Cursor.css";


const Footer = () => {
  return(
    <footer>
      <div className="content">
        <div className={fStyle.footerCont}>
          <div>
            <a href="https://www.facebook.com/nika.anesiani.1"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/anesiani-nika-a282342a0/"><i className="fa-brands fa-linkedin"></i></a>
            <a href="NikaAnesiani.pdf" download="NikaAnesiani.pdf"><h2>CV</h2>download</a>
          </div>
          <div>
            <p>@2024 Created By Nika Anesiani</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;