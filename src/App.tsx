import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage"
import {AttractionPage} from "./pages/AttractionPage";
import {BikePathsPage} from "./pages/BikePathsPage";
import {EventPosterPage} from "./pages/EventPosterPage";
import {PhotoshootPage} from "./pages/PhotoshootPage";
import {TheatersAndMuseumsPage} from "./pages/TheatersAndMuseumsPage";
import {ExcursionPage} from "./pages/ExcursionPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/attraction" element={<AttractionPage/>}/>
        <Route path="/bike" element={<BikePathsPage/>}/>
        <Route path="/photoshoot" element={<PhotoshootPage/>}/>
        <Route path="/excursion" element={<ExcursionPage/>}/>
      </Routes>
    </>
  );
}
export default App;
