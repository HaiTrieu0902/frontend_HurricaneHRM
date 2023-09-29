import { Card, Col, Row } from 'antd';
import './Overview.scss';
import CardCustomTitle from '../../../components/CardCustomTitle';
const Overview = () => {
    return (
        <Row gutter={[16, 16]}>
            <Col span={12}>
                <CardCustomTitle height={220}>
                    <p>69 Active Projects</p>
                </CardCustomTitle>
            </Col>
            <Col span={12}>
                <CardCustomTitle height={220}>
                    <p>69 Active Projects</p>
                </CardCustomTitle>
            </Col>
            <Col span={12}>
                <CardCustomTitle height={220}>
                    <p>69 Active Projects</p>
                </CardCustomTitle>
            </Col>
            <Col span={12}>
                <CardCustomTitle height={220}>
                    <p>69 Active Projects</p>
                </CardCustomTitle>
            </Col>
        </Row>
    );
};

export default Overview;
