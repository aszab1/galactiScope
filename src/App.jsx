import { Outlet, useNavigation } from 'react-router-dom'


// Components
import Nav from './components/Nav.jsx'
import { Spinner } from 'react-bootstrap'

// import Footer from './components/Footer' 


function App() {
  const navigation = useNavigation()

  return (
    <>
      {/* Nav bar here, Modal design, not fullscreen */}
      <Nav />
      <main>
        {
          navigation.state === 'idle' ?
          <Outlet />
          :
          <div className="centered" class="d-flex justify-content-center align-items-center h-100">
            <Spinner animation='border' />
          </div>
        }
      </main>
      {/* Footer, containing GA symbol? Completed by: names wrapped in A tags to github accounts. */}
      {/* <Footer /> */}
    </>
  )
}

export default App