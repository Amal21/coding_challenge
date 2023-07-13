import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home";
import City from "./pages/city";
import PageNotFound from "./pages/pageNotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:name" element={<City />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
