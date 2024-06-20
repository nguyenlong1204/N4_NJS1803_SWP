import Http from "../utils/Http";
export const naturalDiamond = async (shape) => {
    try {
        const res = await Http.httpRequest.get("api/valuation-result/crawl-natural", {
            params: {
                shape: shape || ""
            }
        })       
        return res.data
    } catch (error) {
        return {
            errorCode: error
        }
    }
}
export const labGrownDiamond = async (shape) => {
    try {
        const res = await Http.httpRequest.get("api/valuation-result/crawl-lab-grown", {
            params: {
                shape: shape || ""
            }
        })       
        return res.data
    } catch (error) {
        return {
            errorCode: error
        }
    }
}