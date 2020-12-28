import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Form =  ( {search, saveSearch, updateConsult} ) => {

    // State for form validation error
    const [ error, saveError ] = useState(false);

    const { city, country } = search;
    
    const handleChange = e => {
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        // Validate
        if(city.trim() === '' || country.trim() === ''){
            saveError(true);
            return;
        };

        saveError(false);

        // Submit has been clicked
        updateConsult(true);
    };



    return ( 

        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error messagge="All fields are mandatory" /> : null}
            <div className="form-group row">
                <label className="col-sm-3 col-form-label" htmlFor="city">City</label>
                <input 
                    className="form-control col-sm-9"
                    name="city"
                    id="city"
                    placeholder="City"
                    value={city}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Country</label>
                <select 
                    className="form-control col-sm-9"
                    name="country"
                    value={country}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
            </div>

            <div className="row">
                <button
                    className="btn btn-warning btn-block mt-4"
                    type="submit"
                >Submit</button>
            </div>
        </form>
     );
}

Form.propTypes = {
    search: PropTypes.object.isRequired,
    saveSearch: PropTypes.func.isRequired,
    updateConsult: PropTypes.func.isRequired
}
 
export default Form;