// Import necessary React modules
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/main/HomePage";

// Define the main App component
function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
  );
}

export default App;
