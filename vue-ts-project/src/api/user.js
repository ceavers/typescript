import axios from './index';
export const loginReq = (data) => {
    return axios.request({
        url: '/api/user/login',
        data,
        method: 'POST'
    });
};
export const getInfoReq = (data) => {
    return axios.request({
        url: '/api/user/get_info',
        data,
        method: 'POST'
    });
};
//# sourceMappingURL=user.js.map