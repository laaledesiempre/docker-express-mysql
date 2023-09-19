import './ApiForm.css'
import { ChangeEvent, FormEvent, useState } from "react"
import axios from "axios"

export const ApiForm = ({ config = {
  id: true,
  ApiUrl: "example.com",
  method: "GET",
  name: false,
  age: false,
  description: false
} }) => {

  //States

  const [id, setID] = useState(0)
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [description, setDescription] = useState("")

  // Request handlers

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Get request (TODO)

    if (config.method == "GET") {
      axios.get(config.ApiUrl).then(
        (response) => {
          console.log(response)
          //todo
        }, (error) => alert(error)
      )

      // Post request (For testing)

    } else if (config.method == "POST") {
      axios.post(config.ApiUrl, { name: name, age: age, description: description }).then(
        (response) => {
          console.log(response)
          alert("Added successfully")
        }, (error) => alert(error)
      )

      // Update request

    } else if (config.method == "UPDATE") {
      axios.put(config.ApiUrl, { id, name, age, description }).then(
        (response) => {
          console.log(response)
          //todo
        }, (error) => alert(error)
      )

      // Delete request

    } else if (config.method == "DELETE") {
      axios.delete(config.ApiUrl, { headers: {}, data: { id } }).then(
        (response) => {
          console.log(response)
          //todo
        }, (error) => alert(error)
      )
    }
  }

  // Change Handler

  const changeHandler = (e: ChangeEvent, func: Function) => {
    const target = e.target as HTMLInputElement
    func(target.value)
  }

  // Form Return
  return (

    <form className="api-form" onSubmit={(e) => handleSubmit(e)}>

      {/*ID*/}
      {config.name && <label htmlFor={"id"}>id</label>}
      {config.name && <input id={"id"} required onChange={(e) => changeHandler(e, setID)} />}

      {/*Name*/}
      {config.name && <label htmlFor={"name"}>Nombre</label>}
      {config.name && <input id={"name"} required onChange={(e) => changeHandler(e, setName)} />}

      {/*Age*/}
      {config.age && <label htmlFor={"age"}>Edad</label>}
      {config.age && <input id={"age"} type="number" required onChange={(e) => changeHandler(e, setAge)} />}

      {/*Description*/}
      {config.description && <label htmlFor={"description"}>Descripción</label>}
      {config.description && <textarea id={"description"} required onChange={(e) => changeHandler(e, setDescription)} />}

      {/*Submit*/}
      <button type="submit">Enviar</button>

    </form>

  )
}
