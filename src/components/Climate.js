import React from 'react';

const Climate = ({data}) => {
    if(data === undefined || data === {}) {
        return null;
    }

    const kelvin = 273.15;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>
                    Climate for {data.name}
                </h2>

                <p className="temperatura">
                    { parseInt(data.main.temp - kelvin, 10) } &#x2103;
                </p>

                <p>
                    Max Temp: { parseInt(data.main.temp_max - kelvin, 10) } &#x2103;
                </p>
            </div>
        </div>
    )
}
 
export default Climate;