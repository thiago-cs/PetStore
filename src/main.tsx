import React from "react";
import ReactDOM from "react-dom/client";

import { initializeServer } from "./api/server";
import { initializeAppTheme } from "@/utils/ThemeService";
import { App } from "./App";


initializeServer();
initializeAppTheme();


ReactDOM.createRoot(document.getElementById("root")!)
		.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);