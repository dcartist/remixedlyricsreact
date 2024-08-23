import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";


export default function Rating({ratingNumber}) {
    console.log(ratingNumber)
    const starRating = []
    for (let i = 0; i < 5; i++) {
        if (i < ratingNumber) {
            starRating.push(<IoStar key={i} />)
        } else {
            starRating.push(<IoStarOutline key={i} />)
        }
    }
    
  return (
    <span>
        { starRating.map((star) => star) }
    </span>
  )
}
