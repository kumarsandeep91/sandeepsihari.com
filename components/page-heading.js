import React from "react";

const PageHeading = ({ heading, center }) => {
	return center ? (
		<div className="page-heading-container grid-columns-3">
			<hr />
			<h2>{heading}</h2>
			<hr />
		</div>
	) : (
		<div className="page-heading-container">
			<h2>{heading}</h2>
			<hr />
		</div>
	);
};

export default PageHeading;
