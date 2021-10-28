import Vue from "vue";
import Vuex from "vuex";
import { getChapters } from "../apis";
import { ACTION_TYPES } from "../constants/action-types";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        chapters: [],
        isLoadingChapters: false,
    },
    getters: {
        getChapterList: (state) => state.chapters,
        getIsLoadingChapters: (state) => state.isLoadingChapters,
    },
    actions: {
        loadChapters({ commit }, [chapterId, groupId]) {
            commit(ACTION_TYPES.CHAPTERS.SAVE_CHAPTERS_REQUEST);
            getChapters(chapterId, groupId)
                .then((result) =>
                    commit(
                        ACTION_TYPES.CHAPTERS.SAVE_CHAPTERS_SUCCESS,
                        result.data.Chapters
                    )
                )
                .catch((error) => commit(ACTION_TYPES.CHAPTERS.SAVE_CHAPTERS_FAILURE));
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
    },
});