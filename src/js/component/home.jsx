import React from "react";
import Canciones from "./Canciones.js";
import Footer from "./footer.js";
import Navbar from "./Navbar.js";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<>
			<div classNameName="container-fluid">
				<Navbar />
				<Canciones />
				<Footer back="retroceder" play="play" next="next" />
			</div>
		</>
	);
};

export default Home;
