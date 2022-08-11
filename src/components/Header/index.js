import { Link } from "react-router-dom";
import capitalize from "lodash/capitalize";
import startCase from "lodash/startCase";

import { ROUTE_NAMES } from "../../router/routeNames";

import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.menu}>
      {Object.entries(ROUTE_NAMES).map(([pageName, path]) => (
        <Link className={styles.menuItem} key={path} to={path}>
          {startCase(capitalize(pageName))}
        </Link>
      ))}
    </div>
  );
};

export default Header;
