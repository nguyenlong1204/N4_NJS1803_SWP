import Http from "../utils/Http.js";
export const resetForgetPassword = async (token,newPassword) => {
    try {
        const res = await Http.httpRequest.post("api/account/reset-forget-password", {
            token,
            newPassword
        }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return res.data;
    } catch (error) {
        return {
            errCode: error,
        };
    }
};