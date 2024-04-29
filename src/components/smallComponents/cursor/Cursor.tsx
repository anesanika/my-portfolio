import "./Cursor.css";
import { useEffect, useState } from "react";
const Cursor = () => {
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);
  const [targetX, setTargetX] = useState<number>(0);
  const [targetY, setTargetY] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetX(e.clientX - 25);
      setTargetY(e.clientY - 25);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateCursor = () => {
      const ease = 0.2;
      const dx = targetX - mouseX;
      const dy = targetY - mouseY;
      const vx = dx * ease;
      const vy = dy * ease;
      setMouseX(mouseX + vx);
      setMouseY(mouseY + vy);
    };

    const frame = requestAnimationFrame(updateCursor);

    return () => cancelAnimationFrame(frame);
  }, [mouseX, mouseY, targetX, targetY]);

  return <div className="Cursor" style={{ left: mouseX, top: mouseY }} />;
};

export default Cursor;