import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HomePage } from './Pages/HomePage'
import SecodPage from './Pages/SecodPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second" element={<SecodPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
