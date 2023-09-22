import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
export const Database = () => {

  //States
  const [data, setData] = useState([{ name: "loading", id: "loading", description: "loading", age: "loading" }])

  // Characters request
  useEffect(() => {
    axios.get("http://192.168.69.11:3000/api/characters").then(
      (response) => {
        setData(response.data[0])
      },
      (error) => {
        alert(error)
      }
    )
  }, [])


  return (
    <div className="Database">
      {
        data.map(e => {
          return <>
            <Link to={"/character/" + e.id}>
              <p>{e.name + " " + e.age + " " + e.description}</p>
            </Link>
          </>
        })
      }
    </div>
  )
}
