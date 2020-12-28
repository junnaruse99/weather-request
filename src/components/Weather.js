import React from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import PropTypes from 'prop-types';

const WeatherContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 100%;
        height: 100%;
        background-color: #fff;
        display:flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
    }

    h2 {
        font-size: 1.5rem;
    }

    p:first-of-type {
        font-size: 2rem;
    }

    @media (max-width: 768px) {
        margin: 25px -15px;
    }

`


const Weather = ( {result} ) => {

    const { cod, name, main } = result;

    // temp is returned in kelvin
    const kelvin = 273.15;

    if(cod === "404") {
        return(
            <WeatherContainer>
                <Error messagge="There was an error" />
            </WeatherContainer>
        );
    } else if ( !name) {
        return null;
    }

    return ( 
        <WeatherContainer>
            <div>
                <h2>The weather from {name} is: </h2>
                <p>
                    { parseFloat(main.temp - kelvin, 10).toFixed(2) } &#x2103;
                </p>
                <p> <span>Maximum temperature: </span>  
                    { parseFloat(main.temp_max - kelvin, 10).toFixed(2) } &#x2103;
                </p>
                <p> <span>Minimum temperature: </span>   
                    { parseFloat(main.temp_min - kelvin, 10).toFixed(2) } &#x2103;
                </p>
            </div>
        </WeatherContainer>
     );
}

Weather.propTypes = {
    result: PropTypes.object.isRequired,
}
 
export default Weather;