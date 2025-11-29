import Table_List from "../features/Table_List"
import getCurrentWeek from "../shared/Current_Week"
import Page_Title from "../shared/Page_Title"
import Static_Table from "../widgets/Static_Table"
import "./Main_Page.css"

//
// Главная страница со всеми расписаниями
//

export default function Main_Page() {
    return (
        <div className="page_wrapper">
            <Page_Title title="Главная"/>

            <div className="page_container">
                
                <div className="navbar">
                    <h1>{getCurrentWeek()} неделя</h1>
                    <button className="nav_button">Группы</button>
                    <button className="nav_button">Кафедра</button>
                </div>

                <div className="tables_container">
                    <Table_List/>
                    <Static_Table/>
                </div>
            
            </div>
        </div>
    )
}