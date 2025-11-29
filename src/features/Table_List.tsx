// import Table_Item from "./Table_Item"
import Table_Item from "./Table_Item"
import "./Table_List.css"

//
// Контейнер с расписаниями
//

{/*return <Table_Item/> */}

export default function Table_List() {
    return <div className="scrollable_table">
        <Table_Item text="23а"/>
        <Table_Item text="23б"/>
        <Table_Item text="23в"/>
        <Table_Item text="23г"/>
        <Table_Item text="23д"/>
        <Table_Item text="23е"/>
        <Table_Item text="23ё"/>
        <Table_Item text="23ж"/>
    </div>
}