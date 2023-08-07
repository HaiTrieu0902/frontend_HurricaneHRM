import { axiosCustomer } from '../../config';
import { IParamLogin } from './../../types/auth.type';

export const loginAPI = async (data: IParamLogin) => {
    return axiosCustomer.post('/api/v1/auth/login', data).then((res) => res.data);
};
