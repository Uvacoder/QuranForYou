import axios from "axios";

export default axios.create({
  baseURL: `https://qurandev.openlogicsys.com/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
