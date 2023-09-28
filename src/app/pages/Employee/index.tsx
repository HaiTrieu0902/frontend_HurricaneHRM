import { Helmet } from 'react-helmet-async';
import ContainerLayout from '../../components/Container';
import { Button, Col, Pagination, Row, Table, message } from 'antd';
import CardCustomTitle from '../../components/CardCustomTitle';
import './Employee.scss';
import { ColumnsType } from 'antd/es/table';
import TooltipParagraph from '../../components/TooltipParagrah';
import { IEmployee, IEmployeeList } from '../../types/employee';
import { useEffect, useState } from 'react';
import { getListEmployeeAPI } from '../../service/api/employee';

const PAGE_SIZE = 10;
import { format } from 'date-fns';
const columns: ColumnsType<IEmployee> = [
    {
        key: 'employee_name',
        title: 'Employee Name',
        dataIndex: 'employee_name',
        render: (text, row) => (
            <TooltipParagraph placement="topLeft" title={row?.employee_name}>
                {row?.employee_name}
            </TooltipParagraph>
        ),
        ellipsis: {
            showTitle: false,
        },
    },
    {
        key: 'email',
        title: 'Email',
        dataIndex: 'email',
        render: (text, row) => (
            <span>
                <TooltipParagraph placement="topLeft" title={row?.email}>
                    {row?.email}
                </TooltipParagraph>
            </span>
        ),
    },

    {
        key: 'card_number',
        title: 'Card Number',
        dataIndex: 'card_number',
        render: (text, row) => (
            <span>
                <TooltipParagraph placement="topLeft" title={row?.card_number}>
                    {row?.card_number}
                </TooltipParagraph>
            </span>
        ),
    },
    {
        key: 'gender',
        title: 'Gender',
        dataIndex: 'gender',
        render: (text, row) => (
            <span>
                <TooltipParagraph placement="topLeft" title={row?.gender}>
                    hihi
                </TooltipParagraph>
            </span>
        ),
    },
    {
        key: 'mother_name',
        title: 'Mother Name',
        dataIndex: 'mother_name',
        render: (text, row) => <span>{row?.mother_name}</span>,
    },

    {
        key: 'date_of_birth',
        title: 'Date of Birth',
        dataIndex: 'date_of_birth',
        render: (text, row) => <span>{format(new Date(row?.date_of_birth), 'dd/MM/yyyy')}</span>,
    },

    {
        key: ' place_of_birth',
        title: 'Place Of Birth',
        dataIndex: ' place_of_birth',
        render: (text, row) => <span>{row?.place_of_birth}</span>,
    },

    {
        key: 'home_address',
        title: 'Home Address',
        dataIndex: 'home_address',
        render: (text, row) => <span>{row?.home_address}</span>,
    },
    {
        key: 'mobile_no',
        title: 'Phone Number',
        dataIndex: 'mobile_no',
        render: (text, row) => <span>{row?.mobile_no}</span>,
    },
    {
        key: 'bank_account',
        title: 'Bank Account',
        dataIndex: 'bank_account',
        render: (text, row) => <span>{row?.bank_account}</span>,
    },
    {
        key: 'bank_name',
        title: 'Bank Name',
        dataIndex: 'bank_name',
        render: (text, row) => <span>{row?.bank_name}</span>,
    },
    {
        key: 'position',
        title: 'Position',
        dataIndex: 'position',
        render: (text, row) => <span>{row?.position}</span>,
    },
    {
        key: 'marriage_name',
        title: 'Marriage',
        dataIndex: 'marriage_name',

        render: (text, row) => <span>{row?.marriage_name}</span>,
    },
    {
        key: 'department_name',
        title: 'Department',
        dataIndex: 'department_name',
        render: (text, row) => <span>{row?.department_name}</span>,
    },
];

const EmployeePage = () => {
    const [listDataEmployee, setListDataEmployee] = useState<IEmployeeList>();
    const [totalListEmployee, setTotalListEmployee] = useState<number>(0);
    const [pageSize, setPageSize] = useState(PAGE_SIZE);
    const [page, setPage] = useState(1);
    const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);

    /* hanlde get list employee */
    const getListEmployee = async () => {
        try {
            const res = await getListEmployeeAPI({ pageNumber: 1 });
            setListDataEmployee(res);
            setTotalListEmployee(res?.total);
        } catch (error: any) {
            message.error('Get failed');
        }
    };

    /* handle change panigation */
    const handleChangePagination = (pageParam: any, pageSizeParam: any) => {
        if (pageSizeParam !== pageSize) {
            setPage(1);
        } else setPage(pageParam);
        setPageSize(pageSizeParam);
    };

    /* Effect call API*/
    useEffect(() => {
        getListEmployee();
    }, []);

    const rowSelection = {
        selectedRowKeys,
        onChange: (newSelectedRowKeys: any) => {
            setSelectedRowKeys(newSelectedRowKeys);
        },
    };

    return (
        <>
            <Helmet>
                <title>Employee</title>
            </Helmet>

            <ContainerLayout className="employee-container">
                <CardCustomTitle
                    title="Employee"
                    height={'80vh'}
                    extra={
                        <Row gutter={[0, 12]}>
                            <Col span={12}>
                                <Button className="btn-add" type="primary">
                                    Add
                                </Button>
                            </Col>
                            <Col span={12}>
                                <Button className="btn-delete" type="primary">
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    }
                >
                    <div>
                        <Table
                            rowSelection={rowSelection}
                            rowKey="employee_id"
                            className="table-employee__container"
                            pagination={false}
                            scroll={{ x: 2500, y: '63vh' }}
                            dataSource={listDataEmployee ? listDataEmployee?.data : []}
                            columns={columns}
                        ></Table>

                        <div className="table-staff__pagination">
                            <div style={{ flex: 1 }}></div>
                            {listDataEmployee?.data && (
                                <Pagination
                                    total={totalListEmployee}
                                    current={page}
                                    pageSize={pageSize}
                                    showSizeChanger={false}
                                    onChange={handleChangePagination}
                                />
                            )}
                        </div>
                    </div>
                </CardCustomTitle>
            </ContainerLayout>
        </>
    );
};

export default EmployeePage;
