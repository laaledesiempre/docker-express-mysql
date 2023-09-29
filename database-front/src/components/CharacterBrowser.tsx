import axios from "axios"
import { useState } from "react"
export const CharacterBrowser = () => {
  //States
  const [data, setData] = useState([{ name: "", description: "", age: "", id: "" }])

  // Characters request
  axios.get("/api/characters").then(
    (response) => {
      setData(response.data)
    },
    (error) => {
      alert(error)
    }
  )

  return (
    <div>
      <input type="text" />
      <div>
        {data.map(e => {
          return <>
            <p>{e.name + " " + e.age + " " + e.description}</p>
          </>
        })}
      </div>
    </div>
  )
}
