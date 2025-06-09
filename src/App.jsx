import { useState, useEffect } from 'react';
import './App.css';
import Message from './Message';
import Cube from './Cube'; // Import the Cube component

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Message />
      <Cube position={mousePosition} /> {/* Render the Cube and pass the mousePosition */}
    </>
  );
}

export default App;
