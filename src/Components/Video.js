import React, { useEffect, useState } from 'react';

const Video = ({clickedURL, onLoadVideo, videos}) => {

    const [firstLoad, setFirstLoad] = useState(true);
    const [player, setPlayer] = useState();

    function onYouTubeIframeAPIReady()  {

        setPlayer(new window.YT.Player('my-player', {
            'videoId': videos[onLoadVideo].url,
        
            'playerVars': {
                'autoplay': 1,
                'controls': 0,
                'disablekb': 1,
                'fs': 0,
                'loop': 1,
                'modestbranding': 1,
                'rel': 0,
                'showinfo': 0,
                'mute': 1,
                'autohide': 1
            },
            'events': {
                onReady: function (event) {
                    event.target.seekTo(Math.random() * ((event.target.getDuration()/2) - 80) + 8);
                    event.target.playVideo();
                    event.target.mute();
                }
            }
            
        }));
        
    };
   
    useEffect(() => { 

        if (!window.YT) 
        { // If not, load the script asynchronously
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            
            // onYouTubeIframeAPIReady will load the video after the script is loaded
            window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            
        } 
        else if(clickedURL != undefined )
        { 
            if(firstLoad)
            {
                if(clickedURL != onLoadVideo)
                {
                    player.loadVideoById({
                        'videoId': videos[clickedURL].url,
                        'startSeconds': (Math.random() * ((player.getDuration()/2) - 80) + 80),
                    });
                    setFirstLoad(false);
                }
            }
            else
            {
                player.loadVideoById({
                    'videoId': videos[clickedURL].url,
                    'startSeconds': (Math.random() * ((player.getDuration()/2) - 80) + 80),
                });
            }
        } 

        let myPlayer = document.getElementById('my-player');
        myPlayer.style.width = window.outerWidth + 'px';
        myPlayer.style.height = window.screen.height + 'px';

    }, [clickedURL]);

    return (
        <div id="here">
            <div id="my-player"></div>
        </div>
    );
}

export default Video;