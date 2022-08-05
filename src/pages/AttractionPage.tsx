import React from "react";
import ControlPanel from "../components/ControlPanel";
import styles from "./styles/Atractions.module.css"

/**Функция, отвечающая за вывод страницы с достопримечательностями
 * @author Kolisratova Yuliya
 * @author Nikitin Petr
 * @constructor
 */
export function AttractionPage(){
    return(
        <div className={styles.block}>
            <div className="">
                <div className="">Достопримечательности</div>
                <ControlPanel/>
            </div>
        </div>
    );
}