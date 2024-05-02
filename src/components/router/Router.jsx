import React from "react";
import { Route, Routes} from 'react-router-dom';
import Home from '../../pages/home/Home';
import Auth from '../../pages/auth/Auth';
import ViewItems from '../../pages/viewItems/viewItems'
const Router = () => {
  return (
    <>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<Auth />} />
          <Route path="/view-list" element={<ViewItems />} />
        </Routes>
      </React.Fragment>
    </>
  );
};

export default Router;
