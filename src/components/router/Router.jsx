import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Auth from '../../pages/auth/Auth';
const Router = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Auth />} />
      </Routes>
    </React.Fragment>
  );
};

export default Router;
