import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Book from "./pages/Book.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Book" element={<Book />} />
      </Route>
    </Routes>
  );
}
