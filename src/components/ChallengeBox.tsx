import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
    const contextData = useContext(ChallengesContext);
    console.log(contextData)
    const hasActiveChallenge = true
    return(
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400px</header>
                    <main>
                        <img src="icons/body.svg" alt="challenge"/>
                        <strong>Novo desafio</strong>
                        <p>Levante e caminhe por 3  minutos</p>
                    </main>
                    <footer>
                        <button type='button' 
                            className={styles.challengeFailedButton}>
                                Falhei
                            </button>
                        <button type='button' 
                            className={styles.challengeSucceededButton}>
                                Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src={`icons/level-up.svg`} alt="Level Up"/>
                    Avance um level completando desafios
                </p>
            </div>
            ) }
        </div>
    )
}