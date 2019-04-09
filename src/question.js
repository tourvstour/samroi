import React, { Component } from 'react';
import { message, Radio, Button, Icon, Row, Col, Table } from 'antd'
import { connect } from 'react-redux'
import Person from './Person'
const RadioGroup = Radio.Group;
const radioStyle = {
  display: 'block',
  height: '30px',
}
class question extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      columns: [{
        title: 'ข้อ',
        dataIndex: 'question_number',
      }, {
        title: 'รายการ',
        dataIndex: 'question_desc',
      }
        , {
        title: 'sub_list_1',
        dataIndex: '',
        render: (e) => <RadioGroup onChange={this.onChange1} name={e}>
          <Radio style={radioStyle} value={1}>1 คะแนน</Radio>
          <Radio style={radioStyle} value={2}>2 คะแนน</Radio>
        </RadioGroup>
      }, {
        title: 'sub_list_2',
        dataIndex: '',
        render: (e) => <RadioGroup onChange={this.onChange2} name={e}>
          <Radio style={radioStyle} value={1}>1 คะแนน</Radio>
          <Radio style={radioStyle} value={2}>2 คะแนน</Radio>
        </RadioGroup>
      }, {
        title: 'sub_list_3',
        dataIndex: '',
        render: (e) => <RadioGroup onChange={this.onChange3} name={e}>
          <Radio style={radioStyle} value={1}>1 คะแนน</Radio>
          <Radio style={radioStyle} value={2}>2 คะแนน</Radio>
        </RadioGroup>
      }, {
        title: 'sub_list_4',
        dataIndex: '',
        render: (e) => <RadioGroup onChange={this.onChange4} name={e}>
          <Radio style={radioStyle} value={1}>1 คะแนน</Radio>
          <Radio style={radioStyle} value={2}>2 คะแนน</Radio>
        </RadioGroup>
      }, {
        title: 'sub_list_5',
        dataIndex: '',
        render: (e) => <RadioGroup onChange={this.onChange5} name={e}>
          <Radio style={radioStyle} value={1}>1 คะแนน</Radio>
          <Radio style={radioStyle} value={2}>2 คะแนน</Radio>
        </RadioGroup>
      }],
      value1: null, value2: null, value3: null, value4: null, value5: null
    }
  }
  componentDidMount() {
    fetch("http://192.168.101.240:6061/api/show_q.php")
      .then(res => res.json())
      .then(res => {
        this.setState({
          dataSource: res
        })
      })
  }
  onChange1 = (e) => {
    // console.log(e.target.name.question_number, e.target.name.sub_list_1, e.target.value)
    let datas = {
      num: e.target.name.question_number.toString(),
      list: e.target.name.sub_list_1.toString(),
      values: e.target.value.toString()
    }
    this.props.dispatch({
      type: "ADD",
      datas
    })
  }
  onChange2 = (e) => {
    let datas = {
      num: e.target.name.question_number.toString(),
      list: e.target.name.sub_list_2.toString(),
      values: e.target.value.toString()
    }
    this.props.dispatch({
      type: "ADD",
      datas
    })
  }
  onChange3 = (e) => {
    let datas = {
      num: e.target.name.question_number.toString(),
      list: e.target.name.sub_list_3.toString(),
      values: e.target.value.toString()
    }
    this.props.dispatch({
      type: "ADD",
      datas
    })
  }
  onChange4 = (e) => {
    let datas = {
      num: e.target.name.question_number.toString(),
      list: e.target.name.sub_list_4.toString(),
      values: e.target.value.toString()
    }
    this.props.dispatch({
      type: "ADD",
      datas
    })
  }
  onChange5 = (e) => {
    let datas = {
      num: e.target.name.question_number.toString(),
      list: e.target.name.sub_list_5.toString(),
      values: e.target.value.toString()
    }
    this.props.dispatch({
      type: "ADD",
      datas
    })
  }

  Save = () => {
    let person = this.props.person,
      data = this.props.scoreValue,
      lengthData = this.props.scoreValue.length,
      lengthNum = this.state.dataSource.length,
      countNum = lengthNum * 5

    if (lengthData < countNum) {
      message.warning("ระบุคะแนนไม่ครบ")
    } else {
      fetch("http://192.168.101.240:6061/api/save.php", {
        method: "POST",
        body: JSON.stringify({
          person: person,
          data: data
        })
      })
        .then(res => res.json())
        .then(res => {
          let stat = res.stat
          console.log(stat)
          if (stat === "200") {
            message.success("บันทึกข้อมูลทำเสร็จ")
          }
          else {
            message.error("ไม่สามารถบันทึกซ้ำได้")
          }
        })
    }
  }
  render() {
    return (
      <div >
        <Table columns={this.state.columns} dataSource={this.state.dataSource} pagination={false}></Table>
        <Button style={{ backgroundColor: "#00ffff" }} onClick={this.Save}>บันทึก</Button>
        <Button style={{ backgroundColor: "#ff6600", color: "#ffffff" }}>ยกเลิก</Button>
      </div>
    );
  }
}
const Score = state => {
  return {
    score: state.score.map(a => a.values),
    person: state.person,
    scoreValue: state.score
  }
}

export default connect(Score)(question);
