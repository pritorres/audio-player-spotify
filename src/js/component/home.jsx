import React, { useState, useRef, useEffect } from "react";
import PlayList from "./PlayList.js";
import Footer from "./footer.js";

const Home = () => {
	const baseUrl = "https://assets.breatheco.de/apis/sound";
	const [canciones, setCanciones] = useState([]);
	const [cancionActualIndex, setCancionActualIndex] = useState(null);
	const [cancionActual, setCancionActual] = useState();
	const [active, setACtive] = useState(null);
	const audioRef = useRef(null);
	const [error, setError] = useState("");

	const loadSongs = () => {
		fetch(`${baseUrl}/all`, {
			mode: "cors",
			headers: { "Content-Type": "application/json" }
		})
			.then(response => response.json())
			.then(response => {
				setCanciones(
					response["data/songs.json"].map((elemt, index) => ({
						...elemt,
						id: index
					}))
				);
			});
	};

	const MyFuncion = (cancionActual, indice) => {
		setCancionActual(cancionActual);
		setCancionActualIndex(indice);
		setACtive(true);
	};

	const pauseMusic = () => {
		setACtive(false);
		audioRef.current.pause();
	};

	const playMusic = () => {
		setACtive(true);
		audioRef.current.play();
	};
	const nextMusic = () => {
		const nextIndex = cancionActualIndex + 1;
		if (nextIndex < canciones.length) {
			setCancionActual(canciones[nextIndex]);
			setCancionActualIndex(nextIndex);
		} else if (nextIndex >= canciones.length) {
			setCancionActual(canciones[0]);
			setCancionActualIndex(0);
		}
	};
	const backMusic = () => {
		const prevIndex = cancionActualIndex - 1;
		console.log(prevIndex);
		if (prevIndex > -1) {
			setCancionActual(canciones[prevIndex]);
			setCancionActualIndex(prevIndex);
		} else {
			const ultimoIndex = canciones.length - 1;
			setCancionActual(canciones[ultimoIndex]);
			setCancionActualIndex(ultimoIndex);
		}
	};

	useEffect(() => {
		if (cancionActual) {
			audioRef.current.src = `${baseUrl}/${cancionActual.url}`;
			audioRef.current.play();
			setError("");
		}
	}, [cancionActual]);

	useEffect(() => {
		loadSongs();
		audioRef.current.onerror = e => {
			setError("cancion no encontrada");
		};
	}, []);
	return (
		<>
			<div className="container">
				<PlayList
					canciones={canciones}
					setCancionActual={MyFuncion}
					cancionActual={cancionActual}
				/>
				<Footer
					pauseMusic={pauseMusic}
					playMusic={playMusic}
					setACtive={setACtive}
					active={active}
					nextMusic={nextMusic}
					backMusic={backMusic}
				/>
				{error}

				<audio ref={audioRef} />
			</div>
		</>
	);
};

export default Home;
