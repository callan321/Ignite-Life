import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "../components/sections/Header.tsx";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="-m-16 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
