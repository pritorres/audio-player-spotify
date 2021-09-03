import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
	return (
		<footer className="bg-dark text-center text-lg-start text-light">
			<button>{props.back}</button>
			<button>{props.play}</button>
			<button>{props.next}</button>
		</footer>
	);
};

Footer.propTypes = {
	back: PropTypes.string,
	play: PropTypes.string,
	next: PropTypes.string
};

export default Footer;
