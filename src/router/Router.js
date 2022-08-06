import { Routes, Route } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";

import Home from "../pages/Home";
import ClassCounterContainer from "../pages/ClassCounter/container/ClassCounterContainer";
import FunctionalCounterContainer from "../pages/FunctionalCounter/container/FunctionalCounterContainer";
import ListsContainer from "../pages/Lists/container/ListsContainer";
import CountersManagerContainer from "../pages/CountersManager/container/CountersManagerContainer";
import FormsContainer from "../pages/Forms/container/FormsContainer";
import ReduxCountersContainer from "../pages/ReduxCounters/container/ReduxCountersContainer";
import TodoListContainer from "../pages/TodoList/container/TodoListContainer";
import DataFetchingContainer from "../pages/DataFetching/container/DataFetchingContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<Home />} />
      <Route
        path={ROUTE_NAMES.CLASS_COUNTER}
        element={<ClassCounterContainer />}
      />
      <Route
        path={ROUTE_NAMES.FUCNTIONAL_COUNTER}
        element={<FunctionalCounterContainer />}
      />
      <Route path={ROUTE_NAMES.LISTS} element={<ListsContainer />} />
      <Route
        path={ROUTE_NAMES.COUNTERS_MANAGER}
        element={<CountersManagerContainer />}
      />
      <Route path={ROUTE_NAMES.FORMS} element={<FormsContainer />} />
      <Route
        path={ROUTE_NAMES.REDUX_COUNTERS}
        element={<ReduxCountersContainer />}
      />
      <Route path={ROUTE_NAMES.TODO_LIST} element={<TodoListContainer />} />
      <Route
        path={ROUTE_NAMES.DATA_FETCHING}
        element={<DataFetchingContainer />}
      />
    </Routes>
  );
};

export default Router;
