import React, { Component } from 'react'
import { Card, Col, Row } from 'antd'
import Headers from './Headers'
class PageIndex extends Component {
    render() {
        return (<div >
            <Headers />
            <br />
            <div style={{ width: '99%' }}>
                <Row type="flex" justify="center" gutter={8}>
                    <Col lg={{ span: "8" }}>
                        <Card onClick={() => window.location.href = "/main"} style={{ textAlign: "center", borderRadius: "10px" }}>
                            <a>
                                <img src="/pic/Checklist-icon.png" style={{ height: "200px" }} />
                                <br />
                                <h2>ทำแบบประเมิน</h2>
                            </a>
                        </Card>
                    </Col>
                    <Col lg={{ span: "8" }}>
                        <Card style={{ textAlign: "center", borderRadius: "10px" }}>
                            <a>
                                <img src="/pic/report.png" style={{ height: "200px" }} />
                                <br />
                                <h2>Report</h2>
                            </a>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div >)
    }
}

export default PageIndex;