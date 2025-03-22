import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import destinations from '../Destinations';
import './index.css';

const DestinationList = () => {
  const [favorites, setFavorites] = useState([]);
  
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="destination-container">
      <ul className="destination-list">
        {destinations.map(destination => (
          <li 
            className={`destination-list-item ${favorites.includes(destination.id) ? 'favorite' : ''}`}
            key={destination.id}
          >
            <Link to={`/destination/${destination.id}`} className="destination-link">
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="destination-image" 
              />
              <h3>{destination.name}</h3>
              <h5>{destination.bestTime}</h5>
              <h6>{destination.rating}</h6>
            </Link>
            <button 
              onClick={() => toggleFavorite(destination.id)} 
              className="favorite-button"
            >
              {favorites.includes(destination.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationList;
