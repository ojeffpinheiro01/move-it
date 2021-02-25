import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
    const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completedChallenge()
        resetCountdown()
      }
    
      function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
      }

    return(
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount}</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="challenge"/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button type='button' 
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}>
                                Falhei
                            </button>
                        <button type='button' 
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}>
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