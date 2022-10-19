import React from 'react';
import { useFilePicker } from 'use-file-picker';
import { Box, Button, Typography} from '@mui/material';
const ImageSelector = (props) => {
	return (
		<Box>
			<Typography>
			The x-ray, please:
			</Typography>
			<form>
		      <input
	          type="file"
	          onChange={(e) => props.setImage(e.target.files[0])}
	        	/>
        	</form>
    	</Box>
		);
}
export default ImageSelector;