import { Trash } from 'phosphor-react'
import styles from './Task.module.css'
import unchecked from '../assets/unchecked.svg'
import checked from '../assets/checked.svg'
import { useState } from 'react'

export function Task({id}) {




  return(
    <div className={styles.task}>
      <label htmlFor={id} className={styles.taskContent}>
        <input 
          type="checkbox"  
          name="task"
          id={id}
        />
        <img className={styles.unchecked} src={unchecked} alt="" />
        <img className={styles.checked} src={checked} alt="" />

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, eaque aut maiores quasi aliquam rerum ad totam ratione eos voluptatum repellendus vitae consequuntur sit tempora, ut modi doloremque eligendi labore?</p>
      </label>
      
      <button>
        <Trash size={14}/>
      </button>
    </div>
  )
}