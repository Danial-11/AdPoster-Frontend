import React from "react";
import { Routes, Route } from "react-router-dom";
import ShowAllPosters from "./components/ShowAllPoster/ShowAllPosters";
import CreatePoster from "./components/CreatePoster/CreatePoster";
import EditPoster from "./components/EditPoster/EditPoster";
import NavbarComponent from './components/Navbar/Navbar'
function App() {
  return (
    <>
    <NavbarComponent />
    <Routes>
      <Route path="/edit/:id" element={<EditPoster />} />
      <Route path="/create" element={<CreatePoster />} />
      <Route path="/" element={<ShowAllPosters />} />
    </Routes>
    </>
  );
}

export default App;
