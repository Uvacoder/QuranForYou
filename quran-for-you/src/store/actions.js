import { getChapters, login, signup } from "../apis";
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

const handleSignup = ({ commit }, [email, password, name, phone]) => {
    commit(ACTION_TYPES.SIGNUP.SIGNUP_REQUEST);
    signup(email, password, name, phone)
        .then((result) => commit(ACTION_TYPES.SIGNUP.SIGNUP_SUCCESS, result.data))
        .catch(() =>
            commit(ACTION_TYPES.SIGNUP.SIGNUP_FAILURE, error.data.error_message)
        );
};

export default { loadChapters, handleLogin, handleSignup };