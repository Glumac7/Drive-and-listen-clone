import './App.css';
import Video from './Components/Video';
import Menu from './Components/Menu';
import {Container} from 'react-bootstrap';
import {useState} from 'react';

function App() {

  const [videos, setVideos] = useState([
    {url: "m04Q97CTvCk", name: 'new-york'},
    {url: "0nTO4zSEpOs", name: 'tokyo'},
    {url: "3EaCj-seAHM", name: 'seattle'}
  ]);
  
  const [clickedURL, setClickedURL] = useState();
  const [onLoadVideo, setOnLoadVideo] = useState(Math.floor(Math.random() * (videos.length - 0) + 0));


  return (
    <Container className="App" fluid>
      <Video clickedURL={clickedURL} onLoadVideo={onLoadVideo} videos={videos}></Video>
      <Menu setClickedURL={setClickedURL} onLoadVideo={onLoadVideo}></Menu>
    </Container>
  );
}

export default App;
