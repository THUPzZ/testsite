import React from 'react';
import { Layout,Row,Col  } from 'antd';
import { NavLink } from 'react-router-dom'
import Routing from './Route'
const { Sider } = Layout;
class App extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width="20%" style={{ background: '#090808' }}>
        <Row>
        <Col span={16} offset={4}>
        <br/><br/><br/><br/>
        <img style={{ width: '100%' ,border: '5px solid #ddd'}} src={ process.env.PUBLIC_URL + '00.jpg' } alt="00" />  
        </Col>
        </Row>
        <br/><br/><br/>
        <Row>
        <Col>
        <p><NavLink exact to="/about" activeClassName="is-active" className="bt">About</NavLink></p>
        <br/>
        <p><NavLink exact to="/contact" activeClassName="is-active" className="bt">Contact</NavLink></p>
        </Col>
        </Row>
        </Sider>
        <Layout>          
        <Routing/>
        </Layout>
    </Layout>
    
    );
  }
}


export default App;
