import { Outlet } from "react-router-dom";
import Footer from "../widgets/Footer";
import Header from "../widgets/Header";
import "./App.css"

//
// Обертка для вывода страницы
//

export default function Layout() {
  return (
    <>
      <Header/>

      <div className="body_content">
        <div className="left_block"/>

        <Outlet />

        <div className="right_block"/>
      </div>
      
      <Footer />
    </>
  )
}