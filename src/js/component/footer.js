import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
	const { back, play, next } = props;

	return (
		<footer className="footer text-center text-lg-start text-light">
			<span>
				<i
					className="fas fa-chevron-circle-left m-1"
					onClick={() => {
						back;
					}}></i>
			</span>
			<span>
				<i
					className="play fas fa-play-circle m-1"
					onClick={() => {
						play;
					}}></i>
			</span>
			<span>
				<i
					className="fas fa-chevron-circle-right m-1"
					onClick={() => {
						next;
					}}></i>
			</span>
		</footer>
	);
};

Footer.propTypes = {
	back: PropTypes.string,
	play: PropTypes.string,
	next: PropTypes.string
};

export default Footer;
