import { Header } from './components/Header'
import { Input } from './components/Input'
import { TaskArea } from './components/TaskArea'

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Input /> 

        <div className={styles.taskTitles}>
          <div className={styles.createdTasks}>
            <p>Tarefas Criadas</p>
            <div className={styles.counter}>0</div>
          </div>

          <div className={styles.doneTasks}>
            <p>Concluídas</p>
            <div className={styles.counter}>0</div>
          </div>
        </div>

        <TaskArea />

      </div>
    </div>
  )
}
