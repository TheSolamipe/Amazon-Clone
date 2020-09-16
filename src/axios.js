import axios from "axios";

const instance = axios.create({
  baseUrl: "https://us-central1-clone-af7da.cloudfunctions.net/api",
});

export default instance;

// http://localhost:5001/clone-af7da/us-central1/api
