import React, { useEffect } from "react";

import Services from "./components/Services";
import Details from "./components/Details";
import { Routes, Route } from "react-router-dom";

import { servicesListRequest } from "./actions/servicesActions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(servicesListRequest());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Services />} />
      <Route path="/:id/details" element={<Details />} />
    </Routes>
  )
}

export default App;
