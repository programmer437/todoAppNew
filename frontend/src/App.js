// Import necessary React modules
import React, { useEffect, useState } from 'react';
import './App.css'; // Import your CSS file for styling

// Define the main App component
function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <div className="left-scroll-content" style={{ transform: `translateY(${scrollPosition}px)` }}>
        {/* Content for the left side */}
        <div className="left-content">
          <h1>Welcome to My Split Scrolling Page</h1>
          <p>This is the left side content that will scroll up as you scroll down.</p>
        </div>
        <div className="left-content">
          <h1>Welcome to My Split Scrolling Page</h1>
          <p>This is the left side content that will scroll up as you scroll down.</p>
        </div>
        <div className="left-content">
          <h1>Welcome to My Split Scrolling Page</h1>
          <p>This is the left side content that will scroll up as you scroll down.</p>
        </div>
      </div>
      <div className="right-static-content">
        {/* Content for the right side */}
        <div className="right-content">
          <p>This is the right side content that will remain static as you scroll.</p>
          <p>Feel free to add more content here!</p>
        </div>
        <div className="right-content">
          <p>This is the right side content that will remain static as you scroll.</p>
          <p>Feel free to add more content here!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
