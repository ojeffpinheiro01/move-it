import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/Profile.module.css"

export function Profile(){
  const { level } = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer} >
          <img
            src="https://avatars.githubusercontent.com/u/60162736?s=460&u=27e8b55034e2732340c32f288d99f012313de990&v=4"
            alt="Jeferson Pinheiro"
          />
          <div>
            <strong>Jeferson Pinheiro</strong>
            <p>
              <img src="icons/level.svg" alt="Level" />
              Level {level}
            </p>
          </div>
        </div>
      );
}