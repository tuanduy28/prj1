import React from "react";
import styles from "./Contact.module.css"; // Import CSS module


const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.contactTitle}>Contact</h2>
      <p className={styles.contactText}>
        <strong>Showroom Hà Nội</strong>
      </p>
      <div className={styles.contactDetails}>
     
        <p>
          Email:{" "}
          <a
            href="mailto:nletuanduy@gmail.com"
            className={styles.contactLink}
          >
            nletuanduy@gmail.com
          </a>
        </p>
        <p>
          Số điện thoại:{" "}
          <a href="tel:0813090661" className={styles.contactLink}>
            0813090661
          </a>
        </p>
      </div>
 <p className={styles.contactText}>
        <strong>Showroom TP. Hồ Chí Minh</strong>
      </p>
      <div className={styles.contactDetails}>
     
        <p>
          Email:{" "}
          <a
            href="mailto:duy.nlt226079@sis.hust.edu.vn"
            className={styles.contactLink}
          >
            duy.nlt226079@sis.hust.edu.vn
          </a>
        </p>
        <p>
          Số điện thoại:{" "}
          <a href="tel:20226079" className={styles.contactLink}>
            20226079
          </a>
        </p>
      </div>
    </section>


   
  );
};


export default Contact;



