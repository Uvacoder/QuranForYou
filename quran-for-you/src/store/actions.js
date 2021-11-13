import { forgotPassword, getChapters, login, signup } from "../apis";
import { ACTION_TYPES } from "../constants/action-types";

const loadChapters = ({ commit }, [chapterId, groupId]) => {
    commit(ACTION_TYPES.CHAPTERS.SAVE_CHAPTERS_REQUEST);
    getChapters(chapterId, groupId)
        .then((result) =>
            commit(ACTION_TYPES.CHAPTERS.SAVE_CHAPTERS_SUCCESS, result.data)
        )
        .catch(() => commit(ACTION_TYPES.CHAPTERS.SAVE_CHAPTERS_FAILURE));
};

const handleLogin = ({ commit }, [username, password]) => {
    commit(ACTION_TYPES.LOGIN.LOGIN_REQUEST);
    login(username, password)
        .then((result) => commit(ACTION_TYPES.LOGIN.LOGIN_SUCCESS, result.data))
        .catch((error) =>
            commit(ACTION_TYPES.LOGIN.LOGIN_FAILURE, error.data.error_message)
        );
};

const handleSignup = ({ commit }, [email, password, firstName, lastName, phone]) => {
    commit(ACTION_TYPES.SIGNUP.SIGNUP_REQUEST);
    signup(email, password, firstName, lastName, phone)
        .then((result) => commit(ACTION_TYPES.SIGNUP.SIGNUP_SUCCESS, result.data))
        .catch((error) =>
            commit(ACTION_TYPES.SIGNUP.SIGNUP_FAILURE, error.data.error_message)
        );
};

const handleForgotPassword = ({ commit }, [email]) => {
    commit(ACTION_TYPES.FORGOT_PASSOWRD.FORGOT_PASSOWRD_REQUEST);
    forgotPassword(email)
        .then((result) =>
            commit(ACTION_TYPES.FORGOT_PASSOWRD.FORGOT_PASSOWRD_SUCCESS, result.data)
        )
        .catch((error) =>
            commit(
                ACTION_TYPES.FORGOT_PASSOWRD.FORGOT_PASSOWRD_FAILURE,
                error.data.error_message
            )
        );
};

const logout = ({ commit }) => commit(ACTION_TYPES.LOGOUT.LOGOUT_REQUEST);

const clearLoginReducer = ({ commit }) => {
    console.log("Clear");
    commit(ACTION_TYPES.LOGIN.LOGIN_CLEAR);
};

const clearSignupReducer = ({ commit }) => {
    commit(ACTION_TYPES.SIGNUP.SIGNUP_CLEAR);
};

const saveChapter = ({ commit }, [chapterId]) =>
    commit(ACTION_TYPES.SAVE_CHAPTER_ID, chapterId);

const saveGroup = ({ commit }, [groupId]) =>
    commit(ACTION_TYPES.SAVE_GROUP_ID, groupId);

export default {
    loadChapters,
    handleLogin,
    handleSignup,
    handleForgotPassword,
    logout,
    clearLoginReducer,
    clearSignupReducer,
    saveChapter,
    saveGroup,
};