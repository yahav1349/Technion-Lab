import React from 'react';
import { IoLogoLinkedin } from "react-icons/io";
import Typography from '@mui/material/Typography';
import { FaRibbon } from "react-icons/fa6";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';


function HeaderTwo() {
    return (
        <div className="header_pageTwo">
           <Typography style={{ color: '#0077B5', fontSize: '60px', display: 'flex', alignItems: 'left', fontWeight:'bold'}}>
                <IoLogoLinkedin style={{ color: '#0077B5', fontSize: '90px' }} />
            </Typography>
            
            <IconButton aria-label="#BringThemHome"  style={{ marginLeft: 'auto'}}>
                <Stack direction="column" alignItems="center">
                    <FaRibbon className='ribbon' style={{ color: 'yellow', fontSize:'40px'}}/>
                    <Typography variant="caption" style={{color:'black'}}>#BringThemHome</Typography>
                </Stack>
            </IconButton>
        </div>
    );
}

export default HeaderTwo;