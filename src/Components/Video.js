import React, { useRef, useState } from 'react'
import './CSS/Video.css'
const Video = () => {
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
                src="https://v19-us.tiktokcdn.com/3e5a9b5d133347a891307271d1fe4f4a/609b2213/video/tos/useast2a/tos-useast2a-ve-0068c002/be64093ce476480fb07b479f8b8cdcb0/?a=1233&br=1798&bt=899&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202105111832050101902192231C2E6C73&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amVlcDZzM3RrNTMzNzczM0ApZDs5NTo7ODtpNzk7OWlkN2dyLi4vcHMtLV9gLS1kMTZzczQ1XmE2NjI1M2IxMDBjLzE6Yw%3D%3D&vl=&vr="
                loop
                className='video__player'
            >

            </video>
            {/* Video Footer */}
            {/* VideoSidebar */}
        </div>
    )
}

export default Video
