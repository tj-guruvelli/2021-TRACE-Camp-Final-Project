import React from 'react'

function Result({ result, openPopup }) {
	return (
		<div className="image-container result" onClick={() => openPopup(result.imdbID)}>
			<img alt="Movie Poster" src={result.Poster} />
			<h3>{result.Title}</h3>
		</div>
	)
}

export default Result
