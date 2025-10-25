import Page_Title from "../shared/Page_Title"

//
// Страница 404
//

export default function Not_Found_Page() {
    return <>
        <Page_Title title="404 – несуществующая страница"/>
        <p>Страница не найдена :(</p>
    </>
}