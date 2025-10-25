import { useEffect } from "react";

// Компонент для смены заголовка страницы

export default function Page_Title({ title } : { title : string }) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return null;
}