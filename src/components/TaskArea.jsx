import { Task } from './Task'
import { useState } from 'react'

import { PlusCircle } from 'phosphor-react'
import styles from './TaskArea.module.css'

export function TaskArea() {
  const [tasks, setTasks] = useState([])

  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask() {
    event.preventDefault()

    setTasks([...tasks, newTaskText])

    setNewTaskText('')
  }

  function handleNewTaskChange() {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function deleteTask(taskToDelete) {
    const tasksWithoutDeletedOne = tasks.filter(task =>{
      return task != taskToDelete
    })

    setTasks(tasksWithoutDeletedOne)
  }

  const doneTasks = `Em Desenvolvimento`

  const isNewTaskEmpty = newTaskText.length === 0

  return(
      <div className={styles.wrapper}>
        <form onSubmit={handleCreateNewTask} className={styles.inputWrapper}>
          <input 
            className={styles.input} 
            type="text"
            value={newTaskText}
            onChange={handleNewTaskChange}
            placeholder='Adicione uma nova tarefa'/>
          <button type='submit' className={styles.button} disabled={isNewTaskEmpty}>
            Criar
            <PlusCircle size={16} />
          </button>
        </form> 

        <div className={styles.taskTitles}>
          <div className={styles.createdTasks}>
            <p>Tarefas Criadas</p>
            <div className={styles.counter}>{tasks.length}</div>
          </div>

          <div className={styles.doneTasks}>
            <p>Concluídas</p>
            <div className={styles.counter}>{doneTasks}</div>
          </div>
        </div>
        <div id='taskList'className={styles.taskArea}>
          {tasks.map(task => {
            return (
              <Task
                text={task}
                onDeleteTask={deleteTask}
                id={task}
              />
            )
          })}
        </div>
      </div>

  )
}