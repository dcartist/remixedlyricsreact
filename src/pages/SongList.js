import React from 'react'
import { AllSongsApi } from '../api/ApiRouters'
import { PageContainer } from '../components/PageContainer/PageContainer'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating/Rating';
export default function SongList() {
    const SongList = AllSongsApi();
  console.log(SongList)
  return (
    <PageContainer title="Songs" rowClassName="text-left">
    <ul className='list-group'>
        {SongList.map((song, index) => <li key={index} className="list-group-item list-group-item-action"><Link to={`/songs/${song.id}`} className="d-flex justify-content-between align-items-center">{song.title} { " "} {song.remix_level && <Rating ratingNumber={song.remix_level.level}/>} </Link> </li>)}
    </ul>
    </PageContainer>
  )
}
