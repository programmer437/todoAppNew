// Import necessary React modules
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/main/HomePage";
import Signup from "./Pages/auth/Signup";
import Login from "./Pages/auth/Login";
import PrivateRoute from "./components/Helpers/PrivateRoute";
import Dashboard from "./Pages/user/Dashboard";
import Today from './Pages/user/Dashboard/ListBoxContent/Today'
import Upcoming from './Pages/user/Dashboard/ListBoxContent/Upcoming'

// Define the main App component
function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/privateRoute" element={<PrivateRoute />} >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/today" element={<Today />} />
        <Route path="dashboard/upcoming" element={<Upcoming />} />
      </Route>
      <Route path="/login" element={<Login />} />



      
    </Routes>
  );
}

export default App;
