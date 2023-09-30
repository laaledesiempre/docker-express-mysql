import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { Database, ApiForm, CharacterPage } from './pages/index.js'
import { Mainpage } from './pages/Mainpage.js'
import axios from 'axios'

export const App = () => {
  axios.get('/api/test').then((response) => console.log(response), (error) => console.log(error))
  axios.get('/api').then((response) => { console.log(response) }, (error) => { console.log(error) })
  return (
    <BrowserRouter>
      <header>
        <Link to="/create">Create</Link>
        <Link to="/delete">delete</Link>
        <Link to="/update">update</Link>
        <Link to="/read">read</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/create" element={<ApiForm config={{ ApiUrl:  "/api/character", method: "POST", id: false, name: true, age: true, description: true }} />} />
          <Route path="/delete" element={<ApiForm config={{ ApiUrl:  "/api/character", method: "DELETE", id: true, name: false, age: false, description: false }} />} />
          <Route path="/update" element={<ApiForm config={{ ApiUrl:  "/api/character", method: "UPDATE", id: true, name: true, age: true, description: true }} />} />
          <Route path="/read" element={<Database />} />
          <Route path="/character/:character" element={<CharacterPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
