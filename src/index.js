import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/configureStore";
import Layouts from "./components/Layouts";
import Router from "./router/Router";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Layouts>
        <Router />
      </Layouts>
    </Provider>
  </BrowserRouter>
);
