import { Task } from './Task'
import styles from './TaskArea.module.css'
import { useState } from 'react'

export function TaskArea() {
  return(
    <div className={styles.taskArea}>
      <Task />
      <Task />
      <Task />
    </div>
  )
}