import React from 'react';
import Typography from '@mui/material/Typography';

function AboutUs() {
    return (
        <section className="about-us">
            <div className="who-we-are">
                <Typography variant="h2" align="center" style={{marginTop:'10px', color: '#0077B5', fontSize:'15px'}}>Who We Are</Typography>
                <Typography variant="body1" align="center" style={{marginTop:'5px', fontSize:'15px'}}>
                    We are a team of dedicated professionals committed to revolutionizing the way people find jobs.<br/>
                    With years of experience in the industry, we understand the challenges job seekers face <br/> and strive to provide innovative 
                    solutions to help them succeed in their careers.
                </Typography>
            </div>
            <div className="statistics">
                <Typography variant="h3" align="center" style={{marginTop:'20px', color: '#0077B5', fontSize:'15px'}}>Our Impact</Typography>
                <Typography variant="body1" align="center" style={{marginTop:'5px', fontSize:'15px'}}>
                    Our platform has empowered thousands of individuals to secure their dream jobs <br/> and achieve career growth.<br/>
                    Here are some key statistics that highlight our success:
                </Typography>
                    <Typography variant="body1" component="li" align="center" style={{fontSize:'15px'}}>
                        Success Rate: Over 80%</Typography>
                    <Typography variant="body1" component="li" align="center" style={{fontSize:'15px'}}>
                        Job Offers Available: 1000+</Typography>
                    <Typography variant="body1" component="li" align="center" style={{fontSize:'15px'}}>
                        User Satisfaction: 90%+</Typography>
                
            </div>
        </section>
    );
}

export default AboutUs;
