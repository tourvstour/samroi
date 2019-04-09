import React, { Component } from 'react'
import { Card, Col, Row, Icon } from 'antd'
class PageIndex extends Component {
    render() {
        return (<div>
            <Row gutter={8} type="flex" justify="center" align="middle" >
                <Col lg={{ span: "8" }}>
                    <Card onClick={() => window.location.href = "/main"}>
                        <a><h2>ทำแบบประเมิน</h2></a>
                    </Card>
                </Col>
                <Col lg={{ span: "8" }}>
                    <Card>
                        <h2>Report</h2>
                    </Card>
                </Col>
            </Row>
        </div>)
    }
}

export default PageIndex;