import Http from "../utils/Http.js";
export const deleteHardAccount = async (id, token) => {
    try {
        const res = await Http.httpRequest.delete("api/account/delete", {
            params : {
                id
            },
            headers : {
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