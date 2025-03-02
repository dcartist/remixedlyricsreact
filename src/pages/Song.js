import React from 'react'
import {SongContainer} from '../components/PageContainer/PageContainer'
import { GetSongById } from '../api/ApiRouters'
import { useParams } from 'react-router-dom';

export default function Song() {
    const { id } = useParams();
    const song = GetSongById(id);
  

  return (
   <SongContainer title="Song" info={song}>
    
    </SongContainer>
  )
}
