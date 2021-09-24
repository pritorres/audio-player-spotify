import React, { useState, useRef, useEffect } from "react";
import PlayList from "./PlayList.js";
import Footer from "./footer.js";

//create your first component
const Home = () => {
	const baseUrl = "https://assets.breatheco.de/apis/sound";
	const [canciones, setCanciones] = useState([]);
	const [cancionActual, setCancionActual] = useState();

	const audioRef = useRef(null);

	const loadSongs = () => {
		fetch(`${baseUrl}/all`, {
			mode: "cors",
			headers: { "Content-Type": "application/json" }
		})
			.then(response => response.json())
			.then(response => {
				setCanciones(response["data/songs.json"]);
			});
	};

	useEffect(() => {
		loadSongs();
	}, []);
	return (
		<>
			<div className="container">
				<PlayList
					canciones={canciones}
					setCancionActual={setCancionActual}
					cancionActual={cancionActual}
				/>
				<Footer back="" play="" next="" />
				{!!cancionActual && <audio ref={audioRef} autoPlay />}
			</div>
		</>
	);
};

export default Home;
