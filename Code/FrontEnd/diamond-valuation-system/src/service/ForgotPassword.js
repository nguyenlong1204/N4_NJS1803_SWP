import Http from "../utils/Http.js";
export const forgetPassword = async (username, email) => {
    try {
        const res = await Http.httpRequest.post("api/account/forget-password", {
            username,
            email,
        });
        return res.data;
    } catch (error) {
        return {
            errCode: error,
        };
    }
};
