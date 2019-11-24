import axios from 'axios';
import config from '@/config';
const { api: { devApiBaseUrl, proApiBaseUrl } } = config;
const apiBaseUrl = process.env.NODE_ENV === 'production' ? proApiBaseUrl : devApiBaseUrl;
class HttpRequest {
    constructor(baseUrl = apiBaseUrl) {
        this.baseUrl = baseUrl;
    }
    request(options) {
        const instance = axios.create();
        options = this.mergeConfig(options);
        this.interceptors(instance, options.url);
        return instance(options);
    }
    interceptors(instance, url) {
        instance.interceptors.request.use((config) => {
            return config;
        }, (error) => {
            return Promise.reject(error);
        });
        instance.interceptors.response.use((res) => {
            const { data } = res;
            const { code, msg } = data;
            if (code !== 0) {
                console.error(msg);
            }
            return res;
        }, (error) => {
            return Promise.reject(error);
        });
    }
    mergeConfig(options) {
        return Object.assign({ baseURL: this.baseUrl }, options);
    }
}
export default HttpRequest;
//# sourceMappingURL=axios.js.map