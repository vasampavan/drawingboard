import React, { useRef, useEffect, useState } from "react";

import {
  StyledCanvas,
  StyledDiv,
  GlobalStyle,
} from "./Styles.jsx";
const Canvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);
  const [color, setColor] = useState("white");
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    setContext(ctx);
  }, []);

  const startDrawing = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setIsDrawing(true);
    context.beginPath();
    context.moveTo(offsetX, offsetY);
  };

  const draw = (event) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = event.nativeEvent;
    context.lineTo(offsetX, offsetY);
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    context.stroke();
  };

  const clearCanvas = () => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    setDrawingHistory([]);
    setRedoHistory([]);
  };
  const erase = () => {
    setColor("black"); 
  };



 

  return (
    <>
      <GlobalStyle />
      <StyledDiv>
        <StyledCanvas
          ref={canvasRef}
          width={1000}
          height={700}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          title='Start drawing'
        />
      </StyledDiv>
    </>
  );
};

export default Canvas;
