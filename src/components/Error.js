import React from 'react';

const Error = ({message}) => {
    return (
        <div className="card-panel red error col s12 darken-4">
            {message}
        </div>
    );
}
 
export default Error;