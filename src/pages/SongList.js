import React from 'react'
import { AllSongsApi } from '../api/ApiRouters'
import { PageContainer } from '../components/PageContainer/PageContainer'
import { Link } from 'react-router-dom';
export default function SongList() {
    const SongList = AllSongsApi();
    console.log(SongList);
    console.log("test")
  return (
    <PageContainer title="Songs" rowClassName="text-left">
    <ul>
        {SongList.map((song, index) => <li key={index}><Link to={`/songs/${song.id}`}>{song.title}</Link></li>)}
    </ul>
    </PageContainer>
  )
}
