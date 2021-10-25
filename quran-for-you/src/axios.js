import axios from "axios";

let retval = axios.create({
    baseURL: `https://qurandev.openlogicsys.com/api/`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
retval.defaults.timeout = 10000;
retval.interceptors.request.use(
    async(config) => {
        const token = await localStorage.getItem("access_token");
        if (token) {
            config.headers.common["Authorization"] = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default retval;