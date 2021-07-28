import React from 'react'
import styles from './Skill.module.scss'

export const Skill = ({ title, description, style }) => {
  return (
    <div className={styles.skill}>
      <div className={styles.icon} style={style}></div>
      <h4>{title}</h4>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
