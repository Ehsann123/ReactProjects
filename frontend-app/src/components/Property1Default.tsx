import { FunctionComponent } from "react";
import styles from "./Property1Default.module.css";

export type Property1DefaultType = {
  className?: string;
};

const Property1Default: FunctionComponent<Property1DefaultType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.property1default, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.nameWrapper}>
          <div className={styles.name}>Name</div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.nameContainer}>
            <div className={styles.name1}>Name</div>
          </div>
        </div>
      </div>
      <b className={styles.login}>Login</b>
    </div>
  );
};

export default Property1Default;
