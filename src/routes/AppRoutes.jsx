import React from "react";
import { Route, Routes } from "react-router";

import Footer from "../components/pages/footer";
import MainLayouts from "../mainLayouts/MainLayouts";
import Home from "../components/pages/Home";



const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element ={<MainLayouts/>}> 
        <Route path="/" element={<Home/> } />
        <Route path="/products" element={<Footer/>} />
        </Route>
         
      </Routes>
    </>
  );
};

export default AppRoutes;
