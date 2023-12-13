

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from './Components/Sidebar';
import Home from './Components/pages/home';
import Interconectadas from './Components/pages/Interconectadas';
import Container from './Components/Layout/Container';



function App() {


  return (
    <>
      <Router>
        <Sidebar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Interconectadas" element={<Interconectadas />} />
          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App
