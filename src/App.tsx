import { HashRouter, Route, Routes } from "react-router-dom";

import { routes } from "@/routes";
import { AppShell } from "@/views/AppShell";

import "@/Themes/palette.css";
import "@/App.css";


export function App()
{
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<AppShell />} >
				{
					routes.map(({ path, component: Component }) =>
						<Route key={path} path={path} element={<Component />} />)
				}
				</Route>
			</Routes>
		</HashRouter>
	);
}