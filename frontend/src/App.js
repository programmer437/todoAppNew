// Import necessary React modules
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/main/HomePage";
import Signup from "./Pages/auth/Signup";

// Define the main App component
function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />


      
    </Routes>
  );
}

export default App;
