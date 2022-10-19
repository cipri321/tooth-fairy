import React from 'react';

const ResultImageDisplay = (props) => {
	console.log(props)
	return (
		<img src={props.image}/>
		)
}
export default ResultImageDisplay;