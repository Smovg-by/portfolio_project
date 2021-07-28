import React from 'react'
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import { Title } from '../common/components/title/Title'

export const Contacts = () => {
  return (
    <div className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <Title title={'Contacts'} />
        <form className={style.formsContainer}>
          <input type='text' value='input1' className={style.inputArea} />
          <input type='text' value='input2' className={style.inputArea} />
          <textarea value='textarea' className={style.textArea}></textarea>
        </form>
      </div>
    </div>
  )
}
