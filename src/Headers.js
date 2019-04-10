import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class Headers extends Component {
    render() {
        return (
            <div>
                <Layout style={{}}>
                    <Header style={{ backgroundColor: "#80ff80", textAlign: "center" }}>
                        <h2 onClick={this.Header}>ระบบงานกายภาพบำบัด</h2>
                    </Header>
                </Layout>
            </div>

        )
    }
}

export default Headers;