import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
const logo: any =  require("../../assets/logo/logo.png")


const Navbar = () =>{

  const [slideMenu, setSliderMneu] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<number>(0);
  const [scrollVal, setScrollVal] = useState<number>(0);
  const [progresValue, setProgresValue] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() =>{
    const handleScroll = () => {
      const pos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progressScroll = Math.round(pos * 100 / calcHeight);

      setScrollVal(pos);
      setProgresValue(progressScroll);
    };
    window.addEventListener('scroll', handleScroll);


    return() =>{
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() =>{
    window.addEventListener('resize', () =>{
      setWindowWidth(window.innerWidth);
      
    })
  }, [windowWidth]) 
  
  return(
    <nav className={scrollVal >= 200 ? styles.slidedNav : 'navBar'}>
      <div className={styles.logoCont}>
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className={styles.menuBtn}
      style={{background: `conic-gradient(#7344ff ${progresValue}%, #000 ${progresValue}%)`}}>
        <button style={slideMenu ? {zIndex: 101} : {zIndex: 'auto'}}
        onClick={() => setSliderMneu(!slideMenu)}>
          <span 
          style={slideMenu ? {rotate: '130deg', left: '21px', top: '32px'} : {rotate: '0deg'}} />
          <span
          style={slideMenu ? {rotate: '-130deg', right: '13px', top: '26px'} : {rotate: '0deg'}} />
        </button>
      </div>
      {
        windowWidth > 1300
        ?
        
        <div
        onMouseMove={(e) => setMousePos(e.clientX)}
        className={styles.slideMenu}
        style={slideMenu ? {top: 0} : {top: '-100%'}}
        >
          <div className={styles.sliderCont} >
            {
              slideMenu ? 
            <div
            className={styles.linkCont}
            style={{transform: `translateX(${500 - mousePos / 1.2}px)`}}
              >
              <a onClick={() => setSliderMneu(false)} href="#home">Home</a>
              <a onClick={() => setSliderMneu(false)} href="#about">About</a>
              <a onClick={() => setSliderMneu(false)} href="#portfolio">Portfolio</a>
              <a onClick={() => setSliderMneu(false)} href="#contact">Contact</a>
            </div>
            : 
            null
            }
          </div>
        </div>
        :
         <div className={styles.resNavMenu}
         style={slideMenu ? {top: '0px'} : {top: '-100%'}}
         >
          {
            slideMenu
             ?
             <>
              <a onClick={() => setSliderMneu(false)} href="#home">Home</a>
              <a onClick={() => setSliderMneu(false)} href="#about">About</a>
              <a onClick={() => setSliderMneu(false)} href="#portfolio">Portfolio</a>
              <a onClick={() => setSliderMneu(false)} href="#contact">Contact</a>
             </>
            :
            null
          }
          
         </div>
      }
    </nav>
  );
}

export default Navbar;