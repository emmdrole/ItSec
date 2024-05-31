
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BruteForce from './components/BruteForce'
import SqlInjection from './components/SqlInjection'
import FileInclusion from './components/FileInclusion'
import Xss from './components/Xss'
import NavBar from './components/NavBar'



function App() {
  

  return (
    <>
  <div className="big-container">
   <div className="mainapp-container">

 
   <NavBar/>
    <Routes>
      <Route index element={<BruteForce />} />
      <Route path='/sql' element={<SqlInjection />} />
      <Route path='/fileinclusion' element={<FileInclusion />} />
      <Route path='/xss' element={<Xss />} />
      
    </Routes>
    
    
    </div>
  </div>
    </>
  )
}

export default App
