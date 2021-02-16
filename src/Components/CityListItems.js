import React, {useEffect, useState, useContext} from 'react';
import {ListGroup} from 'react-bootstrap';
import StateContext from './StateContext';

const CityListItems = ({cityName}) => {

    const [cityList, setCityList] = useState([]);
    const [values, setValues] = useState(useContext(StateContext));

    let addClass = (event) => {
        
        let childNodes = document.querySelector('#menu .list-group').childNodes;
       
        childNodes.forEach(element => {
            let newA = element.firstChild;

            if(newA.id === 'clicked' && newA != event.target)
            {
                newA.id = "";
            }
        });

        event.target.id="clicked";
        values.setClickedURL(event.target.name);
    }

    useEffect(() => {

        let setIt = [];

        cityName.forEach((element, index) => {
            if(values.onLoadVideo != undefined && index == values.onLoadVideo)
            {
                setIt.push(
                    <div onClick={addClass} key={Math.random()} className="container">
                        <ListGroup.Item id={"clicked"} name={index} key={element} action href="#">
                            {element}
                        </ListGroup.Item>
                    </div>
                )
            }
            else
            {
                setIt.push(
                    <div onClick={addClass} key={Math.random()} className="container">
                        <ListGroup.Item name={index} key={element} action href="#">
                            {element}
                        </ListGroup.Item>
                    </div>
                )
            }
        });
        setCityList(setIt);
        
    }, [values.onLoadVideo]);

    return (
        <>
            {cityList.map(item => item)}
        </>
    );
}

export default CityListItems;
