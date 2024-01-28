import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ClerkProvider publishableKey='pk_test_Z3JhdGVmdWwtamFja2FsLTI2LmNsZXJrLmFjY291bnRzLmRldiQ'>
        <App />
    </ClerkProvider>
)
