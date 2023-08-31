import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Mainpage } from './pages/Mainpage.tsx'
export const App = () => {

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Mainpage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
