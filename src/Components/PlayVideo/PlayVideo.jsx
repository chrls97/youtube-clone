import React from 'react'
import './PlayVideo.css'
import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={video} controls autoPlay muted ></video>
      <h3>Best Channel to learn codding that help you to be a web developer</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span><img src={like} alt="" />123</span>
          <span><img src={dislike} alt="" />1</span>
          <span><img src={share} alt="" /></span>
          <span><img src={save} alt="" />1</span>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo
