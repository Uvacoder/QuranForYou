import axios from "./axios";

export const getChapters = (chapter, groupId) => {
    const query = new URLSearchParams();
    chapter && query.append({ chapter });
    groupId && query.append({ group_id: groupId });
    return axios.get(`/chapter?${query}`);
};