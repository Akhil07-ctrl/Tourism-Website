import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel } from 'react-bootstrap';
import DestinationList from './components/DestinationList';
import DestinationDetail from './components/DestinationDetails';
import ContactForm from './components/ContactForm';

import Header from "./components/Header"
import Footer from "./components/Footer";
// Import the custom CSS file
import './App.css';

const App = () => {
  return (
    <Router>
        <Header />
        {/* Bootstrap Carousel */}
        <Carousel className='custom-carousel'>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>

        <br />

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<DestinationList />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/contact" element={<ContactForm />} />
          {/* Additional routes for travel, destinations, and experience can be added here */}
        </Routes>
        <Footer />
    </Router>
  );
};

export default App;
