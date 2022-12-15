import React, { useEffect, useRef, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import "./comments.scss";

function Comments({ id }) {
	const count = useRef(localStorage.length);
	// const [comments, setComments] = useState([]);
	const [comments, setComments] = useState({});
	const [comment, setComment] = useState("");

	useEffect(() => {
		let storedComments = JSON.parse(localStorage.getItem(`comments_${id}`));

		if (!storedComments) return;

		setComments((state) => ({...state, ...storedComments}));
	}, []);

	const onChangeComment = (e) => {
		setComment(e.target.value);
		console.log("change");
	};

	const onPostComment = () => {
		if (!comment) return;

		const comId = uuidv4();

		const newComments = {
			...comments,
			[comId]: comment,
		};

		setComments(newComments);
		count.current++;
		localStorage.setItem(`comments_${id}`, JSON.stringify(newComments));
		console.log(Object.values(newComments));
	};

	// const content = comments.map((text, i) => (
	// 	<div key={i} className="comment__container">
	// 		{text}
	// 	</div>
	// ));

	// const storedCom = Object.values(
	// 	JSON.parse(localStorage.getItem(`comments_${id}`))
	// );

	const content = Object.values(comments).map((text, i) => (
		<div key={i} className="comment__container">
			{text}
		</div>
	));

	return (
		<div className="movie__comments">
			<h3>
				<i className="fa-solid fa-comment" />
				<span>{localStorage.length} Comments</span>
			</h3>
			{content}
			<div className="comment__flex">
				<textarea
					value={comment}
					onChange={onChangeComment}
					className="input-box"
				/>
				<button
					className="button button__main button__long"
					onClick={onPostComment}
				>
					<div className="inner">Post comment</div>
				</button>
			</div>
		</div>
	);
}

export default Comments;
