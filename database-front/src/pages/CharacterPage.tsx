import { useParams } from 'react-router-dom'
import "./characterpage.css"
export const CharacterPage = () => {
  const param = useParams()
  return (
    <div className='character-page-container'>
      <h1>{param.character}</h1>
      <p>{param.character}</p>
      <p>{param.character}</p>
    </div>
  )
}
