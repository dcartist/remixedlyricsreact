import React from 'react'
import { PageContainer } from '../components/PageContainer/PageContainer'

export default function About() {
  return (
    <div>
        <PageContainer title="About" rowClassName="text-left">
            <h3>What is Remixed Lyrics?</h3>
            <p>Imagine singing a song and realizing the lyrics would sound better if it were coffee instead of money. Remixed Lyrics take regular lyrics and remix them to be awesome (usually with coffee). </p>
            <h3>How does the remix ratings work?</h3>
            <p>Remixed Lyrics uses a 5 star rating system to rate the remix level of the lyrics. The higher the rating, the more remixed the lyrics are. </p>
            
            </PageContainer>


    </div>
  )
}
