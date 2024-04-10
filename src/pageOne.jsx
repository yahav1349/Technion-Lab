import React from 'react';
import HeaderOne from './headerOne';
import AboutUs from './aboutUs';
import Button from './buttonPageOne';

function PageOne() {
    return (
        <div className="pageOne">
            <HeaderOne />
            <Button />
            <AboutUs />
            
        </div>
    );
}

export default PageOne;