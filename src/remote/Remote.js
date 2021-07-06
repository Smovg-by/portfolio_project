import React from 'react'
import style from './Remote.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Remote = () => {
  return (
    <div className={style.remoteBlock}>
      <div className={`${styleContainer.container} ${style.remoteContainer}`}>
        <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
        <button>Нанять меня</button>
      </div>
    </div>
  )
}
