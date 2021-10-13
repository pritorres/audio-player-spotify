import React from "react";
import PropTypes from "prop-types";

const PlayList = props => {
	const { canciones, setCancionActual, cancionActual } = props;

	return (
		<div>
			<ol>
				{canciones.map((cancion, index) => (
					<li
						className={
							cancionActual?.id == cancion.id ? "active" : ""
						}
						key={index}
						onClick={() => {
							setCancionActual(cancion, index);
						}}>
						{cancion.name}
					</li>
				))}
			</ol>
		</div>
	);
};

PlayList.propTypes = {
	canciones: PropTypes.array,
	setCancionActual: PropTypes.func,
	cancionActual: PropTypes.object
};

export default PlayList;
