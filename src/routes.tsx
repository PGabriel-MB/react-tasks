import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Auth } from "./pages/auth"

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Auth />} path="/" />
			</Routes>
		</BrowserRouter>
	);
}
