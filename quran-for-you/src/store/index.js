import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import { getChapters, getRelatedMedia } from "../apis";
import { ACTION_TYPES } from "../constants/action-types";
Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: "chapters",
  storage: window.localStorage,
  reducer: (state) => ({
    chapters: state.chapters,
    isLoadingChapters: state.isLoadingChapters,
    mode: state.mode,
  }),
});

export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  state: {
    chapters: [],
    isLoadingChapters: false,
    relatedMedia: [],
  },
  getters: {
    getChapterList: (state) => state.chapters,
    getIsLoadingChapters: (state) => state.isLoadingChapters,
    getRelatedMedia: (state) => state.relatedMedia,
  },
  actions: {
    loadChapters({ commit }, [chapterId, groupId]) {
      commit(ACTION_TYPES.CHAPTERS.SAVE_CHAPTERS_REQUEST);
      getChapters(chapterId, groupId)
        .then((result) =>
          commit(
            ACTION_TYPES.CHAPTERS.SAVE_CHAPTERS_SUCCESS,
            result.data.chapters
          )
        )
        .catch((error) => commit(ACTION_TYPES.CHAPTERS.SAVE_CHAPTERS_FAILURE));
    },

    loadRelatedMedia({ commit }, [chapterId, groupId]) {
      getRelatedMedia(chapterId, groupId)
        .then((result) =>
          commit(
            ACTION_TYPES.RELATED_MEDIA.SAVE_RELATED_MEDIA_SUCCESS,
            result.data
          )
        )
        .catch((error) =>
          commit(ACTION_TYPES.RELATED_MEDIA.SAVE_RELATED_MEDIA_FAILURE, error)
        );
    },
  },
  mutations: {
    SAVE_CHAPTERS_REQUEST(state) {
      state.isLoadingChapters = true;
    },
    SAVE_CHAPTERS_SUCCESS(state, chapters) {
      state.chapters = chapters;
      state.isLoadingChapters = false;
    },
    SAVE_CHAPTERS_FAILURE(state) {
      state.isLoadingChapters = false;
    },

    SAVE_RELATED_MEDIA_SUCCESS(state, relatedMedia) {
      console.log(relatedMedia)
      state.relatedMedia = relatedMedia;
    },
    SAVE_RELATED_MEDIA_FAILURE(state, error) {
      console.log(error)
    }
  },
});
