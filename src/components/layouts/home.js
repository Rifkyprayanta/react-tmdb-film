import React from 'react'
import Carousels from './carousel'
import Jumbotron from './jumbotron'

const Home = () => {
  return (
    <React.Fragment>
        <Jumbotron></Jumbotron>
        <Carousels></Carousels>
    </React.Fragment>
  )
}

export default Home