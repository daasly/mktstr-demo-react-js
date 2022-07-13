import Nav from './Components/Nav'
import Main from './Pages/Main'
import About from './Pages/About'
import Form from './Pages/Form'
import Box from '@mui/material/Box'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Box>
      <Nav />
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/form'} element={<Form />} />
      </Routes>
    </Box>
  )
}

export default App
