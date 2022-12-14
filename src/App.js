import "./App.css";
import React from "react";
import Header from "./Header";
import Section from "./Section";
import SmallSection from "./SmallSection";
import LastSection from "./LastSection";
import Carousel from "./Carousel";
import { Data } from "./Data";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Women from "./Women";
import Login from "./Login";

const App = () => {
  return (
    <>
      <Header />
      <Section />
      <SmallSection />
      <LastSection />
      <Carousel slides={Data} />
      <Routes>
        <Route path="/women" element={<Women />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
