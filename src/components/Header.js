import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Nav = styled.nav` 
    display: flex;
    background-color: #fff;
    justify-content: center;
    height: 50px;
    font-size: 25px;

    a {
        font-family: 'Open Sans', sans-serif;
        color: #000;
        text-align: center;
        font-weight: bold;
        align-self: center;
    }
`;


const Header = ( { title } ) => {
    return ( 
        <Nav>
            <a href="#!">{title}</a>
        </Nav>
     );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
 
export default Header;