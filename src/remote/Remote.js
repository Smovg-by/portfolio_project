import React from 'react'
import style from './Remote.module.css'
import styleContainer from '../common/styles/Container.module.css'
import { Title } from '../common/components/title/Title'

export const Remote = () => {
  return (
    <div className={style.remoteBlock}>
      <div className={`${styleContainer.container} ${style.remoteContainer}`}>
        <Title title={'Ready for remote job offers'} />
        <button className={style.button}>Hire me!</button>
      </div>
    </div>
  )
}
