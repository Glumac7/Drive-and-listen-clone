import React, {useEffect, useState, useContext} from 'react';
import {ListGroup} from 'react-bootstrap';
import CityListItems from './CityListItems';
import StateContext from './StateContext';

const Menu = () => {

    const [values, setValues] = useState(useContext(StateContext));
    const cities = ["New York", "Tokyo", "Seattle", "Paris", "Jackson", "Lincoln", "Madison"]

    const speedClick = (e) => {
        let childNodes = document.querySelector('.playback_speed_container').childNodes;
       
        childNodes.forEach((element, index) => {
            let newA = element;

            if(newA.classList[1] === 'clicked_playback_speed' && newA != e.target && index != 0)
            {
                newA.classList.remove('clicked_playback_speed');
            }
        });

        values.setPlaybackSpeed(parseFloat(e.target.innerText, 10));
        e.target.classList.add('clicked_playback_speed');
    }

    const minMenu = () => {
        let menu = document.getElementById("menu");
        if(menu.style.right == -menu.offsetWidth + 'px')
        {
            menu.style.right = 0 + 'px';
        }
        else
        {
            menu.style.right = -menu.offsetWidth + 'px'
        }
    }

    return (
        <>
            <p onClick={minMenu} className="minimize">X</p>
            <div id="menu">
                <h1>City List:</h1>
                <ListGroup>
                    <CityListItems cityName={cities}/>
                </ListGroup>
                <div className="playback_speed_container">
                    <p>Playback speed: </p>
                    <p onClick={speedClick} className="playback_speed clicked_playback_speed">1</p>
                    <p onClick={speedClick} className="playback_speed">1.5</p>
                    <p onClick={speedClick}className="playback_speed">2</p>
                </div>
            </div>
        </>
    );
}

export default Menu;
