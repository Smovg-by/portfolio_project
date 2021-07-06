import React from 'react'
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Contacts = () => {
  return (
    <div className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <h2 className={style.title}>Контакты</h2>
        <form className={style.formsContainer}>
          <input type='text' value='input1' className={style.inputArea} />
          <input type='text' value='input2' className={style.inputArea} />
          <textarea value='textarea' className={style.textArea}></textarea>
        </form>
      </div>
    </div>
  )
}
