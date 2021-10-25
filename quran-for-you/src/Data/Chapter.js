import axios from "../axios";

export const getChapterList = async (token, chapter, groupId) => {
  try {
    const { data } = await axios.get(
      `api/chapter/?chapter=${chapter}&group_id=${groupId}`
    );
    console.log(data.chapters);
    return data?.chapters;
  } catch (e) {
    // Handle errors
    console.log(e);
  }
};
