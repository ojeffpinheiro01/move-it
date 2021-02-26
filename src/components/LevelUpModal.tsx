import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
    const { level } = useContext(ChallengesContext)
    return (
        <div className={styles.overlay}>
            <div className={styles.container} >
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcaçou um novo level</p>

                <button type='button' >
                    <img src="/icons/close.svg" alt="Fechar modal"/>
                </button>
            </div>
        </div>
    )
}