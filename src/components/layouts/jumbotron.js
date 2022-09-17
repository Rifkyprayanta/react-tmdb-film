import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Jumbotron = () => {
  const [movies, setMovies] = useState("")
  const [data, setData] = useState([])
  const navigate = useNavigate();

  const searchMovies = (e) => {
    console.log(movies)
    e.preventDefault(e)
    axios.get(`${process.env.REACT_APP_BASE_URL}search/movie?api_key=${process.env.REACT_APP_API_URL}&language=en-US&page=1&include_adult=false`, {
      params: {
        query: movies
      }
    })
      .then(function (response) {
        console.log(response)
        setData(response.data.results)
        navigate('/search', { state : response.data }
        )
      })
  }


  return (
    <div>
      <br></br>
      <Alert variant="success">
        <Alert.Heading>Welcome</Alert.Heading>
        <h6>
          Millions of movies, TV shows and people to discover. Explore now.
        </h6>


        <hr />
        <p className="mb-0">
          <Form onSubmit={searchMovies}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Wanna See Movies?</Form.Label>
              <Form.Control type="text" value={movies} onChange={(e) => setMovies(e.target.value)} placeholder="Enter Full Movies" />
              <br></br>
              <Button type="submit">Search</Button>

            </Form.Group>
          </Form>
        </p>
      </Alert>
    </div>
  )
}

export default Jumbotron