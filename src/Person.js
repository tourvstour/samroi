import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button, Icon, Row, Col, Card } from 'antd';
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
                <Row gutter={8}>
                    <Col md={{ span: 3 }}>
                        ค้นหาผู้ป่วย:
                </Col>
                    <Col md={{ span: 4 }}>
                        <Input placeholder={"HN"} id="hn" />
                    </Col>
                    <Button onClick={this.Search}><Icon type="search" />Search</Button>
                </Row>
                <Card>
                    {this.state.person.map(a => (
                        <ul>
                            <h3>
                                HN: {a.patient_hn}
                            </h3>
                            <h3>
                                ชื่อ-สกุล: {a.patient_prefix_description} {a.patient_firstname} {a.patient_lastname}
                            </h3>
                            <h3> อายุ: {a.age}</h3>
                            <Button onClick={this.Confirm} >Confirm</Button>
                            <Button onClick={this.Next} disabled={this.state.ButtonState}>Next</Button>
                        </ul>
                    ))}
                </Card>
            </div>
        )
    }
}

export default connect()(Person);