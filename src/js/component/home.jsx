import React, { useState } from "react";
import PlayList from "./PlayList.js";
import Footer from "./footer.js";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<>
			<div className="container-fluid">
				<PlayList />
				<Footer back="retroceder" play="play" next="next" />
			</div>
		</>
	);
};

export default Home;
