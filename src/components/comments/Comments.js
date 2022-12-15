import React, { useEffect, useRef, useState } from "react";
import "./comments.scss";

import "./comments.scss";

function Comments({ id }) {
	const count = useRef(localStorage.length);
	const [comments, setComments] = useState([]);
	const [comment, setComment] = useState("");

	useEffect(() => {
		let stored_comments = localStorage.getItem(`comments_${id}`);

		if (!stored_comments) return;

		setComments(stored_comments.split(","));
	}, []);

	const onChangeComment = (e) => {
		setComment(e.target.value);
	};

	const onPostComment = () => {
		if (!comment) return;

		const newComments = [...comments, comment];

		setComments(newComments);
		count.current++;
		localStorage.setItem(`comments_${id}`, newComments);
	};

	const content = comments.map((text, i) => (
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
