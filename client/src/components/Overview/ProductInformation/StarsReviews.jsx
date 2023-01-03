import React from 'react'
import { StarRating } from '../../shared/StarRating/StarRating.jsx'


const StarsReviews = (props) => {
  let ratings = props.ratings
  let thisRating, allRatings

  if (ratings !== undefined) {
    let avgStars = (ratings) => {
      let keys = Object.keys(ratings)
      let total = 0
      let all = 0

      for (var i = 0; i < keys.length; i++) {
        let current = keys[i]
        let ratingNum = ratings[keys[i]]
        all += parseInt(ratingNum)
        total += (current * ratingNum)
      }

      allRatings = all
      return total / all
    }

    let average = Number(parseFloat(avgStars(ratings)).toFixed(2))
    thisRating = <><StarRating rating={average} id="toggle-outfit-star" widgetname="Overview" /><a href="#reviews-anchor">Read all {allRatings} reviews</a></>
  }

  return <> {thisRating} </>
}

export default StarsReviews;