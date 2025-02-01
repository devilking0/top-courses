import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { apiUrl, filterData } from "./data.js";

import Navbar from "./Navbar.jsx";
import Filter from "./Filter.jsx";
import Cards from "./Cards.jsx";
import Spinner from "./Spinner.jsx";

const App = () => {
	const [category, setCategory] = useState("All");

	const tellCategory = (data) => {
		setCategory(data);
		console.log("category ka result",category);
	};

	const [courses, setCourses] = useState([]);
	const [loading, setLoading] = useState(true);

	async function respond() {
		setLoading(true);
		try {
			const response = await fetch(apiUrl);
			const output = await response.json();
			//save this data
			//console.log(output)
			setCourses(output.data);
		} catch (e) {
			console.log(e);
		}
		setLoading(false);
	}
	useEffect(() => {
		respond();
	}, []);

	return (
		<div className='w-full flex flex-col bg-gradient-to-r from-slate-400 via-gray-700 to-neutral-950'>
			<Navbar></Navbar>

			<Filter filterData={filterData} tellCategory={tellCategory}></Filter>

			{loading ? <Spinner></Spinner> : <Cards courses={courses} category={category}></Cards>}
		</div>
	);
};

export default App;
