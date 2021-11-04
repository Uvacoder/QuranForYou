import axios from "./axios";

export const getChapters = async (chapter, groupId) => {
  const query = new URLSearchParams();
  chapter && query.append("chapter", chapter);
  groupId && query.append("group_id", groupId);
  return await axios.get(`/chapter${"?" + query}`);
};

export const getRelatedMedia = async (chapter, groupId) => {
  return await axios.get("/related-media", {
    chapter: chapter,
    group: groupId,
  });
};
