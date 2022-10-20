import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Details from "./views/details";
import Home from "./views/home";

function App() {
  const handleSearch = (searchRequest) => {
    console.log(searchRequest);
  }

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Details />} path="details" />
      </Routes>
    </div>
  );
}

export default App;
