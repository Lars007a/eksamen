import styles from "./spinner.module.css";

import { ClipLoader } from "react-spinners";

export default function loadingSpinner({ margin = false, whiteBackground=false, centered=true }) {
  return (
    <div className={`${styles.con} ${margin && styles.margin} ${whiteBackground && styles.whitebc} ${centered == true && styles.center}`}>
      <ClipLoader size={40} loading={true} />
    </div>
  );
}