import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import React from 'react'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </AuthProvider>
  </React.StrictMode>
)
