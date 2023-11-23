import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function RandomPictures(){

  const pictures = useLoaderData()
  const [ apodImages, setapodImages ] = useState([])

  useEffect (() => {
    

    console.log(pictures)
  }, [])

  return (
    <>
    <h1 className='text-center bold display-3 mb-4'>Anything</h1>
    <Container fluid>
      <Row className='picture-row' style={{  marginTop: '5px' }}>
        { pictures.map(picture => {
          const { date, explanation, url, title } = picture
          return (
            <Col 
              as={Link}
              key={title} 
              xs={6} 
              md={4} 
              lg={3}
              style={ { backgroundImage: `url(${url})` } }
              to={`/RandomPictureS/${date}`}
            >
              {name}
            </Col>
          )
        })}
      </Row>
    </Container>
  </>
  )
}