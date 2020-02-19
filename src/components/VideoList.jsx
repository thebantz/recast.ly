import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from './data/exampleVideoData';

var VideoList = (props) => (
  // const VideoListEntry = that other file <
  <div className="video-list">

    <VideoListEntry properties={props}/>
    /* <div><h5><em>{VideoListEntry.props.video}</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div> */
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;