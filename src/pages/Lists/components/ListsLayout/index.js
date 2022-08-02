import PropTypes from "prop-types";

import User from "../../../../components/User";

import styles from "./index.module.scss";

const ListsLayout = ({ users, onCreate, onDelete }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Lists</h1>
      <button onClick={onCreate} className={styles.button}>
        Create User
      </button>
      <div className={styles.item}>
        {users.map((user) => (
          <User
            onCreate={onCreate}
            onDelete={onDelete}
            id={user.id}
            key={user.id}
            name={user.name}
            age={user.age}
          />
        ))}
      </div>
    </div>
  );
};

ListsLayout.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number,
      id: PropTypes.string,
    })
  ),
};

export default ListsLayout;
