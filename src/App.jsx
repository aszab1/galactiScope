import { Outlet } from 'react-router-dom'

// Components
import Nav from './components/Nav.jsx'

// import Footer from './components/Footer' 


function App() {
  

  return (
    <>
      {/* Nav bar here, Modal design, not fullscreen */}
      <Nav />
      <main>
        {/* Outlet in here, renders on homepage and can toggle between pages using navbar. */}
        <Outlet />
      </main>
      {/* Footer, containing GA symbol? Completed by: names wrapped in A tags to github accounts. */}
      {/* <Footer /> */}
    </>
  )
}

export default App