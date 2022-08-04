import styles from './styles/Button.module.css';

function ControlPanel(){
    return(
        <div className={styles.panel}>
            <button className={styles.button}  onClick={alert}>
                <div className={styles.text}>Назад<img className="float-left" width={60} height={60} src="https://img.icons8.com/carbon-copy/100/000000/circled-chevron-left.png" alt="Назад" /></div>
            </button>
            <button className={styles.button} onClick={alert}>
                <div className={styles.text}>Главный экран <img className="float-left" width={60} height={60} src="https://img.icons8.com/carbon-copy/100/000000/circled-chevron-up.png" alt="Главный экран" /></div>
            </button>
            <button className={styles.button} onClick={alert}>
                <div className={styles.text}>Вперед <img className="float-right" width={60} height={60} src="https://img.icons8.com/carbon-copy/100/000000/circled-chevron-right.png" alt="Вперед" /></div>
            </button>
        </div>
    );
}
export default ControlPanel;