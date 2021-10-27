import axios from "./axios";

export const getChapters = async (chapter, groupId) => {
  const query = new URLSearchParams();
  chapter && query.append("chapter", chapter);
  groupId && query.append("group_id", groupId);
  return await axios.get(`/chapter${"?" + query}`);
};
