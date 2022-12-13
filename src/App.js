import React, { useEffect, useState } from "react";

import Services from "./components/Services";
import Details from "./components/Details";
import { Routes, Route } from "react-router-dom";

function App() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7070/api/services")
      .then((response) => response.json())
      .then((services) => setServices(services));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Services list={services} />} />
      <Route path="/:id/details" element={<Details list={services} />} />
    </Routes>
  )
}

export default App;
