import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Database, ApiForm, CharacterPage } from './pages/index.js'
import { Mainpage } from './pages/Mainpage.js'

export const App = () => {

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/create" element={<ApiForm config={{ ApiUrl: "", method: "GET", name: true, age: true, description: true }} />} />
          <Route path="/delete" element={<ApiForm config={{ ApiUrl: "", method: "GET", name: true, age: false, description: false }} />} />
          <Route path="/update" element={<ApiForm config={{ ApiUrl: "", method: "GET", name: true, age: true, description: true }} />} />
          <Route path="/read" element={<Database />} />
          <Route path="/character/:character" element={<CharacterPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
