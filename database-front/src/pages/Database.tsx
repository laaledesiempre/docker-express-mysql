import React from 'react'

export const Database = () => {
  
  //States
  const [data, setData] = useState([])
  
  // Characters request
  axios.get("todo/api/characters").then(
    (response)=>{
      setData(response.data)
    },
    (error)=>{
      alert(error)
    }
  )
  
  return (
    <div className="Database">
      {
      data.map(e=>{
        return <>
        <p>{e.name + " " + e.age+ " " + e.description}</p>
        </>
      })      
      }
    </div>
  )
}
