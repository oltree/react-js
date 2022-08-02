import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";
import cloneDeep from "lodash/cloneDeep";

import ListsLayout from "../components/ListsLayout";

const ListsContainer = () => {
  const [users, setUsers] = useState([]);

  const handleCreate = useCallback(() => {
    setUsers((state) => {
      const newUser = {
        name: `User-${uuid()}`,
        age: 34,
        id: uuid(),
      };

      return [...state, newUser];
    });
  }, []);

  const handleDelete = useCallback((id) => {
    setUsers((state) => {
      const usersCopy = cloneDeep(state);

      const itemIndexToRemove = usersCopy.findIndex((user) => user.id === id);

      usersCopy.splice(itemIndexToRemove, 1);

      return usersCopy;
    });
  }, []);

  return (
    <ListsLayout
      users={users}
      onCreate={handleCreate}
      onDelete={handleDelete}
    />
  );
};

export default ListsContainer;
