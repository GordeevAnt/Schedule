import "./Footer.css"

//
// Футер (нижняя часть сайта)
//

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Контакты */}
                <div className="footer__section">
                    <h3 className="footer__title">Контакты</h3>
                    <div className="footer__content">
                        <p>📞 +7 3812 53-02-62</p>
                        <p>📞 +7 3812 53-24-70</p>
                        <p>📞 +7 3812 31-42-19</p>
                        <p>📍 Россия, Омск, проспект Карла Маркса, 35</p>
                        <p>🕒 пн-пт 8:00–17:00, перерыв 12:00–13:00</p>
                    </div>
                </div>

                {/*
                    Заполнить данными
                */}
                {/* Быстрые ссылки */}
                <div className="footer__section">
                    <h3 className="footer__title">Быстрые ссылки</h3>
                    <nav className="footer__nav">
                        <a href="/schedule" className="footer__link">Расписание занятий</a>
                        <a href="/faculty" className="footer__link">Факультеты</a>
                        <a href="/news" className="footer__link">Новости</a>
                        <a href="/contacts" className="footer__link">Контакты</a>
                    </nav>
                </div>

                {/*
                    Заполнить данными
                */} 
                {/* Социальные сети */}
                <div className="footer__section">
                    <h3 className="footer__title">Мы в соцсетях</h3>
                    <div className="footer__social">
                        <a href="https://omgups.ru/" className="footer__social-link">📘</a>
                        <a href="#" className="footer__social-link">📷</a>
                        <a href="#" className="footer__social-link">🐦</a>
                        <a href="#" className="footer__social-link">📹</a>
                    </div>
                </div>

                {/* Информация */}
                <div className="footer__section">
                    <h3 className="footer__title">Университет</h3>
                    <div className="footer__content">
                        <p>© 2025 Омский Государственный Университет Путей Сообщения</p>
                        <p>Все права защищены</p>
                        <p>Лицензия № 123456 от 01.01.2025</p>
                    </div>
                </div>
            </div>

            {/* Нижняя часть футера */}
            <div className="footer__bottom">
                <p>Сайт создан для учебных целей | Версия 0.0.1</p>
            </div>
        </footer>
    )
}