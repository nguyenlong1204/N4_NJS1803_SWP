import Http from "../utils/Http.js";
export const loginWithGoogle = async (email, name) => {
    try {
        const res = await Http.httpRequest.post("api/account/google", {
            email,
            name,
        });
        return res.data;
    } catch (error) {
        return {
            errCode: error,
        };
    }
};
export const login = async (username, password) => {
    try {
        const res = await Http.httpRequest.post("api/account/login", {
            username,
            password,
        });
        return res;
    } catch (error) {
        return {
            errCode: error,
        };
    }
};
