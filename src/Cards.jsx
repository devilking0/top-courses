import React from "react";
import Card from "./Card.jsx";

const Cards = ({ courses, category }) => {

	let allCourses = [];


	const getCourses = () => {
		Object.values(courses).forEach((courseCategory) => {
			courseCategory.forEach((course) => {
				allCourses.push(course);
			});
		});
		
	};

	if(category==="All")
	{
		getCourses();
	}
	else{
		console.log("category in else", category)
		allCourses = courses[category];
		
	}

	return (
		<div className="w-full flex justify-center">
			<div className='w-11/12 flex flex-col gap-3 p-3'>
				{allCourses.map((course) => (
					<Card key={course.id} course={course} />
				))}
			</div>
		</div>
	);
};
export default Cards;
