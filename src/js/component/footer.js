import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
	return (
		<footer className="footer text-center text-lg-start text-light">
			<spam>
				<i className="fas fa-chevron-circle-left m-1">{props.back}</i>
			</spam>
			<spam>
				<i className="fas fa-play-circle m-1">{props.play}</i>
			</spam>
			<spam>
				<i className="fas fa-chevron-circle-right m-1">{props.next}</i>
			</spam>
		</footer>
	);
};

Footer.propTypes = {
	back: PropTypes.string,
	play: PropTypes.string,
	next: PropTypes.string
};

export default Footer;
