import { Link } from "react-router-dom";

//
// Кнопка для перехода на главную
//

export default function Home_Button() { 
    return (
        <Link className="home_btn" to={'/'}>
            {/* <Home_Icon /> */}
            <p className="home_btn_txt">Home_Button</p>
        </Link>
    )
}