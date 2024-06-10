import Http from '../utils/Http.js';
// export const loginWithGoogle = async (token) => {
//     try {
//         const res = await httpRequest.post(
//             'login/google',
//             {},
//             {
//                 headers: {
//                     'Content-Type': 'application/json',                    
//                     Authorization: `Bearer ${token}`,
//                 },
//                 // mode: 'no-cors'
//             },
//         );
//         return res;
//     } catch (error) {
//         return {
//             errCode: error  
//         }
//     }
// };
export const login = async (username, password) => {
    try {
        const res = await Http.httpRequest.post(
            'api/account/login',
            {
                username,
                password    
            }
        );
        return res;
    } catch (error) {
        return {
            errCode: error  
        }
    }
};