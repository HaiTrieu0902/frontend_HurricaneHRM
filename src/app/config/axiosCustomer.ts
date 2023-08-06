import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '../constants';
import Cookies from 'js-cookie';

export const axiosCustomer = async (url: string, method: string, data?: any) => {
    const headers = { Auth: `Bearer ${Cookies.get(ACCESS_TOKEN_KEY)}` };
    const options = {
        url,
        method,
        headers,
        data,
    };
    const response = await axios(options);
    return response.data;
};

export default axiosCustomer;
