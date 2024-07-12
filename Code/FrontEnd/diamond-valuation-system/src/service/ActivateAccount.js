import Http from "../utils/Http.js";
export const activateAccount = async (code) => {
    try {
        const res = await Http.httpRequest.post("api/account/activate?",{}, {
            params: {
                code
            }
        });
        return res.data;
    } catch (error) {
        return {
            errCode: error,
        };
    }
};