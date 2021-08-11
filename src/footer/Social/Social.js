import styles from './Social.module.scss'

export const Social = ({title, style, link}) => {
  return (
    <a href={link} title={title}>
      <div className={styles.social} style={style}>
      </div>
    </a>
  )
}
