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

export const signup = async(
        email,
        password,
        firstName,
        lastName,
        phone,
        type = "reg"
    ) =>
    await axios.post("users/signup", {
        email,
        password,
        phone,
        first_name: firstName,
        last_name: lastName,
        type,
    });

export const forgotPassword = async(email) =>
    await axios.post("users/forgot-pass", { email });

export const getRelatedMediaAll = async(chapter, groupId) =>
    await axios.get(`/related-media-all?chapter=${chapter}&group=${groupId}`);

export const updateUser = async(userId, obj) =>
    await axios.post(`/userprofile/${userId}`, obj);