import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../styles/components/SideBar.module.css'

export function SideBar() {
    const { route } = useRouter()
    const [address, setAddress] = useState(route)
    return (
        <div className={styles.container}>
            <header>
                <img src='/icons/logo.svg' className={styles.logo} alt='logo' />
            </header>
            <div className={styles.icons}>
                <ul>
                    <li><Link href='/'>
                        {address === '/' ? (
                        <a type='button'>
                            <div className={styles.active}></div> 
                            <span><img src='/icons/home.svg' alt="home" /></span>
                        </a>) : (
                            <a type='button'>
                                <span><img src='/icons/home.svg' alt="home" /></span>
                            </a>
                            )}
                    </Link></li>
                    <li>
                        <Link href='/ranking'>
                            {address === '/ranking' ? (
                                 <a type='button'>
                                    <div className={styles.active}></div> 
                                    <span><img src='/icons/award.svg' alt="ranking" /></span>
                                </a>) : (
                                 <a type='button'>
                                 <span><img src='/icons/award.svg' alt="ranking" /></span>
                             </a>
                            )}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.tagget}>
                <input className={styles.checkbox} type="checkbox" name="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className={styles.label}>
                    <div className={styles.moon}>🌙</div>
                    <div className={styles.sun}>🌞</div>
                    <div className={styles.ball}></div>
                </label>
            </div>
        </div>
    )
}