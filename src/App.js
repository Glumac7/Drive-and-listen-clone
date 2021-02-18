import './App.css';
import Video from './Components/Video';
import Menu from './Components/Menu';
import StateContext from './Components/StateContext';
import {Container} from 'react-bootstrap';
import {useState} from 'react';

function App() {

  //hide everything and add video source
  const [videos, setVideos] = useState([
    {url: "m04Q97CTvCk", name: 'new-york'},
    {url: "0nTO4zSEpOs", name: 'tokyo'},
    {url: "3EaCj-seAHM", name: 'seattle'},
    {url: "yqOlY5uBBbo", name: "paris"},
    {url: "SLmDgMZSeJ4", name: "vienna"},
    {url: "Gy6fDx9L-zk", name: "rome"},
    {url: "AqFLqzHAgzA", name: "florence"},
    {url: "Vb5aqR2WxoQ", name: "monte carlo"},
    {url: "_1Kr90k_yJk", name: "milan"},
    {url: "zca688Ecwpk", name: "berlin"},
    {url: "lh8dNmneVyY", name: "vancouver"},
    {url: "AJNh9zZm2wI", name: "petrovac & kotor"},
    {url: "MGMqLGvtNpY", name: "london"},
    {url: "b7Pbm-jbilM", name: "bologna"},
  ]);
  
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [streetNoise, setStreetNoise] = useState(false);
  const [volume, setVolume] = useState(50);
  const [clickedURL, setClickedURL] = useState();
  const [onLoadVideo, setOnLoadVideo] = useState(Math.floor(Math.random() * (videos.length - 0) + 0));

  return (
      <StateContext.Provider value={{volume, setVolume, videos, streetNoise, setStreetNoise, setPlaybackSpeed, playbackSpeed, clickedURL, onLoadVideo, setClickedURL}}>
          <Container className="App" fluid>
            <Video></Video>
            <Menu></Menu>
          </Container>
      </StateContext.Provider>
  );

}

export default App;
