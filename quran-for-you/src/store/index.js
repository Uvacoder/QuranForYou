import Vue from "vue";
import Vuex from "vuex";
import { getChapters } from "../apis";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chapters: [],
  },
  getters: {
    getChapterList: (state) => state.chapters,
    getChapter: (state) => state.chapters[0],
  },
  actions: {
    loadChapters({ commit }, [chapterId, groupId]) {
      getChapters(chapterId, groupId)
        .then((result) => {
          commit("SAVE_CHAPTERS", result.data.chapters);
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        });
    },
  },
  mutations: {
    SAVE_CHAPTERS(state, chapters) {
      state.chapters = chapters;
    },
  },
});
