import React from 'react';
import { Box, Typography } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const OPTIONS = ['Teeth', 'Decay', 'Restorations'];

const ProcessingOptionsSelector = (props) => {
	return (
		<Box>
			<Typography>
				What do you want to be detected?
			</Typography>
			<FormGroup>
			{
				OPTIONS.map((item, idx) => 
					<FormControlLabel control={<Checkbox onChange={(evt) => {
						props.setOptions((prevOptions) => {
							prevOptions[item] = evt.target.checked;
							return prevOptions;
						});
					}} />} label={item} />
					)
			}
	    	</FormGroup>
    	</Box>
		)
}
export default ProcessingOptionsSelector;