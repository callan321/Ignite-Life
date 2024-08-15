import { Outlet } from "react-router-dom";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden">
      <Header />
      <main className="-m-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
