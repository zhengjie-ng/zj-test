import styles from "./OneMap.module.css";
import oneMapCreds from "../api/oneMapCreds";
import fetchToken from "../api/fetchToken";

function OneMap() {
  async function getToken() {
    try {
      const new_response = await fetchToken().post("", oneMapCreds);
      console.log(new_response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <button onClick={() => getToken()}>Get Token</button>
    </div>
  );
}

export default OneMap;
