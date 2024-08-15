import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/mainLayout/MainLayout.tsx";
import Home from "./pages/home/Home.tsx";
import About from "./pages/About.tsx";
import Book from "./pages/Book.tsx";
import Contact from "./pages/Contact.tsx";
import Bowen from "./pages/Bowen.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bowen" element={<Bowen />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
