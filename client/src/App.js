import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home";
import City from "./pages/city";
import PageNotFound from "./pages/pageNotFound";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city/:name" element={<City />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
