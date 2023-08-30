import React from 'react'
//import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/beam-frontend",
    element: <App view='Home' />,
  },
  {
    path: "/beam-frontend/articles",
    element: <App view='Articles' />,
  },
  {
    path: "/beam-frontend/contact",
    element: <App view='Contact' />,
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
