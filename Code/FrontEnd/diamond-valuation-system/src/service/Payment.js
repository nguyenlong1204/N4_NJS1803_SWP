import Http from "../utils/Http";
export const vnpayPayment = async (amount, orderInfo, orderType) => {
    try {
        const res = await Http.httpRequest.get("api/vnpay/create", {
            params: {
                amount,
                orderInfo,
                orderType
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