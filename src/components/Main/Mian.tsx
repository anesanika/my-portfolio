import mStyle from "./Mian.module.css";
import About from "../smallComponents/about/About";
import Portfolio from "../smallComponents/portfolio/Portfolio";
import Contact from "../smallComponents/contact/Contact";

const Main = () =>{
  return(
    <main className={mStyle.main}>
      <section>
        <About />
      </section>
      <section>
        <Portfolio />
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
}

export default Main;