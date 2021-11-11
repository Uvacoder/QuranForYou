import axios from "./axios";

export const getChapters = async(chapter, groupId) => {
    const query = new URLSearchParams();
    chapter && query.append("chapter", chapter);
    groupId && query.append("group_id", groupId);
    return await axios.get(`/chapter${"?" + query}`);
};

export const getRelatedMedia = async(chapter, groupId) =>
    await axios.get(`/related-media?chapter=${chapter}&group=${groupId}`);

export const search = async(search, pageNo = 0, perPage = 10) =>
    await axios.post(`/search`, {
        search,
        type: "All",
        page_no: pageNo,
        per_page: perPage,
    });

export const login = async(username, password) =>
    await axios.post("users/login", { email: username, password });

export const signup = async(email, password, name, phone, type = "reg") =>
    await axios.post("users/signup", { email, password, phone, name, type });