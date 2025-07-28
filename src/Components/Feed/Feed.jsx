import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumbnail1 from '../../Assets/thumbnail1.png'
import thumbnail2 from '../../Assets/thumbnail2.png'
import thumbnail3 from '../../Assets/thumbnail3.png'
import thumbnail4 from '../../Assets/thumbnail4.png'
import thumbnail5 from '../../Assets/thumbnail5.png'
import thumbnail6 from '../../Assets/thumbnail6.png'
import thumbnail7 from '../../Assets/thumbnail7.png'
import thumbnail8 from '../../Assets/thumbnail8.png'
import { Link } from 'react-router'
import {API_KEY, value_converter} from '../../data'
import moment from 'moment'

const Feed = ({category}) => {
  const [data, setData] = useState([]);

  const fetchData = async (category, API_KEY) => {
    try{
      const API_URL = 'https://youtube.googleapis.com/youtube/v3/videos';
      const params = new URLSearchParams({
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        maxResults: 15,
        regionCode: 'US',
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
  },[category])


  return (
    <div className="feed">
      {data.map((item, index) => {
        return(
          <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
            <img src={item.snippet.thumbnails.maxres.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>GreatStack</h3>
            <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
          </Link>
        )
      })}
      
    </div>    
    
  )
}

export default Feed
