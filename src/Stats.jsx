import React from 'react';
import { Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Histogram from './Histogram';
import jobs from './jobConst';
import mapping from './ClusterMap';

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

function Stats({selectedOption}) {
    let key = null; // Declare selectedOption1 variable outside JSX

    if (selectedOption) {
        key = mapping[selectedOption].cluster;
    }

    return (
        <div className="stats">
        <div className="stats-words">
        {selectedOption && (
       <Grow
         in={selectedOption}
         style={{ transformOrigin: '0 0 0' , color: '#0077B5'}}
         {...(selectedOption ? { timeout: 1000 } : {})}
       >
        <Typography variant='h1' style={{fontSize:'70px', fontWeight:'bold'}}>
                    𝐒𝐭𝐚𝐭𝐬
            </Typography>
            </Grow>)}

        {selectedOption && (
       <Grow
         in={selectedOption}
         style={{ transformOrigin: '0 0 0', marginTop: '5px'}}
         {...(selectedOption ? { timeout: 2000 } : {})}
       >
        <Typography variant='h4' style={{color:'#663a8a'}}>
        Most Common Certifications:
        </Typography>
        </Grow>)}

        {selectedOption && (
            <Grow
         in={selectedOption}
         style={{ transformOrigin: '0 0 0' , color: 'black',fontStyle:'italic', marginTop: '5px'}}
         {...(selectedOption ? { timeout: 2000 } : {})}>
       <Typography paragraph>
                {jobs[key].MostCommon_certifications_titles.map((certification, index) => (
                    <span key={index}>{certification.certifications_titles} <br /></span>
                ))}
        </Typography>
            </Grow>)}
 
        {selectedOption && (
         <Grow
            in={selectedOption}
            style={{ transformOrigin: '0 0 0', marginTop: '5px'}}
            {...(selectedOption ? { timeout: 2000 } : {})}
        >
        <Typography variant='h4' style={{color:'#663a8a'}}>
            <br/>
        Most Common Education Field:
        </Typography>
        </Grow>)}

        {selectedOption && (
            <Grow
            in={selectedOption}
            style={{ transformOrigin: '0 0 0' , color: 'black',fontStyle:'italic', marginTop: '5px'}}
            {...(selectedOption ? { timeout: 3000 } : {})}>
        <Typography paragraph>
            {jobs[key].MostCommon_education_field.map((education, index) => (
                <span key={index}>{education.education_field} <br /></span>
                ))}
        </Typography>
        </Grow>)}
        </div>

        {selectedOption && (
         <Grow
            in={selectedOption}
            style={{ transformOrigin: '0 0 0', marginTop: '5px'}}
            {...(selectedOption ? { timeout: 2000 } : {})}
        >
        <Typography variant='h4' style={{color:'#663a8a'}}>
            <br/>
        Most Common Degree type:
        </Typography>
        </Grow>)}
    
        {selectedOption && (
            <Grow
                in={selectedOption}
                style={{ transformOrigin: '0 0 0' , color: 'black',fontStyle:'italic', marginTop: '2px'}}
                {...(selectedOption ? { timeout: 3000 } : {})}>
                <Typography paragraph>
                {jobs[key].MostCommon_degree_type.map((degree, index) => (
                    <span key={index}>{degree.normalized_degree}: {round(degree.percentage,3)}% <br /></span>
                    ))}
            </Typography>
            </Grow>)}

            
        {selectedOption && (
         <Grow
                in={selectedOption}
                style={{ transformOrigin: '0 0 0', marginTop: '5px'}}
                {...(selectedOption ? { timeout: 2000 } : {})}
            >
            <Typography variant='h4' style={{color:'#663a8a'}}>
                <br/>
            Most Common Seniority Level:
            </Typography>
        </Grow>)}
    
        {selectedOption && (
                <Grow
                    in={selectedOption}
                    style={{ transformOrigin: '0 0 0' , color: 'black',fontStyle:'italic', marginTop: '2px'}}
                    {...(selectedOption ? { timeout: 3000 } : {})}>
                    <Typography paragraph>
                    {jobs[key].MostCommon_seniority_level.map((seniority, index) => (
                        <span key={index}>{seniority.seniority_level}: {round(seniority.percentage,3)}% <br /></span>
                        ))}
                </Typography>
            </Grow>)}

    


        <div className="histogram">
            {selectedOption && (
        <Grow
            in={selectedOption}
            style={{ transformOrigin: '0 0 0' , color: '#0077B5', marginTop: '20px'}}
            {...(selectedOption ? { timeout: 8000 } : {})}
        >
            <Paper elevation={3} style={{height:'350px',width:'100%'}}>
                <Histogram countedData={jobs[key].HistDict_recommendations_count} 
                x = {'Number of Recommendations'} y={'Frequancy'} title={'Recommendations Histogram'}/>
            </Paper>
            </Grow>)}

            {selectedOption && (
        <Grow
            in={selectedOption}
            style={{ transformOrigin: '0 0 0' , color: '#0077B5', marginTop: '20px'}}
            {...(selectedOption ? { timeout: 8000 } : {})}
        >
            <Paper elevation={3} style={{height:'350px',width:'100%', marginLeft:'5px',marginRight:'5PX' }}>
                <Histogram countedData={jobs[key].HistDict_experience_years}
                x={'Years'} y={'Frequency'} title={'Experience Histogram'} />
            </Paper>
            </Grow>)}

        </div>
    </div>
    );
}

export default Stats;