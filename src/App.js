import './App.css';
import Video from './Components/Video'
import axios from './axios'
import {useEffect,useState} from 'react'
function App() {
  const [videos,setVideos] = useState([])
  useEffect(()=>{
  async function fetchPosts(){
    const response = await axios.get("/v2/posts")
    setVideos(response.data)
    return response
  }
  fetchPosts()
  },[])
  return (
    <div className="app">
      {/* App Container */}
      <div className="app__videos">
        {videos && videos.map(v =><Video  likes={v.likes} messages={v.messages} shares={v.shares} channel={v.channel} description={v.description} song={v.song} url={"https://v25-us.tiktokcdn.com/b602861565fb38f3e4cddaac118ae41c/609c738a/video/tos/useast2a/tos-useast2a-ve-0068c003/a7b4de2302454a8e90e1ffd270a30634/?a=1233&br=3588&bt=1794&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202105121831450101890720323735DC0C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3BmPGVmc3d4NTMzNzczM0ApaTpmNDs8PDw4NzdpaDlmZWdfaGAvXmFjLmFgLS1kMTZzczFjNDU2XjRiMy8tMDIyNGE6Yw%3D%3D&vl=&vr="} />)}
      </div>
    </div>
  );
}

export default App;
