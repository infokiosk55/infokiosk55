import React from "react";
import {Link} from "react-router-dom";

/**Функция, отвечающая за вывод главной страницы
 * @author
 * @constructor
 */
export function MainPage(){
    return(
        <nav className="">
            <li className="">
                <Link className="linkPage" to="/attraction">Достопримечательности</Link>
            </li>
            <li className="">
                <Link className="linkPage" to="/excursion">Экскурсии</Link>
            </li>
            <li className="">
                <Link className="linkPage" to="/bike">Велодорожки</Link>
            </li>
            <li className="">
                <Link className="linkPage" to="/photoshoot">Места для фотосессий</Link>
            </li>
        </nav>
    );
}