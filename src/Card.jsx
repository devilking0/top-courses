import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";

const Card = (props) => {
	const [ visible, setVisible ] = useState(false);

	const handleLike = () => {
		setVisible(false)
    toast.error("Not Good")
	};

	const handleDislike = () => {
		setVisible(true)
    toast.success("Liked")
	};

	let course = props.course;

	return (
		<div className='border-[2px] rounded-md border-slate-700 p-3'>
			<div>
				<img className="w-[35rem] h-[20rem] rounded-md" src={course.image.url}></img>

				<div>
					{visible ? (
						<button onClick={handleLike}>
							<FcLike fontSize="1.75rem" />
						</button>
					) : (
						<button
							onClick={handleDislike}
						>
							<FcLikePlaceholder fontSize="1.75rem" />
						</button>
					)}
				</div>
				<div className='bg-gradient-to-r from-slate-100  to-slate-50 bg-clip-text text-transparent'>
					<p className='text-2xl font-semibold'>{course.title}</p>
					<p>{course.description}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
