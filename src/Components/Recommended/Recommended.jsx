import React, { useEffect, useState } from 'react'
import './Recommended.css'
import thumbnail1 from '../../Assets/thumbnail1.png'
import { value_converter } from '../../data';
import { Link } from 'react-router';


const Recommended = ({categoryId}) => {

  const [videoData, setVideoData] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;
  
  const fetchVideoData = async ( categoryId, API_KEY) =>{
    try{
      const API_URL = 'https://youtube.googleapis.com/youtube/v3/videos';
      const params = new URLSearchParams({
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        maxResults: 50,
        regionCode: 'PH',
        videoCategoryId: categoryId,
        key: API_KEY
      })

      const response = await fetch(`${API_URL}?${params.toString()}`);

      if(!response.ok)
        throw new Error(`HTTP error status: ${response.status}`)

      const data = await response.json();
      setVideoData(data.items)

    }catch(err){
      console.log("Error fetching videos: ", err)
    }
  }

  useEffect(() => {
    if(categoryId)
      fetchVideoData(categoryId, API_KEY)

  },[categoryId, API_KEY])

  return (
    <div className='recommended'>
      {videoData.map((video, index) => {
        const thumbnail = video.snippet.thumbnails?.maxres?.url 
                        || video.snippet.thumbnails?.high?.url 
                        || video.snippet.thumbnails?.medium?.url;

        return(
          <Link to={`/video/${video.snippet.categoryId}/${video.id}`} className='side-video-list' key={index} onClick={() => window.scrollTo(0, 0)}>
            <img src={thumbnail} alt="" />
            <div className="vid-info">
              <h4>{video.snippet.title}</h4>
              <p>{video.snippet.channelTitle}</p>
              <p>{value_converter(video.statistics.likeCount)} Views</p>
            </div>
          </Link>
            )
      })}
      
    </div>
  )
}

export default Recommended
