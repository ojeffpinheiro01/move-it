import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

let countdownTimeout: NodeJS.Timeout;

interface CountdownContextData {
    isActive: boolean,
    hasFinished: boolean,
    minutes: number,
    seconds: number,
    percentTime: number,
    startCountdown: () => void,
    resetCountdown: () => void,
}

interface CountdownProviderProps {
    children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children }: CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext)

    const timeInMinutes = 25


    const [time, setTime] = useState(timeInMinutes * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    // let percentTime = Math.floor((time * 100) / (timeInMinutes * 60))
    let percentTime = Math.floor(100+((time/(timeInMinutes * 60)*(-100))))

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true);
    }
    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setHasFinished(false)
        setTime(timeInMinutes * 60)
    }

    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }
    }, [isActive, time]);

    return (
        <CountdownContext.Provider value={{
            isActive,
            hasFinished,
            minutes,
            seconds,
            startCountdown,
            resetCountdown,
            percentTime,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}