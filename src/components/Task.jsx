import { Trash } from 'phosphor-react'
import styles from './Task.module.css'
import unchecked from '../assets/unchecked.svg'
import checked from '../assets/checked.svg'

export function Task({text, onDeleteTask}) {
  function handleDeleteTask() {
    onDeleteTask(text)
  }

  return(
    <div className={styles.task}>
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