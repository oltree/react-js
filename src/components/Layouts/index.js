import Header from "../Header";

import styles from "./index.module.scss";

const Layouts = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
    </div>
  );
};

export default Layouts;
