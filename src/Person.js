import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button, Label, Row, Col } from 'antd';
class Person extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <Row gutter={16}>
                <Col md={{ span: 2 }}>
                    ค้นหาผู้ป่วย:
                </Col>

                <Col md={{ span: 4 }}>
                    <Input placeholder={"VN"} />
                </Col>

            </Row>

        )
    }
}

export default connect()(Person);