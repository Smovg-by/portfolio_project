import React from 'react'
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'

export const Main = () => {
  return (
    <div className={style.mainBlock}>
      <div className={styleContainer.container}>
        <div className={style.text}>
          <span>Hi there</span>
          <h1>I am Vladimir Smovzh</h1>
          <p>Front-End Developer</p>
        </div>
        <div className={style.photo}>Photo will be here soon</div>
      </div>
    </div>
  )
}
