import hStyles from "./Header.module.css";

const Header = () =>{ 
  return(
    <header className={hStyles.header} id="home">
      <div className={hStyles.headerText}>
        <div className="content">
          <div className={hStyles.textCont}>
            <h1>Front-End Developer</h1>
            <p>Nika Anesiani</p>
          </div>
        </div>
          <div className={hStyles.scrollText}>
            <p>➯</p>
          </div>
      </div>
    </header>
  );
}

export default Header;