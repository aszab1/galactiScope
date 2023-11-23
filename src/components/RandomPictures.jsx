import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function RandomPictures(){

  const imagesPerPage = 20
  const pictures = useLoaderData()
  const [ apodImages, setApodImages ] = useState([])
  const [ currentPage, setCurrentPage] = useState(1)
  const [ loading, setLoading] = useState(false)


 //const totalPages = Math.ceil(apodImages.length / imagesPerPage)

  useEffect (() => {
    fetchMoreImages()
  }, [])

  const fetchMoreImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=pW4NzGSYWgso3Cx1tqSsFRffDSMVUxF8y9yuaezz&count=${imagesPerPage}`)
        const newImages = await response.json()
        setApodImages(newImages)
    }catch(error) {
      console.error('Error fetching random images:', error)
    } finally {
      setLoading(false)
    }

  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    console.log(currentPage)
    console.log(apodImages)
  } 
  
  const handleNext = () => {
   if (currentPage < Math.ceil(pictures.length / imagesPerPage)) {
      console.log('buttonClicked') 
    } else {

    fetchMoreImages()
    setCurrentPage(currentPage + 1)
    console.log(imagesPerPage)
    console.log(currentPage)
    console.log(apodImages)
    }
  }

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = apodImages.slice(indexOfFirstImage, indexOfLastImage);

  return (
    <>
    <button onClick={handlePrevious} disabled={currentPage === 1}>Previous page</button>
    <button onClick={handleNext}>Next page</button>
    <h1 className='text-center bold display-3 mb-4'>Anything</h1>
    <Container fluid>
      <Row className='picture-row' style={{  marginTop: '5px' }}>
        { currentImages.map(picture => {
          const { date, explanation, url, title } = picture
          return (
            <Col 
              as={Link}
              key={title} 
              xs={3} 
              md={3} 
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
