import Table_List from "../features/Table_List"
import Page_Title from "../shared/Page_Title"

//
// Главная страница со всеми расписаниями
//

export default function Main_Page() {
    return <>
        <Page_Title title="Главная"/>
        <div className="container">
            <Table_List/>
        </div>
    </>
}