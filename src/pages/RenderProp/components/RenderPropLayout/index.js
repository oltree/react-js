import MousePosition from "../../../../components/ShowMousePosition";

import CatImage from "../../../../static/images/cat.jpg";

import styles from "./index.module.scss";

const RenderPropLayout = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Render Prop</h1>
      <MousePosition
        render={({ x, y }) => (
          <div>
            <div style={{ textAlign: "center" }}>
              X: {x}; Y: {y}
            </div>
            <img
              height={80}
              src={CatImage}
              style={{
                position: "absolute",
                top: y,
                left: x,
              }}
              alt="cat"
            />
          </div>
        )}
      />
    </div>
  );
};

export default RenderPropLayout;

/* (
          <img
            height={100}
            src={CatImage}
            style={{
              position: "absolute",
              top: y,
              left: x,
            }}
            alt="cat"
          />
        ) */
