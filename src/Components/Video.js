import React, { useRef, useState } from 'react'
import './CSS/Video.css'
import VideoSidebar from './VideoSidebar'
import VideoFooter from './VideoFooter'
const Video = ({ url, channel, description, song, likes, shares, messages }) => {
    const [playing, setPlaying] = useState(false)

    const videoRef = useRef(null)

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);

        }
    }
    return (
        <div className="video">
            <video
                onClick={handleVideoPress}
                ref={videoRef}
                src={url}
                loop
                className='video__player'
            >

            </video>
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} messages={messages} shares={shares} />
        </div>
    )
}

export default Video
