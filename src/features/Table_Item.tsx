import "./Table_Item.css"

//
// Компонент с отдельным расписанием
//

export default function Table_Item({text} : {text: string}) {
    return <div className="table_item">
        <h1>{text}</h1>
        <table>
            <thead>
                <tr>
                    <th>Время</th>
                    <th>ПН</th>
                    <th>ВТ</th>
                    <th>СР</th>
                    <th>ЧТ</th>
                    <th>ПТ</th>
                    <th>СБ</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>8:00-9:35</td>
                    <td>Москва</td>
                    <td>СПб</td>
                    <td>08:00</td>
                    <td>09:30</td>
                    <td>Вылетел</td>
                    <td>Вылетел</td>
                </tr>
                <tr>
                    <td>9:45-11:20</td>
                    <td>СПб</td>
                    <td>Сочи</td>
                    <td>10:15</td>
                    <td>13:00</td>
                    <td>По </td>
                    <td>Вылетел</td>
                </tr>
                <tr>
                    <td>11:30-13:05</td>
                    <td>Ека</td>
                    <td>Москва</td>
                    <td>11:30</td>
                    <td>13:45</td>
                    <td>Задержан</td>
                    <td>Вылетел</td>
                </tr>
                <tr>
                    <td>13:55-15:30</td>
                    <td>Нов</td>
                    <td>Кал</td>
                    <td>14:20</td>
                    <td>18:10</td>
                    <td>Отменен</td>
                    <td>Вылетел</td>
                </tr>
                <tr>
                    <td>15:40-17:15</td>
                    <td>Сочи</td>
                    <td>Москва</td>
                    <td>16:45</td>
                    <td>19:00</td>
                    <td>Регистрация</td>
                    <td>Вылетел</td>
                </tr>
            </tbody>
        </table>
    </div>
}