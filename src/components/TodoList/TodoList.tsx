import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todoList.module.scss'

export default function TodoList() {
  return (
    <div>
      TodoList
      <TaskInput />
      <TaskList />
    </div>
  )
}
