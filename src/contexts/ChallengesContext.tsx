import { createContext, ReactNode, useState } from 'react'
import challenges from '../../challenges.json'

interface ChallengesProviderProps {
  children: ReactNode
}

type Challenge = {
  type: 'eye' | 'body',
  description: number,
  amount: string,
}

interface ChallengesContextData {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
  activeChallenge: Challenge;
  levelUp: () => void,
  startNewChallenge: () => void,
}


export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)

  const [activeChallenge, setActiveChallenge] = useState(null)

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengesIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengesIndex]
    setActiveChallenge(challenge)

  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}