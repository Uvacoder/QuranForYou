import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import actions from "./actions";
import { ACTION_TYPES } from "../constants/action-types";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
    storage: window.localStorage,
    reducer: (state) => ({
        chapters: state.chapters,
        isLoadingChapters: state.isLoadingChapters,
        mode: state.mode,
        introduction: state.introduction,
        isLoggingIn: state.isLoggingIn,
        isSigningUp: state.isSigningUp,
        user: state.user,
    }),
});

export default new Vuex.Store({
    plugins: [vuexLocalStorage.plugin],
    state: {
        chapters: [],
        isLoadingChapters: false,
        introduction: {},
        loggedIn: false,
        isLoggingIn: false,
        user: undefined,
        loginError: undefined,
        isSigningUp: false,
        signupError: undefined,
        user: undefined,
    },
    getters: {
        getChapterList: (state) => state.chapters,
        getIsLoadingChapters: (state) => state.isLoadingChapters,
        introduction: (state) => state.introduction,
        isUserLoggedIn: (state) => state.loggedIn,
        isLoggingIn: (state) => state.isLoggingIn,
        isSigningUp: (state) => state.isSigningUp,
        user: (state) => state.user,
        loginError: (state) => state.loginError,
    },
    actions,
    mutations: {
        SAVE_CHAPTERS_REQUEST(state) {
            state.isLoadingChapters = true;
        },
        SAVE_CHAPTERS_SUCCESS(state, data) {
            state.chapters = data.chapters;
            state.introduction = data.read_introduction[0];
            state.isLoadingChapters = false;
        },
        SAVE_CHAPTERS_FAILURE(state) {
            state.isLoadingChapters = false;
        },
        [ACTION_TYPES.LOGIN.LOGIN_REQUEST](state) {
            state.loginError = undefined;
            state.isLoggingIn = true;
        },
        [ACTION_TYPES.LOGIN.LOGIN_SUCCESS](state, user) {
            state.loginError = undefined;
            state.user = user;
            state.isLoggingIn = false;
        },
        [ACTION_TYPES.LOGIN.LOGIN_FAILURE](state, error) {
            state.loginError = error;
            state.isLoggingIn = false;
        },
        [ACTION_TYPES.SIGNUP.SIGNUP_REQUEST](state) {
            state.signupError = undefined;
            state.isSigningUp = true;
        },
        [ACTION_TYPES.SIGNUP.SIGNUP_SUCCESS](state, user) {
            state.signupError = undefined;
            state.user = user;
            state.isSigningUp = false;
        },
        [ACTION_TYPES.SIGNUP.SIGNUP_FAILURE](state, error) {
            state.loginError = error;
            state.isSigningUp = false;
        },
    },
});