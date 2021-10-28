import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import { getChapters } from "../apis";
import { ACTION_TYPES } from "../constants/action-types";
Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
    key: 'chapters',
    storage: window.localStorage,
    reducer: state => ({
        chapters: state.chapters,
        isLoadingChapters: state.isLoadingChapters
    })
})

export default new Vuex.Store({
    plugins: [vuexLocalStorage.plugin],
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