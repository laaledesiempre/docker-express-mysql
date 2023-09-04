import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Mainpage } from './pages/Mainpage.tsx'
import { Database } from './pages/Database.tsx'

export const App = () => {

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<ApiForm config={{ ApiUrl: "", method: "GET", name: true, age: true, description: true }} />} />
          <Route path="/delete" element={<ApiForm config={{ ApiUrl: "", method: "GET", name: true, age: false, description: false }} />} />
          <Route path="/update" element={<ApiForm config={{ ApiUrl: "", method: "GET", name: true, age: true, description: true }} />} />
          <Route path="/read" element={<Database />} />
          <Route path="/:character" element={<CharacterPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
