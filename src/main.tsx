import React from "react";
import ReactDOM from "react-dom/client";

import { initializeAppTheme } from "utils/ThemeService";
import { App } from "./App";


initializeAppTheme();


ReactDOM.createRoot(document.getElementById("root")!)
		.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);