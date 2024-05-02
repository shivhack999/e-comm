import React from "react";
import { Route, Routes} from 'react-router-dom';
import Home from '../../pages/home/Home';
import ViewItems from '../../pages/footerMenu/fMenu';
const Router = () => {
  return (
    <>
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-all" element={<ViewItems />}/>
      </Routes>
    </React.Fragment>
    </>
  );
};

export default Router;
