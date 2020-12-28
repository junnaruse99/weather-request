import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const ErrorComponent = styled.p` 
    background-color: red;
    color: #fff;
    text-align: center;
    margin: 10px -15px;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
`

const Error = ( {messagge} ) => (
    <ErrorComponent>{messagge}</ErrorComponent>
)
 
Error.propTypes = {
    messagge: PropTypes.string.isRequired
}

export default Error;