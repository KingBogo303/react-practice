import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  return (
    <div className={styles.container}>
      {props.tasks.length !== 0 ? (
        props.tasks.map((task) => (
          <h3
            key={task.id}
            onDoubleClick={() => props.completeTask(task.id)}
            className={`${styles.title} ${task.completed && styles.completed}`}
          >
            {task.title}!
            <button
              onClick={() => props.deleteHandler(task.id)}
              className={styles.del}
            >
              x
            </button>
          </h3>
        ))
      ) : (
        <h3 className={styles.emptyTasks}>No Tasks 😥</h3>
      )}
    </div>
  );
};

export default TodoItem;
