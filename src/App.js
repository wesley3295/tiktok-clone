import './App.css';
import Video from './Components/Video'
import VideoSidebar from './Components/VideoSidebar'
import VideoFooter from './Components/VideoFooter'
function App() {
  return (
    <div className="app">
      {/* App Container */}
      <div className="app__videos">
        <Video />
        <Video />
      <VideoFooter />
      </div>
      <VideoSidebar />
    </div>
  );
}

export default App;
