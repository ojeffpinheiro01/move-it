import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import styles from '../styles/components/SideBar.module.css'

export function SideBar() {
    const { pathname, push } = useRouter()
    return (
        <div className={styles.container}>
            <header>
                <img src='/icons/logo.svg' className={styles.logo} alt='logo' />
            </header>
            <div className={styles.navigation}>
                <button className={`${styles.btnNavigation} ${pathname === '/' && styles.btnNavigationActive}`} 
                        onClick={() => push('/')}>
                    { pathname === '/' 
                        ? <img src='/icons/home-active.svg' alt="ranking" /> 
                        : <img src='/icons/home.svg' alt="ranking" /> }
                </button>
                <button className={`${styles.btnNavigation} ${pathname === '/ranking' && styles.btnNavigationActive}`} 
                        onClick={() => push('/ranking')}>
                    { pathname === '/ranking' 
                        ? <img src='/icons/award-active.svg' alt="ranking" /> 
                        : <img src='/icons/award.svg' alt="ranking" /> }
                </button>
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