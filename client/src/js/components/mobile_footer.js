import React, { Component } from 'react'
import { Row, Col } from 'antd';
import '../../css/pc.css'

class MobileFooter extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="footer">
                        &copy;&nbsp;2018 ReactNews All Right Reserved.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}

export default MobileFooter;
