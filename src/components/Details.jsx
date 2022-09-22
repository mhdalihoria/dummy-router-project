import React from 'react'
import {useParams} from "react-router-dom"

function Details() {
  const {profileId} = useParams()

  return (
    <div>{profileId} Page</div>
  )
}

export default Details