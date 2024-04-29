import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './pages/home/Home';
import Cursor from './components/smallComponents/cursor/Cursor';

const lenis = new Lenis();

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => { 
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    lenis.on('scroll', ScrollTrigger.update);
    return () => {
      lenis.off('scroll', ScrollTrigger.update);
    };   
  }, []);

  useEffect(() =>{
    window.addEventListener('resize', () =>{
      setWindowWidth(window.innerWidth);
    })
  }, [windowWidth])
  return (
    <>
      <Home />
    {
      windowWidth > 1200
       ? 
       <Cursor />
       :
       null
    }
    </>
  );
}

export default App;
