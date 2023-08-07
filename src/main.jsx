import React from 'react'
//import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/flowfuel-frontend",
    element: <App />,
  },
  {
    path: "/flowfuel-frontend/about",
    element: <h1>About</h1>,
  },
  {
    path: "/flowfuel-frontend/contact",
    element: <h1>Contact</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {//<ChakraProvider>
    }
      <RouterProvider router={router} />
    {//</ChakraProvider>
    }
  </React.StrictMode>,
)
