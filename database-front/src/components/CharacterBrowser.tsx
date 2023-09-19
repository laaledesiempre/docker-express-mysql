import axios from "axios"
export const CharacterBrowser = () => {

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
