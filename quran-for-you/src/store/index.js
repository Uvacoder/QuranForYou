import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import actions from "./actions";
import { ACTION_TYPES } from "../constants/action-types";
import { isAccesTokenExpired } from "../helper";

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
        forgettingPasswordError: state.forgettingPasswordError,
        isForgettingPassword: state.isForgettingPassword,
        signupError: state.signupError,
        chapterId: state.chapterId,
        groupId: state.groupId,
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
        loginError: undefined,
        isSigningUp: false,
        signupError: undefined,
        isForgettingPassword: false,
        forgettingPasswordError: undefined,
        user: undefined,
        chapterId: undefined,
        groupId: undefined,
    },
    getters: {
        chapters: (state) => state.chapters,
        isLoadingChapters: (state) => state.isLoadingChapters,
        introduction: (state) => state.introduction,
        isUserLoggedIn: (state) => {
            // console.log(state.user.access_token)
            const loggedIn =
                state.user &&
                state.user.access_token &&
                !isAccesTokenExpired(state.user.access_token);
            !loggedIn && (state.user = undefined);
            return loggedIn;
        },
        isLoggingIn: (state) => state.isLoggingIn,
        isSigningUp: (state) => state.isSigningUp,
        user: (state) => state.user,
        loginError: (state) => state.loginError,
        isForgettingPassword: (state) => state.isForgettingPassword,
        forgettingPasswordError: (state) => state.forgettingPasswordError,
        signupError: (state) => state.signupError,
        chapterId: (state) => state.chapterId,
        groupId: (state) => state.groupId,
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
            console.log("Error here: ", error);
            state.signupError = error;
            state.isSigningUp = false;
        },
        [ACTION_TYPES.FORGOT_PASSOWRD.FORGOT_PASSOWRD_REQUEST](state) {
            state.forgettingPasswordError = undefined;
            state.isForgettingPassword = true;
        },
        [ACTION_TYPES.FORGOT_PASSOWRD.FORGOT_PASSOWRD_SUCCESS](state, data) {
            state.forgettingPasswordError = undefined;
            state.isForgettingPassword = false;
        },
        [ACTION_TYPES.FORGOT_PASSOWRD.FORGOT_PASSOWRD_FAILURE](state, error) {
            state.forgettingPasswordError = error;
            state.isForgettingPassword = false;
        },
        [ACTION_TYPES.LOGOUT.LOGOUT_REQUEST](state) {
            state.user = undefined;
        },
        [ACTION_TYPES.LOGIN.LOGIN_CLEAR](state) {
            state.isLoggingIn = false;
            state.loginError = false;
        },
        [ACTION_TYPES.SIGNUP.SIGNUP_CLEAR](state) {
            state.isSigningUp = false;
            state.signupError = false;
        },
        [ACTION_TYPES.SAVE_CHAPTER_ID](state, chapterId) {
            state.chapterId = chapterId;
        },
        [ACTION_TYPES.SAVE_GROUP_ID](state, groupId) {
            state.groupId = groupId;
        },
    },
});