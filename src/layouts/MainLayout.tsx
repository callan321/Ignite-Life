import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header.tsx";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header/>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
