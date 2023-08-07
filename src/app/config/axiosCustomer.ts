import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '../constants';
import Cookies from 'js-cookie';

const axiosCustomer = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_HOST_ENV,
    timeout: 100000,
});

axiosCustomer.interceptors.request.use(
    async (config) => {
        if (config.method === 'get') {
            const currentTime = new Date().getTime();
            const oldUrl: any = config.url;
            let newUrl = config.url;
            if (oldUrl.includes('?')) {
                newUrl = `${oldUrl}&time=${currentTime}`;
            } else {
                newUrl = `${oldUrl}?time=${currentTime}`;
            }
            config.url = newUrl;
        }
        const cloneConfig: any = { ...config };
        if (Cookies.get(ACCESS_TOKEN_KEY)) {
            cloneConfig.headers['Authorization'] = `Bearer ${Cookies.get(ACCESS_TOKEN_KEY)}`;
        }
        return cloneConfig;
    },
    (error) => Promise.reject(error),
);

axiosCustomer.interceptors.response.use(
    (response) => response,
    (error) => responseErrorHandler(error),
);

const responseErrorHandler = async (error: any) => {
    if (error.response.status === 401) {
        localStorage.clear();
        Cookies.set(ACCESS_TOKEN_KEY, '');
        window.location.href = '/login';
    }
    return Promise.reject(error.response.data);
};

export default axiosCustomer;
