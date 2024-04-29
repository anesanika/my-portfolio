import { useEffect, useRef, useState } from "react";
import cStyle from "./Card.module.css";

const Card = (props: any) => {
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);
  const cardBox = useRef<HTMLDivElement>(null);
  const [scrlAnimation, setScrlAnimation] = useState<boolean>(false);

  const setMousePos = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
    setMouseY(e.clientY - rect.top);
  };

  useEffect(() =>{
    const scrollAnim = () =>{
      if(cardBox.current){
        const cardProps = cardBox.current.getBoundingClientRect();

        if(window.innerHeight >= cardProps.top + 50){
          setScrlAnimation(true);
        }
        else{
          setScrlAnimation(false);
        }
      }
    };
    window.addEventListener('scroll', scrollAnim);

    return() =>{
      window.removeEventListener('scroll', scrollAnim);
    }
  }, [])


  return (
    <div
    className={`${cStyle.cardBg} ${scrlAnimation ? cStyle.scrollAnimation : null}`}
    onMouseMove={setMousePos}
    ref={cardBox}
    >
      <span
        className={cStyle.lightMouse}
        style={{ top: `${mouseY - 70}px`, left: `${mouseX - 70}px` }}
      />
      <div className={cStyle.cardCont}>
        <a href={props.link} target="_blank">
          <img src={props.image} alt="portfImage" />
        </a>
      </div>
      <a href={props.link} target="_blank">Preview →</a>
    </div>
  );
}

export default Card;
