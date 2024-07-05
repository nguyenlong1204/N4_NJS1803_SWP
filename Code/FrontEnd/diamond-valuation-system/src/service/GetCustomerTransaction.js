import Http from "../utils/Http";
export const getCustomerTransaction = async (id) => {
    try {
        const res = await Http.httpRequest.get("api/vnpay/get", {
            params: {
                id
            }
        })      
        return res.data
    } catch (error) {
        console.error('API call error:', error.response ? error.response.data : error.message);
        return {
            errorCode: error.response ? error.response.status : 'NETWORK_ERROR',
            errorMessage: error.response ? error.response.data : error.message
        };
    }
};