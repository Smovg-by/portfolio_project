import React from 'react'
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
// import button from '../common/styles/Button.module.scss'

export const Main = () => {
  return (
    <div className={style.mainBlock}>
      <div className={styleContainer.container}>
        <div className={style.text}>
          <h4>Front-End Developer</h4>
          <h1>Uladzimir Smouzh</h1>
          <p>Hello, I am a Front-end Developer who is experienced in creating websites and single-page applications with
            React(JavaScript/TypeScript). Focused on improving my skills, learning new and performing the best personal
            and team results.</p>
          <p>My spare time I devote to exploring new technologies, JS libraries and doing tasks at Codewars.com.</p>
          <p>Open for your suggestions.</p>
          <div className={style.buttonsContainer}>
            <a className={`${style.button} ${style.accentColor}`} href='https://drive.google.com/file/d/1ITdMIR8h1kVgw7V1ONm7vs0ZVHoaYWTk/view?usp=sharing'>
              Download CV
            </a>
            <a className={style.button} href='#'>
              Contact me
            </a>
          </div>
        </div>
        <div className={style.photo}> </div>
      </div>
    </div>
  )
}
