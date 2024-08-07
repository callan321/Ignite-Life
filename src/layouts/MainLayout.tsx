import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
