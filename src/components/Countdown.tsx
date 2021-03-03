import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";


export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
        percentTime
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {hasFinished ? (
                <button disabled className={styles.countdownButton}>
                    Ciclo Encerado 
                    <img src='/icons/check_circle.svg' alt="encerrado" className={styles.icon} />
                </button>
            ) : (
                    <>
                        { isActive ? (
                            <button type='button'
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}>
                                Abandonar ciclo 
                                <img src='/icons/cancel.svg' alt="abandonar" className={styles.icon} />
                                <span className={styles.loading} style={{ width: `${percentTime}%` }} ></span>
                            </button>
                        ) : <button type='button'
                            className={styles.countdownButton}
                            onClick={startCountdown}>
                                Iniciar ciclo 
                                <img src='/icons/play_arrow.svg' alt="play" className={styles.icon} />
                            </button>}
                    </>
                )}
        </div>
    )
}