import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

import { isAuthSelector } from "../pages/SignIn/selectors";
import { ROUTE_NAMES } from "./routeNames";

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(isAuthSelector);

  return isAuth ? <Outlet /> : <Navigate to={ROUTE_NAMES.SIGN_IN} />;
};

export default PrivateRoute;
