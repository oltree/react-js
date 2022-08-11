import { useState } from "react";

import styles from "./index.module.scss";

const MousePosition = ({ render }) => {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMouseCoordinates({ x: event.clientX, y: event.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} className={styles.wrapper}>
      {render({ x: mouseCoordinates.x, y: mouseCoordinates.y })}
    </div>
  );
};

export default MousePosition;
