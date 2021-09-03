import React from "react";
import PropTypes from "prop-types";

const Navbar = props => {
	return (
		<div classNameName="bg-dark text-center">
			<div className="fixed-top">
				<div className="collapse" id="navbarToggleExternalContent">
					<div className="bg-dark p-4">
						<h5 className="text-white h4">Collapsed content</h5>
						<span className="text-muted">
							Toggleable via the navbar brand.
						</span>
					</div>
				</div>
				<nav className="navbar navbar-dark bg-dark"></nav>
			</div>
		</div>
	);
};

export default Navbar;
