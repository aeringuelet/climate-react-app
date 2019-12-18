import React from 'react';

const Climate = ({climate}) => {
    if(climate === undefined || climate === '') {
        return null;
    }

    return (
        <div className="">
            <div className="black-text">
                <h2>
                    Climate for {climate.name}
                </h2>

                <p className="temperatura">
                    { parseInt(climate.main.temp, 10) } &#x2103;
                </p>

                <p>
                    Max Temp: { parseInt(climate.main.temp_max, 10) } &#x2103;
                </p>
            </div>
        </div>
    );
}
 
export default Climate;