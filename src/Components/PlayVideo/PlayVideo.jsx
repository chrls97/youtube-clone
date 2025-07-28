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
        <div className='publisher'>
          <img src={jack} alt="" />
          <div>
            <p className='author'>GreatStack</p>
            <p className='subscribers'>1M Subscribers</p>
          </div>
          <button className='join-btn'>Join</button>
          <button className='subscribe-btn'>Subscribe</button>
        </div>
      
        <div className='info-buttons'>
          <span><img src={like} alt="" />123</span>
          <span><img src={dislike} alt="" /></span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" />Save</span>
        </div>
      </div>

      <div className='vid-description'>
        <p className='views'>215,783 views  Feb 12, 2024 <span>#GreatStack</span> <span>#webdevelopment</span> <span>#reactjs </span></p>
        <p>Channel that makes learning EASY</p>
        <p>Subscribe GreatStack to Watch More Tutorials on Web Development</p>


      </div>

      <div className='comments-count'>
        <h3>352 Comments</h3>
      </div>
      

      <div className='comments'>
        <img src={user_profile} alt="" />
        <div className='comment-dtls'>
          <h3>Username <span> 1 day ago</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos distinctio praesentium laborum, iusto aliquam facilis reprehenderit architecto fugit nesciunt odit nam itaque ducimus, ipsa non autem mollitia porro quas!</p>

          <div className='comment-action'>
            <img src={like} alt="" />
            <span>12</span>
            <img src={dislike} alt="" />
            <span>Reply</span>
          </div>
        </div>
      </div>

      <div className='comments'>
        <img src={user_profile} alt="" />
        <div className='comment-dtls'>
          <h3>Username <span> 1 day ago</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos distinctio praesentium laborum, iusto aliquam facilis reprehenderit architecto fugit nesciunt odit nam itaque ducimus, ipsa non autem mollitia porro quas!</p>

          <div className='comment-action'>
            <img src={like} alt="" />
            <span>12</span>
            <img src={dislike} alt="" />
            <span>Reply</span>
          </div>
        </div>
      </div>

      <div className='comments'>
        <img src={user_profile} alt="" />
        <div className='comment-dtls'>
          <h3>Username <span> 1 day ago</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos distinctio praesentium laborum, iusto aliquam facilis reprehenderit architecto fugit nesciunt odit nam itaque ducimus, ipsa non autem mollitia porro quas!</p>

          <div className='comment-action'>
            <img src={like} alt="" />
            <span>12</span>
            <img src={dislike} alt="" />
            <span>Reply</span>
          </div>
        </div>
      </div>

      <div className='comments'>
        <img src={user_profile} alt="" />
        <div className='comment-dtls'>
          <h3>Username <span> 1 day ago</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos distinctio praesentium laborum, iusto aliquam facilis reprehenderit architecto fugit nesciunt odit nam itaque ducimus, ipsa non autem mollitia porro quas!</p>

          <div className='comment-action'>
            <img src={like} alt="" />
            <span>12</span>
            <img src={dislike} alt="" />
            <span>Reply</span>
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default PlayVideo
