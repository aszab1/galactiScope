import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function RandomPictures() {
  
  const imagesPerPage = 20
  const [images, setImages] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true)

        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=pW4NzGSYWgso3Cx1tqSsFRffDSMVUxF8y9yuaezz&count=${imagesPerPage}`)
        const data = await response.json()
        setImages(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching images:', error)
        setLoading(false)
      }
    }

    fetchImages()
  }, [currentPage])

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1)
    
  }

  const handleNext = () => {
  
      setCurrentPage(currentPage + 1)
    
  }

  const handleVideo = (videoUrl) => {
    window.open(videoUrl, 'https://api.nasa.gov/planetary/apod?api_key=pW4NzGSYWgso3Cx1tqSsFRffDSMVUxF8y9yuaezz&date')
  }


  return (
    <>
      <h1 className='text-center bold display-3 mb-4'><i>Celestial Captures</i></h1>
      <div className='btnContainer'>
        <button type='button' class='btn' onClick={handlePrevious} disabled={currentPage === 1}>
          Previous page
        </button>
        <button type='button' class='btn' onClick={handleNext}>
          Next page
        </button>
      </div>
    

      <Container fluid>
      <Row className='picture-row'>
          {images.map((image) => {
            if (image.media_type === 'video') {
              return (
                <Col className='video' key={image.date}>
                  <video controls src={image.url} alt={image.title} />
                  {image.title}
                </Col>
              )
            } else {

            const { date, url, title } = image
            return (
              <Col
                as={Link}
                key={image.date}
                xs={6}
                md={4}
                lg={3}
                style={{ backgroundImage: `url(${url})` }}
                to={`/RandomPictureS/${date}`}
              >
                {image.title} 
              </Col>
              
            )
            }
          })}
        </Row>
      </Container>
    </>
  )
}