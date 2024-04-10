import React from 'react';
import { IoLogoLinkedin } from "react-icons/io";
import Typography from '@mui/material/Typography';

function HeaderOne() {
    return (
        <div className="header_pageOne">
           <Typography style={{ color: '#0077B5', fontSize: '60px', display: 'flex', alignItems: 'center', fontWeight:'bold'}}>
                         𝐋𝐢𝐧𝐤𝐞𝐝
                <IoLogoLinkedin style={{ color: '#0077B5', fontSize: '90px' }} />
            </Typography>
            <Typography variant="h2" style={{ color: '#0077B5', fontSize: '30px', fontWeight:'bold' }}>Between the lines</Typography>
        </div>
    );
}

export default HeaderOne;