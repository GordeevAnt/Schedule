import "./Table_Item.css"

//
// Компонент с отдельным расписанием
//

export default function Table_Item({text} : {text: string}) {
    return <div>
        <h1>{text}</h1>
        <table>
            <thead>
                <tr>
                    <th>Рейс</th>
                    <th>Откуда</th>
                    <th>Куда</th>
                    <th>Время вылета</th>
                    <th>Время прилета</th>
                    <th>Статус</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>SU 1001</td>
                    <td>Москва</td>
                    <td>СПб</td>
                    <td>08:00</td>
                    <td>09:30</td>
                    <td>Вылетел</td>
                </tr>
                <tr>
                    <td>SU 1002</td>
                    <td>СПб</td>
                    <td>Сочи</td>
                    <td>10:15</td>
                    <td>13:00</td>
                    <td>По расписанию</td>
                </tr>
                <tr>
                    <td>SU 1003</td>
                    <td>Екатеринбург</td>
                    <td>Москва</td>
                    <td>11:30</td>
                    <td>13:45</td>
                    <td>Задержан</td>
                </tr>
                <tr>
                    <td>SU 1004</td>
                    <td>Новосибирск</td>
                    <td>Калининград</td>
                    <td>14:20</td>
                    <td>18:10</td>
                    <td>Отменен</td>
                </tr>
                <tr>
                    <td>SU 1005</td>
                    <td>Сочи</td>
                    <td>Москва</td>
                    <td>16:45</td>
                    <td>19:00</td>
                    <td>Регистрация</td>
                </tr>
                <tr>
                    <td>SU 1006</td>
                    <td>Калининград</td>
                    <td>Екатеринбург</td>
                    <td>20:00</td>
                    <td>23:30</td>
                    <td>По расписанию</td>
                </tr>
            </tbody>
        </table>
    </div>
}