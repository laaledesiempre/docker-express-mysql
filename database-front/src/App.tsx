import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Database, ApiForm, CharacterPage } from './pages/index.js'
import { Mainpage } from './pages/Mainpage.js'
import axios from 'axios'

export const App = () => {
  axios.get('http://192.168.69.11:3000/test').then((response) => console.log(response), (error) => console.log(error))
  axios.get('http://192.168.69.11:3000').then((response) => { console.log(response) }, (error) => { console.log(error) })
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/create" element={<ApiForm config={{ ApiUrl: "http://192.168.69.11:3000/api/character", method: "POST", id: false, name: true, age: true, description: true }} />} />
          <Route path="/delete" element={<ApiForm config={{ ApiUrl: "http://192.168.69.11:3000/api/character", method: "DELETE", id: true, name: false, age: false, description: false }} />} />
          <Route path="/update" element={<ApiForm config={{ ApiUrl: "http://192.168.69.11:3000/api/character", method: "UPDATE", id: true, name: true, age: true, description: true }} />} />
          <Route path="/read" element={<Database />} />
          <Route path="/character/:character" element={<CharacterPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
