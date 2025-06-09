import React from 'react';
import './Cube.css';

// Accept position as a prop now
const Cube = ({ position }) => {
  // Inline styles will be used to position the cube.
  // The spinning animation and other base styles are still in Cube.css.
  const style = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    // The transform for centering is already part of the animation in Cube.css,
    // but if the cube jitters, we might need to adjust how transform is applied
    // either here or in the CSS. For now, let's keep it simple.
  };

  return (
    <div className="cube" style={style}>
      <div className="front"></div>
      <div className="back"></div>
      <div className="left"></div>
      <div className="right"></div>
      <div className="top"></div>
      <div className="bottom"></div>
    </div>
  );
};

export default Cube;
