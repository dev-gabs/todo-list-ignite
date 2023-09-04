import { Trash } from 'phosphor-react'
import styles from './Task.module.css'
import unchecked from '../assets/unchecked.svg'
import checked from '../assets/checked.svg'
import { Children } from 'react'

export function Task({id, text, onDeleteTask}) {
  function handleDeleteTask() {
    onDeleteTask(text)
  }

  
  const test = document.getElementById('taskList').children
  console.log(test)

  return(
    <div className={styles.task} id={id}>
      <label className={styles.taskContent}>
        <input 
          type="checkbox"  
          name="task"
        />
        <img className={styles.unchecked} src={unchecked} alt="" />
        <img className={styles.checked} src={checked} alt="" />

        <p>{text}</p>
      </label>
      
      <button onClick={handleDeleteTask}>
        <Trash size={14}/>
      </button>
    </div>
  )
}