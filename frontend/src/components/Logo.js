import React from 'react';
import shopImage from '../assest/shop.jpg';

const Logo = ({ w, h }) => {
  return (
    <div>
      {/* Apply inline styling to adjust the height */}
      <img src={shopImage} alt="Shop" style={{ height: '64px' }} />
    </div>
  );
  
}

export default Logo