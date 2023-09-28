export interface IEmployeeList {
    data: IEmployee[];
    total: number;
    totalPage: number;
}

export interface IEmployee {
    employee_name: string;
    card_number: string;
    gender: number;
    email: string;
    mother_name: string;
    date_of_birth: Date;
    place_of_birth: string;
    home_address: string;
    mobile_no: number;
    bank_account: number;
    bank_name: string;
    position: string;
    basic_salary: number;
    account_user_id: number;
    benefits: string[];
    academic_level: string[];
    createdAt: Date;
    updatedAt: Date;
    employee_id: number;
    employee_code: string;
    marriage_id: number;
    department_id: number;
    marriage_name: string;
    department_name: string;
}
