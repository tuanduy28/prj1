import React from "react";
import styles from "./AboutUs.module.css"; // Import CSS module

const AboutUs = () => {
  return (
    <section className={styles.aboutUsSection}>
      <h2 className={styles.aboutUsTitle}>Cảm xúc sau tay lái</h2>
      <p className={styles.aboutUsText}>
        Giúp những người hâm mộ của dòng phim Fast and Furious có thể tiếp cận với những chiếc xe đã trở thành những huyền thoại trong xuyên suốt bộ phim
      </p>
    </section>
  );
};

export default AboutUs;
