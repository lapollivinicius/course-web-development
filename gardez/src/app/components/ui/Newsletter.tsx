import styles from "@/app/components/styles/Newsletter.module.css";

export default function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <h2 className={styles.ctaNewsletter}>Assine a nossa <br/> newsletter!</h2>
      <form action={"POST"} className={styles.formEmail}>
        <p className={styles.subtitle}>Fique por dentro das novidades</p>
        <label htmlFor="email" className={styles.groupInput}>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className={styles.inputEmail}
          />
          <button type="button" className={styles.btnSend}>Send</button>
        </label>
      </form>
    </div>
  );
}
