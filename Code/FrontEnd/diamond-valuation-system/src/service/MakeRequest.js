import Http from "../utils/Http.js";
export const makeRequest = async (username,serviceId,createdDate,description,token) => {
    try {
        const res = await Http.httpRequest.post("api/account/valuation-request", {
            username,
            serviceId,
            createdDate,
            description,
        }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return res;
    } catch (error) {
        return {
            errCode: error,
        };
    }
};