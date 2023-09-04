import React from 'react'
import { useParams } from 'react-router-dom'
export const CharacterPage = () => { 
  param = useParams()
  return (
    <>
      <h1>{param.character.name}</h1>
      <p>{param.character.name}</p>
      <p>{param.character.description}</p>
    </>
  )
}
