import { axiosCustomer } from '../../config';

export const getListEmployeeAPI = async (param: { pageNumber: number }) => {
    return axiosCustomer
        .get(`api/v1/employee/get-list-employee-panigation?page=${param.pageNumber}`)
        .then((res) => res.data);
};
