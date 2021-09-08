import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const PlayList = () => {
	const baseUrl = "https://assets.breatheco.de/apis/sound";
	const [canciones, setCanciones] = useState([]);
	const cancionActual = useRef("");
	const setCancionActual = url => {
		cancionActual.current.src = `${baseUrl}/${url}`;
	};

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
		<div>
			<ol>
				{canciones.map((cancion, index) => (
					<li
						key={index}
						onClick={() => {
							setCancionActual(cancion.url);
						}}>
						{cancion.name}
					</li>
				))}
			</ol>
			<audio ref={cancionActual} autoPlay />
		</div>
	);
};

PlayList.prototype = {};
export default PlayList;
