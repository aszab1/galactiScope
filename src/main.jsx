import  ReactDOM  from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// Components
import App from './App'
import Home from './components/Home'
import RandomPictures from './components/RandomPictures'
import RandomPicSelect from './components/RandomPicSelect'


// Styles 
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

// Loaders
import { getPicOfDay, getRandomPictures, getSinglePicture } from './utils/loaders'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: getPicOfDay
      },
      {
        path: '/RandomPictures',
        element: <RandomPictures />,
        loader: getRandomPictures
      },
      {
        path: '/RandomPictures/:date',
        element: <RandomPicSelect />,
        loader: async ({ params }) => getSinglePicture(params.date)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
