import React, { Component } from 'react'
import Question from './question';
import Person from './Person'
import Headers from './Headers'
import { connect } from 'react-redux';
import { Row, Card, Col } from 'antd';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            page: null
        }
    }
    componentDidMount() {
        let input = window.location.pathname
        this.setState({
            page: input
        })
    }

    render() {
        if (this.props.page === "") {
            return (
                <div>
                    <Headers />
                    <br />
                    <Row type="flex" justify="center" >
                        <Col lg={{ span: "18" }}>
                            <Person />
                        </Col>
                    </Row>

                </div>
            )
        }
        else if (this.props.page === "question") {
            return (
                <div>
                    <Headers />
                    <br />
                    <Question />
                </div>
            )
        }
    }
}
const Page = state => {
    return {
        page: state.pageNumber
    }
}
export default connect(Page)(Main);