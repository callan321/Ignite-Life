import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import About from "./pages/About.tsx";
import Book from "./pages/Book.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index  element={<Home />}  />
          <Route path='/About'  element={<About />}  />
          <Route path='/Book' element={<Book />}  />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
