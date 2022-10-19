import React from 'react';
import ImageSelector from './ImageSelector';
import ProcessingOptionsSelector from './ProcessingOptionsSelector';
import ResultImageDisplay from './ResultImageDisplay';


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';

const Feed = () => {
	const [image, setImage] = React.useState();
	const [options, setOptions] = React.useState({});
	const [resultImageURL, setResultImageURL] = React.useState();

	const uploadImage = () => {
		const formData = new FormData();

		formData.append('image', image);

	    axios
	    .post('http://127.0.0.1:8000/dental-xray/', formData)
	    .then((res) => {
	      alert("File Upload success");
	      setResultImageURL('http://127.0.0.1:8000'+res.data)
	    })
	    .catch((err) => alert(err));
	    
	}
	return (
		<Stack spacing={3}>
			<ImageSelector image={image} setImage={setImage}/>
			<ProcessingOptionsSelector options={options} setOptions={setOptions}/>
			<Button onClick={uploadImage}>Upload</Button>
			<ResultImageDisplay image={resultImageURL} />
		</Stack>
		);
}

export default Feed;