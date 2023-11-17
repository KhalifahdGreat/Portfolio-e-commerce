import styles from "../App.module.css";
export const Form = () => {
  return (
    <div className={styles.form_holder}>
      <form className={styles.form}>
        <input type='text' placeholder='Enter Username' />
        <input type='text' placeholder='Enter Email' />
        <input type='password' placeholder='Enter Password' />
        <input type='password' placeholder='Confirm Password' />
        <input className={styles.submit_btn} type='submit' value='submit' />
      </form>
    </div>
  );
};
