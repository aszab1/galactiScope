import { useState } from 'react'
import { Link } from 'react-router-dom'

// Images
import nasaLogo from './pictures/NASA_logo.svg'


// Bootstrap Components
import Modal from 'react-bootstrap/Modal'

export default function Nav(){

  // ! State
  const [smShow, setSmShow] = useState(false)


  return (
    <>
      <header className='p-2 p-md-3 p-lg-4'>
        <Link to="/"><img className='logo-icon' src={nasaLogo} alt="Nasa Logo" /></Link>
        <button className='nav-toggle' onClick={() => setSmShow(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <Modal size='sm' show={smShow} onHide={() => setSmShow(false)}>
        <Modal.Header closeButton>
          <nav onClick={() => setSmShow(false)}>
            <Link to="/"><i className='bold display-2'>Home</i></Link>
            <Link to="/RandomPictures"><i className='bold display-2'> Image Library</i></Link>
          </nav>
        </Modal.Header>
      </Modal>
    </>
  )
}
