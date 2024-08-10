import React from "react";
import { Route, Routes} from 'react-router-dom';
import Home from '../../pages/home/Home';
import Auth from '../../pages/auth/Auth';
import ViewItems from '../../pages/viewItems/viewItems';
import Details from '../../pages/productDetails/details';
import MyProfile from "../UserMenu/MyProfile/MyProfile";
import Layout from "../layout/Layout";

const Router = () => {
  return (
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/user" element={<Auth />} />
            <Route path="/view-list" element={<ViewItems />}/>
            <Route path="/product-details" element={<Details />} />
            <Route path="/my-profile" element={<MyProfile />} />
          </Route>
        </Routes>
      </React.Fragment>
  );
};

export default Router;
