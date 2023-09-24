import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Statistics from './components/Statistics/Statistics.jsx'
import Donation from './components/donation/Donation.jsx'
import Home from './components/home/Home.jsx'
import MainLayout from './components/layout/MainLayout.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/donation',
        element: <Donation/>
      },
      {
        path: '/statistics',
        element: <Statistics/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
