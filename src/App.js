import './App.css';
import Video from './Components/Video';
import Menu from './Components/Menu';
import StateContext from './Components/StateContext';
import {Container} from 'react-bootstrap';
import {useState} from 'react';

function App() {

  const [videos, setVideos] = useState([
    {url: "m04Q97CTvCk", name: 'new-york'},
    {url: "0nTO4zSEpOs", name: 'tokyo'},
    {url: "3EaCj-seAHM", name: 'seattle'},
    {url: "yqOlY5uBBbo", name: "paris"}
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
