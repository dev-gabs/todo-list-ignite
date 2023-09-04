import { Header } from './components/Header'
import { TaskArea } from './components/TaskArea'

import './global.css'
import styles from './App.module.css'

export function App() {
  let inputValue = 'quejo'

  return (
    <div>
      <Header />

      <TaskArea />
    </div>
  )
}
