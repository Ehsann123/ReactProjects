import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.nameWrapper}>
        <div className={styles.name}>Name</div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.nameContainer}>
          <div className={styles.name}>Name</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
