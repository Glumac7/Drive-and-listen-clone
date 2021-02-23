import React, { useEffect, useState } from 'react';
import StateContext from './StateContext';

const Video = () => {

    const [values, setValues] = useState({clickedURL: 0, volume: 50, playbackSpeed: 1, streetNoise: false});
    const [firstLoad, setFirstLoad] = useState(true);
    const [player, setPlayer] = useState();

    function onYouTubeIframeAPIReady()  {

        setPlayer(new window.YT.Player('my-player', {
            'videoId': values.videos[values.onLoadVideo].url,
            'playerVars': {
                'iv_load_policy': 3,
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
                onStateChange: onStateChange,
                onReady: function (event) {
                    event.target.seekTo((Math.random() * ((event.target.getDuration()/2) - 80) + 80));
                    event.target.playVideo();
                    event.target.setPlaybackRate(values.playbackSpeed);
                    event.target.mute();
                }
            }
            
        }));
    };

    //when playbackSpeed changes:
    useEffect(() => {
        if(player != undefined)
        {
            player.setPlaybackRate(values.playbackSpeed);
            player.setVolume(values.volume);
            if(values.streetNoise)
            {
                player.unMute();
            }
            else
            {
                player.mute();
            }
        }
       
    }, [values.playbackSpeed, values.streetNoise, values.volume]);

    //when clickedURL changes:
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
        else if(values.clickedURL != undefined)
        { 
            if(firstLoad)
            {
                if(values.clickedURL != values.onLoadVideo)
                {
                    player.loadVideoById({
                        'videoId': values.videos[values.clickedURL].url,
                        'startSeconds': (Math.random() * ((player.getDuration()/2) - 80) + 80),
                        'events': {
                            onStateChange: onStateChange
                        }
                    });
                    setFirstLoad(false);
                }
            }
            else
            {
                player.loadVideoById({
                    'videoId': values.videos[values.clickedURL].url,
                    'startSeconds': (Math.random() * ((player.getDuration()/2) - 80) + 80),
                    'events': {
                        onStateChange: onStateChange
                    }
                });
            }
        } 

        if(window.outerWidth >= 1200 || window.outerHeight >= 1200)
        {
            let myPlayer = document.getElementById('my-player');
            myPlayer.style.width = window.outerWidth + 'px';
            myPlayer.style.height = window.screen.height + 'px';
        }


    }, [values.clickedURL]);

    const onStateChange = state =>{
        
        if (state.data == 1)
        {
            setTimeout(() => {
                document.querySelector('.App').childNodes[0].id = "";
            }, 3200);
        }
        else
        {
            document.querySelector('.App').childNodes[0].id = "over_iframe";
            //document.getElementById("my-player").setAttribute('src', document.getElementById("my-player").getAttribute('src') + '&')
        }
        
        if (state.data === window.YT.PlayerState.ENDED) {
            state.target.seekTo((Math.random() * ((state.target.getDuration()/2) - 80) + 80))
            state.target.playVideo();
        }
    }

    return (
        <>
            <div id="over_iframe"></div>
            <div id="here">
                
                <StateContext.Consumer>
                    {contextValue => (
                        setValues(contextValue)
                    )}
                </StateContext.Consumer>
                <div id="my-player"></div>
            </div>
        </>
    );
}

export default Video;