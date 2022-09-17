import React from 'react'
import { useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Search = () => {
  const {state} = useLocation();
  console.log(state.results)

  const textStyle = {
    truncate: {
      width: "250px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }

  return (
    <div>
      <br></br>
      <h3>Results</h3>
      <p>Jumlah hasil pencarian : {state.results.length}</p>

      <Row xs={1} md={4}>
      {state.results.map((data, index) => {
          return(
            <>
            
            <br></br>
            <Col> 
            <Card style={{ width: '18rem' }} key={index}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} />
            <Card.Body>
              <Card.Title style={textStyle.truncate}>{data.title}</Card.Title>
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
    </div>
  )
}

export default Search