import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper'
import mapping from './ClusterMap';
import jobs from './jobConst';

const jobKeys = Object.keys(jobs);
const mappingKeys = Object.keys(mapping);

function JobSearch({onOptionChange }) {
    const [selectedOption, setSelectedOption] = React.useState(null);

    const handleOptionChange = (event, newValue) => {
        onOptionChange(newValue); // Call the function to update selected option
    };

  return (
    <div className="search_container">
      <Typography style={{ color: '#0077B5', fontSize: '40px', display: 'flex', alignItems: 'center', fontWeight:'bold',
                          justifyContent:'center'}}>
        Search Jobs
      </Typography>
      <Autocomplete
        className="search_container-input"
        sx={{ width: 380}}
        options={mappingKeys} // Pass the job keys as options
        // autoHighlight
        // variant="bordered"
        placeholder="Type to search..."
        // getOptionLabel={(option) => option.label}
        onChange={handleOptionChange} // Handle option change
        renderInput={(params) => (
          <TextField
            {...params}
            label={<SearchIcon />}
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
            sx={{
              fieldset: {
                border: "2px solid #0077B5",
                borderRadius: "25px",
                boxShadow: "rgba(0, 0, 0, 0.7) 0px 5px 15px"
              }
            }}
          />
        )}
      />
      {selectedOption && ( // Display selected option if available
        <Typography>
          'sdfmdskldfsmf'
          {selectedOption}
          {mapping[selectedOption].cluster}
        </Typography>
      )}
    </div>
  );
}

export default JobSearch;


