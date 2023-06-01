import React from 'react';

function SVG({className, viewBox, path }) {
    return(
        <div>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
                <path d={path}/>
            </svg>
        </div>
    )
}

export default SVG;