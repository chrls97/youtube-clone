import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'  // Fixed import
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async (category, API_KEY) => {
    try{
      const API_URL = 'https://youtube.googleapis.com/youtube/v3/videos';
      const params = new URLSearchParams({
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        maxResults: 15,
        regionCode: 'PH',
        videoCategoryId: category,
        key: API_KEY
      });
      
      const response = await fetch(`${API_URL}?${params.toString()}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setData(data.items)
      
    }catch(err) {
      console.error("Error fetching data:", err);
    }
  }

  useEffect(() => {
    fetchData(category, API_KEY);
  }, [category])


  return (
    <div className="feed">
      {data.map((item, index) => {
        // Conditional rendering to check thumbnail available resolutions
        const thumbnail = item.snippet.thumbnails?.maxres?.url 
                        || item.snippet.thumbnails?.high?.url 
                        || item.snippet.thumbnails?.medium?.url;

        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`}  className='card' key={index} >
            <img src={thumbnail} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle || 'Unknown channel'}</h3>
            <p>
              {item.statistics?.viewCount ? `${value_converter(item.statistics.viewCount)} views ` : ' '} 
              &bull;&nbsp;  
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        )
      })}
    </div>    
  )
}

export default Feed