import Http from "../utils/Http";
export const viewCustomerRequest = async (page, id) => {
    try {
        const res = await Http.httpRequest.get("api/pending-request/customer/get", {
            params: {
                page,
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