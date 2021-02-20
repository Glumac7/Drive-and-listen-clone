import './App.css';
import Video from './Components/Video';
import Menu from './Components/Menu';
import StateContext from './Components/StateContext';
import {Container} from 'react-bootstrap';
import {useState} from 'react';

function App() {

  //hide everything and add video source
  const [videos, setVideos] = useState([
    {url: "E07rTPgIvn0", name: "amsterdam"},
    {url: "zca688Ecwpk", name: "berlin"},
    {url: "b7Pbm-jbilM", name: "bologna"},
    {url: "AqFLqzHAgzA", name: "florence"},
    {url: "MGMqLGvtNpY", name: "london"},
    {url: "_1Kr90k_yJk", name: "milan"},
    {url: "uMnGzVPUEB4", name: 'new-york'},
    {url: "yqOlY5uBBbo", name: "paris"},
    {url: "AJNh9zZm2wI", name: "petrovac & kotor"},
    {url: "Gy6fDx9L-zk", name: "rome"},
    {url: "3EaCj-seAHM", name: 'seattle'},
    {url: "0nTO4zSEpOs", name: 'tokyo'},
    {url: "lh8dNmneVyY", name: "vancouver"},
    {url: "SLmDgMZSeJ4", name: "vienna"},
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
