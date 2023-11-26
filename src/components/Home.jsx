import { useLoaderData } from "react-router-dom"
import { Card, Container } from "react-bootstrap"
import { useState } from "react"
import backgroundImage from "./pictures/IrF.gif"

export default function Home() {
  const picOfDay = useLoaderData()
  const [ expand, setExpand ] = useState(false)
  const { explanation, url } = picOfDay
  
  const showText = expand ? explanation : `${explanation.substring(0, 150)}`

  function toggleExpand() {
    setExpand(!expand)
  }

  return (
  <main className="backgroundImage"
  style= {{
    backgroundImage: "url(" + backgroundImage + ")",
    backgroundSize: "cover",
    height: "200vh"
  }}>
    
    <Container className="containerCard">
    <div className="mt-5">
    <div className="d-flex justify-content-center">
  <Card className="cardImage" class="card offset-3" style={{ width: '60rem' }}>
  <Card.Img variant="top" src={url} />
    <Card.Body>
      <Card.Title>Picture of the Day</Card.Title>
      <Card.Text>{showText}
      <span className={`readMore ${expand ? 'showLess' : 'showMore'}`} 
      style={{ color: 'blue', cursor: 'pointer' }} onClick={toggleExpand}>
        ...
      </span>
      </Card.Text>

    </Card.Body>
  </Card>
  </div>
  </div>
  </Container>
  
</main>
  )
}
