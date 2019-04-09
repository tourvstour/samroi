import React, { Component } from 'react'
import Question from './question';
import Person from './Person'
import { connect } from 'react-redux';
import { Button } from 'antd';

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
                    <Person />
                </div>
            )
        }
        else if (this.props.page === "question") {
            return (
                <div>
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