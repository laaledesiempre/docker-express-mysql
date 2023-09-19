import { useState } from 'react'
import { useParams } from 'react-router-dom'
import "./characterpage.css"
import axios from 'axios'
export const CharacterPage = () => {

  // States
  const [data, setData] = useState({
    name: "Loading",
    age: "Loading",
    description: "Loading"
  })

  // Param
  const param = useParams()

  // Get character request
  axios.get('http://192.168.69.11:3000/characters/id/' + param.character).then(
    (response) => {
      setData(response.data)
    }, (error) => {
      alert(error)
    }
  )

  return (
    <div className='character-page-container'>
      <h1>{data.name}</h1>
      <p>{data.age}</p>
      <p>{param.description}</p>
    </div>
  )
}
