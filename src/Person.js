import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button, Icon, Row, Col, Card, message } from 'antd';
class Person extends Component {
    constructor() {
        super()
        this.state = {
            person: [],
            ButtonState: "true"
        }
    }
    Search = () => {
        //console.log(e.target.value)
        let hn = document.getElementById('hn').value,
            type = "Enter"
        fetch("http://192.168.101.240:6061/api/visit_number.php", {
            method: "POST",
            body: JSON.stringify({
                type: type,
                hn: hn
            })
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    person: res
                })
            })
    }
    Confirm = () => {
        let data = this.state.person.map(a => a.patient_firstname).toString()
        if (data === "noData") {
            message.warning("ไม่พบข้อมูล")
        } else {
            this.setState({
                ButtonState: ""
            })
            this.props.dispatch({
                type: "Clear"
            })
            this.props.dispatch({
                type: "Person",
                datas: this.state.person
            })
        }
    }
    Next = () => {
        this.props.dispatch({
            type: "ClearPage"
        })
        this.props.dispatch({
            type: "Page",
            datas: "question"
        })
    }
    render() {
        return (
            <div>
                <Card style={{ borderRadius: "10px" }}>
                    <Row gutter={8} type="flex" justify="center" >
                        <Col md={{ span: 3 }}>
                            ค้นหาผู้ป่วย:
                        </Col>
                        <Col md={{ span: 4 }}>
                            <Input placeholder={"HN"} id="hn" />
                        </Col>
                        <Button onClick={this.Search}><Icon type="search" />Search</Button>
                    </Row>
                    <hr />
                    {this.state.person.map(a => (
                        <ul >
                            <h3>
                                HN: {a.patient_hn}
                            </h3>
                            <h3>
                                ชื่อ-สกุล: {a.patient_prefix_description} {a.patient_firstname} {a.patient_lastname}
                            </h3>
                            <h3> อายุ: {a.age}</h3>
                            <div style={{ textAlign: "center" }}>
                                <Button onClick={this.Confirm} type="primary" >Confirm</Button>{" "}
                                <Button onClick={this.Next} hidden={this.state.ButtonState}>Next<Icon type="right" /></Button>
                            </div>
                        </ul>
                    ))}
                </Card>

            </div>
        )
    }
}

export default connect()(Person);