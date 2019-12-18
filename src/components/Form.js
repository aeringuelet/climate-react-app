import React, { useState } from 'react';

const Form = ({getClimateData}) => {

    const [search, saveSearch] = useState({
        city: '',
        country: ''
    });

    const handleChange = e => {
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const searchClimate = e => {
        e.preventDefault();

        getClimateData(search);
    }

    return (
        <form 
            onSubmit={searchClimate /* not working, added onClick event on button*/}
        >
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    onChange={handleChange}
                />
                <label htmlFor="city">City:</label>
            </div>
            
            <div className="input-field col s12">
                <select onChange={handleChange} name="country">
                    <option value="">-- Select a country --</option>
                    <option value="US">United States</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                </select>
            </div>

            <div className="input-field col s12" onClick={searchClimate}>
                <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="Get Climate" />
            </div>
        </form>
    );
}
 
export default Form;