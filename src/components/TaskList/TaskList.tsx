import { useState } from 'react'
import styles from './taskList.module.scss'
import { Todo } from '../../@types/todo.type'

interface TaskListProps {
  doneTaskList?: boolean
}

export default function TaskList(props: TaskListProps) {
  const { doneTaskList } = props

  return (
    <div className='mb-2'>
      <h2 className={styles.title}>{doneTaskList ? 'Hoan thanh' : 'Chua hoan thanh'}</h2>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <input type='checkbox' className={styles.taskCheckbox} />
          <span className={`${styles.taskName} ${styles.taskNameDone}`}>Hoc bai</span>
          <div className={styles.taskActions}>
            <button className={styles.taskBtn}>✏️</button>
            <button className={styles.taskBtn}>🗑️</button>
          </div>
        </div>
      </div>
    </div>
  )
}
