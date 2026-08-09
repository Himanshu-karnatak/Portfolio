import { useEffect, useState } from "react";

function CursorEffects() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const moveCursor = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleClick = (event) => {
      const id = Date.now();

      setClicks((previous) => [
        ...previous,
        {
          id,
          x: event.clientX,
          y: event.clientY,
        },
      ]);

      setTimeout(() => {
        setClicks((previous) =>
          previous.filter(
            (click) => click.id !== id
          )
        );
      }, 700);
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    window.addEventListener(
      "click",
      handleClick
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      window.removeEventListener(
        "click",
        handleClick
      );
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: position.x,
          top: position.y,
        }}
      />

      {clicks.map((click) => (
        <div
          key={click.id}
          className="click-burst"
          style={{
            left: click.x,
            top: click.y,
          }}
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      ))}
    </>
  );
}

export default CursorEffects;