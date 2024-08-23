import React from 'react'
import { AllSongsApi } from '../api/ApiRouters'
import { PageContainer } from '../components/PageContainer/PageContainer'

export default function SongList() {
    const SongList = AllSongsApi();
  return (
    <PageContainer title="Songs" rowClassName="text-left">
    <p>This is a simple lyrics app that allows you to search for lyrics of your favorite songs.</p>
    </PageContainer>
  )
}
