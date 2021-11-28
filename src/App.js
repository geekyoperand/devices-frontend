import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'antd/dist/antd.css';
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div>
      <ToastContainer />
      <Dashboard />
    </div>
  );
}

export default App;
