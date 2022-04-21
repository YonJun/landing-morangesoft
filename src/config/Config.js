import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Form2 from "../components/form2/Form2";
import Form3 from "../components/form3/Form3";
import Form1 from "../components/form1/Form1";
import HomePage from "../pages/homePage/HomePage";
const Config = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/login-page1" element={<Form1 />}></Route>
        <Route exact path="/login-page2" element={<Form2 />}></Route>
        {/* <Route exact path="/login-page3" element={<Form3 />}></Route> */}
        <Route exact path="/checkout-plan/:id" element={<Form3 />}></Route>
      </Routes>
    </Router>
  );
};

export default Config;
