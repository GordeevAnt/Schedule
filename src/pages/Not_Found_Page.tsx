import Page_Title from '../shared/Page_Title';

//
// Страница 404
//

export default function Not_Found_Page() {
    return <>
        <Page_Title title="404 – несуществующая страница"/>
        <div className='not-found-container'>
            <img src="../../public/train.svg" alt="Train" />
            <div className='not-found-sheduleXtext'>
                <img src="../../public/schedule-remove.svg" alt="Schedule_X" />
                <p>Страница не найдена :(</p>
            </div>
        </div>
    </>
}