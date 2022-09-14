import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { store } from "./store/configureStore";
import Layouts from "./components/Layouts";
import Router from "./router/Router";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

const persistor = persistStore(store);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layouts>
          <Router />
        </Layouts>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
