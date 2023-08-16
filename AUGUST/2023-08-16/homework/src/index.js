import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/header/Header'
import FirstSection from './components/first-section/FirstSection'
import About from './components/about/About'
import Service from './components/service/Service'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Header />
    <FirstSection />
    <About />
    <Service />
    <Contacts />
    <Footer />
  </React.StrictMode>
)
