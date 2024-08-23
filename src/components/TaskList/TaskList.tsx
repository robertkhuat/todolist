import styles from './taskList.module.scss'

export default function TaskList() {
  return (
    <div>
      <h2 className={styles.title}>Hoan thanh</h2>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <input type='checkbox' />
          <span className={styles.taskName}>Hoc bai</span>
          <div className={styles.taskActions}>
            <button className={styles.taskBtn}>✏️</button>
            <button className={styles.taskBtn}>🗑️</button>
          </div>
        </div>
      </div>
    </div>
  )
}
