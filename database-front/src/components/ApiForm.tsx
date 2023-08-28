import { ChangeEvent, FormEvent, useState } from "react"
import { FormProp } from "../types/types"
import axios from "axios"

export const ApiForm = (props: FormProp = {
  ApiUrl: "example.com",
  method: "GET",
  name: false,
  age: false,
  description: false
}) => {

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [description, setDescription] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault

    // Get request

    if (props.method == "GET") {
      axios.get(props.ApiUrl).then(
        (response) => {
          console.log(response)
          //todo
        }, (error) => alert(error)
      )

      // Post request

    } else if (props.method == "POST") {
      axios.post(props.ApiUrl, { name, age, description }).then(
        (response) => {
          console.log(response)
          //todo
        }, (error) => alert(error)
      )

      // Update request

    } else if (props.method == "UPDATE") {
      axios.put(props.ApiUrl, { name, age, description }).then(
        (response) => {
          console.log(response)
          //todo
        }, (error) => alert(error)
      )

      // Delete request

    } else if (props.method == "DELETE") {
      axios.delete(props.ApiUrl, { headers: {}, data: { name } }).then(
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

  return (

    <form onSubmit={(e) => handleSubmit(e)}>
      {props.name && <input required onChange={(e) => changeHandler(e, setName)}></input>}
      {props.age && <input type="number" required onChange={(e) => changeHandler(e, setAge)}></input>}
      {props.description && <input required onChange={(e) => changeHandler(e, setDescription)}></input>}
      <button type="submit">Enviar</button>
    </form>

  )
}
