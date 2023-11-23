import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function RandomPictures() {
  const imagesPerPage = 20;
  const [apodImages, setApodImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [maxPages, setMaxPages] = useState(5)

  useEffect(() => {
    fetchMoreImages();
  }, []);

  const fetchMoreImages = async () => {
    try {
      setLoading(true);
      const start = currentPage * imagesPerPage;
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=pW4NzGSYWgso3Cx1tqSsFRffDSMVUxF8y9yuaezz&count=${imagesPerPage}`);
      const newImages = await response.json();
      setApodImages(prevImages => [...prevImages, ...newImages]);
      setLoading(false); // Set loading to false after updating the state
      console.log(currentPage);
      console.log(apodImages);
      console.log(currentImages);
    } catch (error) {
      if(error.response.status === 404) {
      //console.error('Error fetching random images:', error);
      //setLoading(false); // Set loading to false in case of an error
      setMaxPages(currentPage)
    } else {
      console.log(error)
    }
  }
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      console.log(currentPage)
    }
  
  };

  const handleNext = () => {
    if(currentPage < maxPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
    }

    const startIndex = currentPage * imagesPerPage;  
    const endIndex = startIndex + imagesPerPage;
    const currentImages = apodImages.slice(startIndex, endIndex);

 return (
    <>
    <h1 className='text-center bold display-3 mb-4'>Celestial Captures</h1>
    <div className='btnContainer'>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous page
      </button>
      <button onClick={handleNext}>Next page</button>
      </div>  
      
      <Container fluid>
        <Row className='picture-row' style={{ marginTop: '5px' }}>
          {apodImages.map((picture) => {
            const { date, explanation, url, title } = picture;
            return (
              <Col
                as={Link}
                key={title}
                xs={3}
                md={3}
                lg={3}
                style={{ backgroundImage: `url(${url})` }}
                to={`/RandomPictureS/${date}`}
              >
                {title}
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  )
}