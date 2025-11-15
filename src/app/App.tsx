import { Route, Routes } from "react-router-dom";
import Main_Page from "../pages/Main_Page";
import Personal_Account_Page from "../pages/Personal_Account_Page";
import Layout from "./Layout";
import Not_Found_Page from "../pages/Not_Found_Page";

//
// Компонент для маршрутизации
//

export default function App() {
    return (
    <>
        <Routes>
            <Route path='/' element={<Layout />}>
            <Route index element={<Main_Page/>}/>
            <Route path='/personal_account' element={<Personal_Account_Page/>}/>
            <Route path='*' element={<Not_Found_Page />}/>
            </Route>
        </Routes>
    </>
    )
}