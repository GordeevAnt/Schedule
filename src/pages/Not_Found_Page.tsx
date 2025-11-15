import Page_Title from '../shared/Page_Title';
import "./Not_Found_Page.css"

//
// Страница 404
//

export default function Not_Found_Page() {
    return <div className='page_wrapper'>
        <Page_Title title="404 – несуществующая страница"/>
        <div className='not_found_container'>
            <img src="/img/train.svg" alt="Train" />
            <div className='not_found_content'>
                <img src="/img/schedule-remove.svg" alt="Schedule_X" />
                <p>Такой страницы не существует :(</p>
                <p>Попробуйте проверить<br></br>верно ли указан адрес</p>
            </div>
        </div>
    </div>
}