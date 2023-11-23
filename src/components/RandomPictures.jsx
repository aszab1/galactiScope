import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function RandomPictures() {
  const imagesPerPage = 20;
  const images = useLoaderData();
  const [apodImages, setApodImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [maxPages, setMaxPages] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);

        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=pW4NzGSYWgso3Cx1tqSsFRffDSMVUxF8y9yuaezz&count=${imagesPerPage}`);
        const newImages = await response.json();
        setApodImages(newImages);
        setMaxPages(Math.ceil(newImages.length / imagesPerPage));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching random images:', error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };


  const start = (currentPage - 1) * imagesPerPage;
  const end = start + imagesPerPage;
  const currentImages = apodImages.slice(start, end);

  return (
    <>
      <h1 className='text-center bold display-3 mb-4'>Celestial Captures</h1>
      <div className='btnContainer'>
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous page
        </button>
        <button onClick={handleNext}>
          Next page
        </button>
      </div>

      <Container fluid>
        <Row className='picture-row' style={{ marginTop: '5px' }}>
          {currentImages.map((picture, index) => {
            const { date, explanation, url, title } = picture;
            return (
              <Col
                as={Link}
                key={`${title}-${index}`}
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
  );
}