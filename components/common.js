/* eslint-disable @next/next/no-img-element */
import React from "react";
import { LinkedIcon, TwitterIcon, YoutubeIcon } from "../svgs";

export const Skill = ({ name }) => {
	return (
		<div className="skill-root">
			<img
				className="skill-arrow"
				src="/icons/Icon_arrow_right.svg"
				alt="bullet point"
			/>
			<span>{name}</span>
		</div>
	);
};

export const ProjectThumbnail = ({ url, description }) => {
	return (
		<div className="relative">
			<img
				className="project-thumbnail corner-radius-1"
				src={url}
				alt={description}
			/>
			<div className="overlay tertiary corner-radius-1" />
		</div>
	);
};

export const SocialIconGroup = () => {
	return (
		<div className="flex gap-1">
			<TwitterIcon />
			<YoutubeIcon />
			<LinkedIcon />
		</div>
	);
};

export default {};
