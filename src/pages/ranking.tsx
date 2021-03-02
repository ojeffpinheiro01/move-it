import Head from "next/head";
import { SideBar } from "../components/SideBar";
import users from '../../ranking.json'

import styles from '../styles/pages/Ranking.module.css'

export default function Ranking() {
    return (
        <div className={styles.container}>
            <SideBar />
            <div className={styles.subcontainer}>
                <Head>
                    <title>Ranking | Move.it</title>
                </Head>
                <h1>Leaderboard 🏆</h1>
                <section>
                    <table>
                        <thead>
                            <tr>
                                <th>POSIÇÃO</th>
                                <th>USUÁRIO</th>
                                <th>DESAFIOS</th>
                                <th>EXPERIÊNCIA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, i) => (
                                <tr key={i} >
                                    <td className={styles.userPosition}>{user.position}</td>
                                    <td className={styles.userInfo}>
                                        <img src={user.avatar} alt={user.username} />
                                        <div>
                                            <strong>{user.username}</strong>
                                            <span>
                                                <img src='/icons/level.svg' alt="level"/>
                                                Level {user.level}
                                            </span>
                                        </div>
                                    </td>
                                    <td className={styles.userExperience} >
                                        <div><strong>{user.challengesCompleted}</strong> completos</div>
                                    </td>
                                    <td className={styles.userExperience} >
                                        <div><strong>{user.experience}</strong>XP</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
}