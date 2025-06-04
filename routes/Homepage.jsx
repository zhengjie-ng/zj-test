import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div>
      <Link to="oneMap">One Map</Link>
    </div>
  );
}

export default Homepage;
