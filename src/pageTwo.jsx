import React, { useState } from 'react';
import JobSearch from './jobSearch';
import HeaderTwo from './headerTwo';
import Stats from './Stats';
import Description from './Description';


function PageTwo() {
    const [selectedOption, setSelectedOption] = useState(null);

    // Function to update selected option
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="pageTwo">
            {/* <h1>Page Two</h1> */}
            <HeaderTwo />
            <JobSearch onOptionChange={handleOptionChange} />
            <div className="content_pageTwo">
                 <Stats selectedOption={selectedOption} />
                <Description selectedOption={selectedOption} /> 
                </div>
            </div>
    );
}

export default PageTwo;