import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
	const { pauseMusic, playMusic, nextMusic, active, backMusic } = props;

	return (
		<footer className="footer text-center text-lg-start text-light">
			<span>
				<i
					className="fas fa-chevron-circle-left m-1"
					onClick={backMusic}></i>
			</span>

			{active && (
				<span>
					<i
						className="fas fa-pause-circle m-1"
						onClick={pauseMusic}></i>
				</span>
			)}
			{!active && (
				<span>
					<i
						className="play fas fa-play-circle m-1"
						onClick={playMusic}></i>
				</span>
			)}
			<span>
				<i
					className="fas fa-chevron-circle-right m-1"
					onClick={nextMusic}></i>
			</span>
		</footer>
	);
};

Footer.propTypes = {
	pauseMusic: PropTypes.func,
	playMusic: PropTypes.func,
	nextMusic: PropTypes.func,
	active: PropTypes.bool,
	backMusic: PropTypes.func
};

export default Footer;
