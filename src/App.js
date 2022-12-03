// Core
import React from "react";
import { Route, Routes } from "react-router-dom";
// Pages
import QuotesListPage from "./components/pages/QuotesListPage";
import RandomQuotePage from "./components/pages/RandomQuotePage";
// Style 
import "./assets/style/style.css";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<QuotesListPage />} />
			<Route path="/random-quote" element={<RandomQuotePage />} />
		</Routes>
	);
};

export default App;