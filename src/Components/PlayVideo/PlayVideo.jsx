import React, { useState, useEffect } from 'react'
import './PlayVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'

const PlayVideo = ({videoId}) => {

  const [videoData, setVideoData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentThread, setCommentThread] = useState([]);


  // Fetch video details using the videoId
  const fetchApiData = async (videoId, API_KEY) => {
    try{
      // Define the API URL and parameters
      const API_URL = 'https://youtube.googleapis.com/youtube/v3/videos'; // YouTube Data API endpoint
      // Set up the parameters for the API request
      const params = new URLSearchParams({  // Specify the parts of the video data to retrieve
        part: 'snippet,contentDetails,statistics',
        id: videoId,
        key: API_KEY
      });

      // Make the API request
      const response = await fetch(`${API_URL}?${params.toString()}`)

      // Check if the response is OK (status code 200)
      if(!response.ok) 
        throw new Error(`HTTP error! status: ${response.status}`);
      

      // Parse the JSON response
      const data = await response.json(); // Extract the video details from the response
      // Update the state with the video details
      setVideoData(data.items[0]);
    }catch(err){
      console.error("Error fetching video details:", err);
    }
  }

  useEffect(() => {
    if (videoId) {
      fetchApiData(videoId, API_KEY);
    }
   
  }, [videoId, API_KEY]);

  // GET/FETCH the Channel Data
  const fetchChannelApiData = async (channelId, API_KEY) => {
    try{
      const API_URL = 'https://youtube.googleapis.com/youtube/v3/channels';
      const params = new URLSearchParams({
        part:'snippet,contentDetails,statistics',
        id: channelId,
        key: API_KEY
      });

      const response = await fetch(`${API_URL}?${params.toString()}`);

      if(!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      setChannelData(data.items[0]);

    }catch(err){
      console.log("Error fetching channel details: ", err)
    }
  }

  useEffect(() => {
    // if videoData not null load the fetchChannelApiData
    if (videoData) {
      fetchChannelApiData(videoData.snippet.channelId, API_KEY);
    }
  }, [videoData, API_KEY]);


  // Fetch / Get Comment Thread
  const fetchCommentThreadData = async (videoId, API_KEY) => {
    try{
      const API_URL = `https://youtube.googleapis.com/youtube/v3/commentThreads`;
      const params = new URLSearchParams({
        part:'snippet,replies',
        maxResults: 30,
        videoId:videoId,
        key:API_KEY
      });

      const response = await fetch(`${API_URL}?${params.toString()}`);

      if(!response.ok)
         throw new Error(`HTTP error! status: ${response.status}`);
      
      const data = await response.json();
      setCommentThread(data.items);
    }catch(err){
      console.log("Error fetching comment thread: ", err)
    }
  }

  useEffect(()=>{
    if(videoId){
      fetchCommentThreadData(videoId, API_KEY);
    }
  },[videoId, API_KEY])

  





  return (
    <div className='play-video'>
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{videoData ? videoData.snippet.title : "Title Here"}</h3>
      <div className="play-video-info">
        <div className='publisher'>
          <img src={channelData ? channelData.snippet.thumbnails.medium.url : ""} alt="" />
          <div>
            <p className='author'>{videoData ? videoData.snippet.channelTitle : "Title Here"}</p>
            <p className='subscribers'>{channelData ? value_converter(channelData.statistics.subscriberCount) : ""} Subscribers</p>
          </div>
          <button className='join-btn'>Join</button>
          <button className='subscribe-btn'>Subscribe</button>
        </div>
      
        <div className='info-buttons'>
          <span><img src={like} alt="" />{videoData ? value_converter(videoData.statistics.likeCount) : "0"}</span>
          <span><img src={dislike} alt="" /></span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" />Save</span>
        </div>
      </div>

      <div className='vid-description'>
        <p className='views'>{videoData ? value_converter(videoData.statistics.viewCount) : "0"} views  {videoData ? moment(videoData.snippet.publishedAt).fromNow() : ""} </p>
        <p>{videoData ? videoData.snippet.description : "Description"}</p>
      </div>

      <div className='comments-count'>
        <h3>{videoData ? value_converter(videoData.statistics.commentCount) : "0"} Comments</h3>
      </div>
      
      {commentThread.map((comment, index)=>{
        return(
          <div className='comments' key={index}>
            <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
            <div className='comment-dtls'>
              <h3>{comment.snippet.topLevelComment.snippet.authorDisplayName} <span> {moment(comment.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
              <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>

              <div className='comment-action'>
                <img src={like} alt="" />
                <span>{value_converter(comment.snippet.topLevelComment.snippet.likeCount)}</span>
                <img src={dislike} alt="" />
                <span>Reply</span>
              </div>
            </div>
          </div>
        )
      })}
      
       
     
    </div>
    
  )
}

export default PlayVideo
