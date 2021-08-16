import React from 'react'
import styles from './Nav.module.scss'
import styleContainer from '../common/styles/Container.module.scss'

export const Nav = () => {
  return (
    <div className={styleContainer.container}>
      <div className={styles.navBlock}>
        <a href='#' className={styles.navLink}>
          Main
        </a>
        <a href='#' className={styles.navLink}>
          Skills
        </a>
        <a href='#' className={styles.navLink}>
          Projects
        </a>
        <a href='#' className={styles.navLink}>
          Contact me
        </a>
        <a href='#' className={styles.navLink}>
          Social media
        </a>
      </div>
    </div>
  )
}
