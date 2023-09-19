import axios from 'axios'
import React from 'react'
import {Link} from 'react-router-dom'
export const Database = () => {

  //States
  const [data, setData] = useState([])

  // Characters request
  axios.get("http://192.168.69.11:3000/api/characters").then(
    (response) => {
      setData(response.data)
    },
    (error) => {
      alert(error)
    }
  )

  return (
    <div className="Database">
      {
        data.map(e => {
          return <>
                  <Link to={"/character/"+e.id}>
                    <p>{e.name + " " + e.age + " " + e.description}</p>
                  </Link>          
                </>
        })
      }
    </div>
  )
}
