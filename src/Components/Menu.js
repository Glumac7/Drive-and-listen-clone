import React, {useEffect, useState, useContext} from 'react';
import {ListGroup} from 'react-bootstrap';
import CityListItems from './CityListItems';
import StateContext from './StateContext';

const Menu = () => {

    const [values, setValues] = useState(useContext(StateContext));
    const cities = ["New York", "Tokyo", "Seattle", "Paris", "Jackson", "Lincoln", "Madison"]
    const [volume, setVolume] = useState(50);

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

    const streetNoiseClick = (event) => {
        if(event.target.innerText == 'OFF')
        {
            event.target.innerText = "ON";
            values.setStreetNoise(true);
        }
        else
        {
            event.target.innerText = "OFF";
            values.setStreetNoise(false);
        }
    }
    
    useEffect(() => {
        values.setVolume(volume);
    }, [volume]);

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
                    <p onClick={speedClick} className="button clicked_playback_speed">1</p>
                    <p onClick={speedClick} className="button">1.5</p>
                    <p onClick={speedClick} className="button">2</p>
                </div>

                <div style={{marginTop: '5%'}}>
                    <p>Street Noise: </p>
                    <p onClick={streetNoiseClick} className="button">OFF</p>
                </div>

                <div className="slidecontainer">
                    <input 
                        type="range"
                        min="1"
                        max="100"
                        value={volume}
                        onChange={(e) => { setVolume(e.target.value) }} 
                        className="slider"
                        id="myRange"/>
                </div>
            </div>
        </>
    );
}

export default Menu;
