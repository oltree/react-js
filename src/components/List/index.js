import styles from "./index.module.scss";

const List = ({ render, dataToRender }) => {
  return <div className={styles.item}>{dataToRender.map(render)}</div>;
};

export default List;
