import React, {useEffect, useState} from 'react';
import {ListGroup} from 'react-bootstrap';
import CityListItems from './CityListItems';

const Menu = ({setClickedURL, onLoadVideo}) => {

    const cities = ["New York", "Tokyo", "Seattle", "Houston", "Jackson", "Lincoln", "Madison"]

    return (
        <div id="menu">
            <h1>City List:</h1>
            <ListGroup>
                <CityListItems cityName={cities} onLoadVideo={onLoadVideo} setClickedURL={setClickedURL}/>
            </ListGroup>
        </div>
    );
}

export default Menu;
