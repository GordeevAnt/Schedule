import { Outlet } from "react-router-dom";
import Footer from "../widgets/Footer";
import Header from "../widgets/Header";

//
// Обертка для вывода страницы
//

export default function Layout() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer />
    </>
  )
}