import { HashRouter, Route, Routes } from "react-router-dom";

import { AppShell } from "views/AppShell";
import { HomePage } from "views/pages/HomePage";
import { ShopPage } from "views/pages/ShopPage";
import { ContactPage } from "views/pages/ContactPage";
import { SignInPage } from "views/pages/SignInPage";
import { NotFoundPage } from "views/pages/PageNotFoundPage";

import "./Themes/palette.css";
import "./App.css";


export function App()
{
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<AppShell />} >
					<Route index          element={<HomePage />} />
					<Route path="shop"    element={<ShopPage />} />
					<Route path="contact" element={<ContactPage />} />
					<Route path="signIn"  element={<SignInPage />} />
					<Route path="*"       element={<NotFoundPage />} />
				</Route>
			</Routes>
		</HashRouter>
	);
}