import React from 'react';
import { Typography } from '@mui/material';
import Grow from '@mui/material/Grow';
import Histogram from './Histogram';
import jobs from './jobConst';
import mapping from './ClusterMap';

function Description({ selectedOption}) {
    return (
        <div className="description">
            {selectedOption && (
                  <Grow
              in={selectedOption}
              style={{ transformOrigin: '0 0 0' , color: '#0077B5'}}
              {...(selectedOption ? { timeout: 1000 } : {})}
            >
              <Typography variant='h1' style={{fontSize:'70px', fontWeight:'bold'}}>
                      𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧
                  </Typography>
                  </Grow>)}

              <div style={{ width: '550px'}}>
                  {selectedOption && (
                  <Grow
                    in={selectedOption}
                    style={{ transformOrigin: '0 0 0', marginTop: '10px'}}
                    {...(selectedOption ? { timeout: 6000 } : {})}
                  >
                    <Typography variant='h4' style={{fontSize: '15px', color:'#663a8a'}}>
                    {mapping[selectedOption].description}
                    </Typography>
                    </Grow>)}
              </div>
        </div>
    );
}

export default Description;