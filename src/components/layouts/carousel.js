import Card from 'react-bootstrap/Card';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Carousels = () => {

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  const textStyle = {
    truncate: {
      width: "250px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }

  const nextPage = (props) => {
    if(props === "+"){
      setPage((prev) => prev + 1)
  }
  if(props === "-"){
    setPage((prev) => prev - 1)
  }
  }

  const detailMovies = (data) => {
    console.log(data)

    axios({
      method: "get",
      url:  `${process.env.REACT_APP_BASE_URL}movie/${data}?api_key=${process.env.REACT_APP_API_URL}&language=en-US`
    })
    .then(function (response) {
      console.log(response.data)
    })
    
  }

  useEffect(() => {

    axios({
      method: "get", 
      url: `${process.env.REACT_APP_BASE_URL}movie/popular?api_key=${process.env.REACT_APP_API_URL}&language=en-US&page=${page}`
    })
    .then((result) => setData(result.data.results.slice(0, 4)))
  }, [page])
  
  return (
    <React.Fragment>
      <br></br>
      <h2>Now Playing</h2>
        <Row xs={1} md={4}>
                 
          {data.map((data, index) => {
          return(
            <>
            <br></br>
            <Col> 
            <Card style={{ width: '18rem' }} key={index}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} />
            <Card.Body>
              <Card.Title style={textStyle.truncate} onClick={(e) => detailMovies(data.id)}>{data.title}</Card.Title>
              <Card.Text style={textStyle.truncate}>
                {data.overview}
              </Card.Text>
              <Button variant="success">Rating : {data.vote_average}</Button>
              <Button variant="warning">Vote : {data.vote_count}</Button>
            </Card.Body>
          </Card> 
          <br></br>
          </Col> 
          
            </>
          )
        })}
        
      </Row>
      {
        page === 1 ?
        <Button className="btn btn-success" onClick={() => nextPage("+")}>Next Page</Button>
        :
        <>
        <Button className="btn btn-success" onClick={() => nextPage("+")}>Next Page</Button>
        <Button className="btn btn-warning" onClick={() => nextPage("-")}>Prev Page</Button>
        </>
      }
      
      <br></br>
    </React.Fragment>
  )
}

export default Carousels