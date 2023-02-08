import Modal from "./Modal";
import styles from "./ModalForm.module.css";

const ModalForm = (props) => {
  return (
    <Modal onCloseModal={props.handleCloseModal} title={props.title}>
      <form className={styles.form} onSubmit={props.handleFormSubmit}>
        <div className={styles.formBox}>
          <label htmlFor="Title" className={styles.label}>
            Enter Task
          </label>
          <input
            autoFocus
            ref={props.todoTitleRef}
            id="Title"
            className={styles.input}
            title="Enter task"
            type="text"
            required
          />
        </div>
        <div className={styles.formBox}>
          <label htmlFor="Title" className={styles.label}>
            Status
          </label>
          <select
            ref={props.todoStatusRef}
            className={styles.ModalSelect}
            name=""
            id=""
          >
            <option value={"Incomplete"}>Incomplete</option>
            <option value={"Complete"}>Complete</option>
          </select>
        </div>
        <div className={styles.buttonBox}>
          <button type="submit">{props.btnText}</button>
          <button onClick={props.handleCloseModal}>Cancel</button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalForm;
