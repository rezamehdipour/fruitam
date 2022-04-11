import React from "react";
import ReactDOM from "react-dom";

// Redux
import store from "./redux/store";
import { Provider } from "react-redux";

// Components
import App from "./App";

// Css
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
