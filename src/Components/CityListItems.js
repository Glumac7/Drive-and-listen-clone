import React, {useEffect, useState} from 'react';
import {ListGroup} from 'react-bootstrap';

const CityListItems = ({cityName, setClickedURL, onLoadVideo}) => {

    const [cityList, setCityList] = useState([]);

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
        setClickedURL(event.target.name);
    }

    useEffect(() => {

        let setIt = [];

        cityName.forEach((element, index) => {
            if(index == onLoadVideo)
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
        
    }, []);

    return (
        <>
            {cityList.map(item => item)}
        </>
    );
}

export default CityListItems;
