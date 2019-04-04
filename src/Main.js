import React, { Component } from 'react'
import Question from './question';
import Person from './Person'

class Main extends Component {
    render() {
        return (
            <div>
                <Person />
                <Question />
            </div>
        )
    }
}

export default Main;