import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Auth from '../../pages/auth/Auth';
import Employee from '../../admin/Index';
const index = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<Auth />} />
            <Route path="/employee" element={<Employee/>} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default index