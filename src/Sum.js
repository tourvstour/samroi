import React, { Component } from "react"
import { Card } from 'antd'
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';

const data = [
    {
        name: 'Page A', uv: 590, pv: 800, amt: 1400,
    },
    {
        name: 'Page B', uv: 868, pv: 967, amt: 1506,
    },
    {
        name: 'Page C', uv: 1397, pv: 1098, amt: 989,
    },
    {
        name: 'Page D', uv: 1480, pv: 1200, amt: 1228,
    },
    {
        name: 'Page E', uv: 1520, pv: 1108, amt: 1100,
    },
    {
        name: 'Page F', uv: 1400, pv: 680, amt: 1700,
    },
];
class Sum extends Component {
    constructor() {
        super();
        this.state = {
            score: []
        }
    }
    componentDidMount() {
        var url_string = window.location.search; //window.location.href
        let url_stringArrey = url_string.split("/"),
            hn = url_stringArrey[1].split("hn=")[1],
            date = url_stringArrey[0].split("?date=")[1]
        fetch("http://192.168.101.240:6061/api/sum.php", {
            method: "POST",
            body: JSON.stringify({
                hn: hn,
                date: date
            })
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    score: res
                })
            })
    }
    render() {
        return (<div>
            <Card title="chart">
                <ComposedChart
                    width={500}
                    height={400}
                    data={this.state.score}
                    margin={{
                        top: 20, right: 20, bottom: 20, left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" barSize={20} fill="#413ea0" />
                    <Line type="step" dataKey="score" stroke="#ff7300" />
                </ComposedChart>
            </Card>
            <Card title="สรุปคะแนน">

            </Card>
        </div>)
    }
}

export default Sum