import './ApiForm.css'
import { ChangeEvent, FormEvent, useState } from "react"
import axios from "axios"

export const ApiForm = ({ config = {
  ApiUrl: "example.com",
  method: "GET",
  name: false,
  age: false,
  description: false
} }) => {

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [description, setDescription] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Get request

    if (config.method == "GET") {
      axios.get(config.ApiUrl).then(
        (response) => {
          console.log(response)
          //todo
        }, (error) => alert(error)
      )

      // Post request

    } else if (config.method == "POST") {
      axios.post(config.ApiUrl, { name, age, description }).then(
        (response) => {
          console.log(response)
          //todo
        }, (error) => alert(error)
      )

      // Update request

    } else if (config.method == "UPDATE") {
      axios.put(config.ApiUrl, { name, age, description }).then(
        (response) => {
          console.log(response)
          //todo
        }, (error) => alert(error)
      )

      // Delete request

    } else if (config.method == "DELETE") {
      axios.delete(config.ApiUrl, { headers: {}, data: { name } }).then(
        (response) => {
          console.log(response)
          //todo
        }, (error) => alert(error)
      )
    }
  }

  const changeHandler = (e: ChangeEvent, func: Function) => {
    const target = e.target as HTMLInputElement
    func(target.value)
  }
  const number = Math.floor(Math.random() * 20)
  return (

    <form className="api-form" onSubmit={(e) => handleSubmit(e)}>
      {config.name && <label htmlFor={"name" + number}>Nombre</label>}
      {config.name && <input id={"name" + number} required onChange={(e) => changeHandler(e, setName)} />}
      {config.age && <label htmlFor={"age" + number}>Edad</label>}
      {config.age && <input id={"age" + number} type="number" required onChange={(e) => changeHandler(e, setAge)} />}
      {config.description && <label htmlFor={"description" + number}>Descripción</label>}
      {config.description && <textarea id={"description" + number} required onChange={(e) => changeHandler(e, setDescription)} />}
      <button type="submit">Enviar</button>
    </form>

  )
}
