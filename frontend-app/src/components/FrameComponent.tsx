import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.property1default, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.getStartedNowWrapper}>
          <div className={styles.getStartedNow}>Get Started Now</div>
        </div>
        <div className={styles.enterYourCredentials}>
          Enter your Credentials to access your account
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.nameWrapper}>
            <div className={styles.getStartedNow}>Name</div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.enterYourNameWrapper}>
              <div className={styles.getStartedNow}>Enter your name</div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.nameWrapper}>
            <div className={styles.getStartedNow}>Email address</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.enterYourNameWrapper}>
              <div className={styles.getStartedNow}>Enter your email</div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.nameWrapper}>
            <div className={styles.getStartedNow}>Password</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.enterYourNameWrapper}>
              <div className={styles.getStartedNow}>Name</div>
            </div>
          </div>
        </div>
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.orWrapper}>
            <div className={styles.getStartedNow}>Or</div>
          </div>
        </div>
        <div className={styles.iAgreeToTheTermsPolicyParent}>
          <div className={styles.iAgreeToContainer}>
            {`I agree to the `}
            <span className={styles.termsPolicy}>{`terms & policy`}</span>
          </div>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.groupWrapper}>
          <div className={styles.haveAnAccountSignInWrapper}>
            <div className={styles.haveAnAccountContainer}>
              <span
                className={styles.haveAnAccount}
              >{`Have an account?  `}</span>
              <span className={styles.signIn}>Sign In</span>
            </div>
          </div>
        </div>
        <div className={styles.instanceParent}>
          <div className={styles.frameParent2}>
            <div className={styles.nameWrapper3}>
              <div className={styles.name5}>Name</div>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.nameWrapper4}>
                <div className={styles.name6}>Name</div>
              </div>
            </div>
          </div>
          <b className={styles.login}>Signup</b>
        </div>
        <div className={styles.frameWrapper3}>
          <div className={styles.icons8Google1Parent}>
            <img
              className={styles.icons8Google1}
              alt=""
              src="/icons8google-11@2x.png"
            />
            <div className={styles.getStartedNow}>Sign in with Google</div>
          </div>
        </div>
        <div className={styles.frameWrapper4}>
          <div className={styles.icons8AppleLogo1Parent}>
            <img
              className={styles.icons8Google1}
              alt=""
              src="/icons8applelogo-1@2x.png"
            />
            <div className={styles.getStartedNow}>Sign in with Apple</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
