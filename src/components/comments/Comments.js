import React, { useEffect, useRef, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import "./comments.scss";

function Comments({ id }) {
	const [comments, setComments] = useState({});
	const [comment, setComment] = useState("");
	const count = useRef(localStorage.length);

	useEffect(() => {
		let storedComments = JSON.parse(localStorage.getItem(`comments_${id}`));

		if (!storedComments) return;

		setComments((state) => ({ ...state, ...storedComments }));
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

		count.current++;
		setComments(newComments);
		localStorage.setItem(`comments_${id}`, JSON.stringify(newComments));
	};

	let content = [];

	const onDelete = (comId) => {
		const newComments = Object.assign({}, comments);

		delete newComments[comId];

		setComments(newComments);
		localStorage.setItem(`comments_${id}`, JSON.stringify(newComments));
	};

	content = Object.keys(comments).map((id, i) => (
		<div key={id} className="comment__container">
			<p className="comment__text">{comments[id]}</p>
			<i onClick={() => onDelete(id)} className="fa-solid fa-trash"></i>
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
