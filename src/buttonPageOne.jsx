import React from 'react';
import { Link } from 'react-router-dom';

function Button() {
    return (
        <div className='button_pageOne'>
            <Link to="/pageTwo">
                <button className="button_pageOne-button">
                    Find Your Next Job Today
                </button>
            </Link>
        </div>
    );
}

export default Button;
