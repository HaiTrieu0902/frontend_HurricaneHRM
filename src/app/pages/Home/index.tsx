import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ContainerLayout from '../../components/Container';
import Overview from './Overview';
import Introduction from './Introduction';
const HomePage = () => {
    const [currentValue, setCurrentValue] = useState(0);

    /* Effect increase value clients */
    useEffect(() => {
        const incrementInterval = 50;
        const interval = setInterval(() => {
            if (currentValue >= 1000000) {
                clearInterval(interval);
            } else {
                setCurrentValue((prevValue) => prevValue + 50000);
            }
        }, incrementInterval);

        return () => {
            clearInterval(interval);
        };
    }, [currentValue]);

    return (
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <ContainerLayout className="homepage-container">
                <Row gutter={[32, 10]}>
                    <Col span={11}>
                        <Overview />
                    </Col>
                    <Col span={13}>
                        <Introduction />
                    </Col>
                </Row>
            </ContainerLayout>
            {/* <div className="min-w-70px counted">{currentValue.toLocaleString()} +</div> */}
        </>
    );
};

export default HomePage;
