import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AddNewTask from "./pages/AddNewTask";
import EditTask from "./pages/EditTask";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" replace />} />
          <Route path="/tasks" element={<Home />} />
          <Route path="/addNewTask" element={<AddNewTask />} />
          <Route path="/editTask/:taskId" element={<EditTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
