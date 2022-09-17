import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'
import Header from './components/layouts/header'
import Home from './components/layouts/home'
import Main from './components/layouts/main'
import Search from './components/layouts/search'

const App = () => {
  return (
    <div>
      <Main>
      <Router>
        <React.Fragment>
          <Header></Header>
          <Container>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/search" element={<Search/>}/>
            </Routes>
            </Container>
        </React.Fragment>
      </Router>
      </Main>
      
      
      
    </div>
  )
}

export default App