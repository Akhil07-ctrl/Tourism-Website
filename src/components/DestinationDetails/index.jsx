import React from 'react';
import { useParams } from 'react-router-dom';
import destinations from '../Destinations';
import './index.css';

const DestinationDetails = () => {
  const { id } = useParams();
  const destinationId = parseInt(id, 10);
  const destination = destinations.find(dest => dest.id === destinationId);

  if (!destination) {
    return (
      <div className="detail-container" style={{ textAlign: 'center' }}>
        <h2>Destination not found</h2>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <h2>{destination.name}</h2>
      <img className="detail-image" src={destination.image} alt={destination.name} />
      <p>{destination.description}</p>
      <p>
        <strong>Rating:</strong> {destination.rating || 'Not available'}
      </p>
      <p>
        <strong>Best time to visit:</strong> {destination.bestTime || 'Not specified'}
      </p>
      <button className="detail-button">Book Now</button>
    </div>
  );
};

export default DestinationDetails;
