import ReactDOM from "react-dom/client";
import App from "../src/components/app/App";
import { store } from "./services/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
