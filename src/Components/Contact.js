import React, { Component } from 'react';
import { Row,Col,Icon  } from 'antd';

const data = require('../data.json') 
//<img { process.env.PUBLIC_URL + 'DSCF6452.jpg'} />   
//console.log(JSON.stringify(data))

class Contact extends Component {
    componentDidMount(){
    document.title = "Contact"
  }
  render() {
    return (
      <div className="bg">
      <Row >
        <Col span={18} offset={3}>
        <br/><br/><br/><br/>
        <div className="card">
        <p><span><Icon type="mail" />&nbsp;&nbsp;</span><span>{data.contact.email2}</span></p>
        <p><span><Icon type="phone" />&nbsp;&nbsp;</span><span>{data.contact.tell}</span></p>
        <p><span><Icon type="environment" />&nbsp;&nbsp;</span><span>{data.contact.address}</span></p>
        <br/><br/><br/>
        <p>
        <span><a href={data.contact.facebook} target="blank"><Icon type="facebook" style={{ fontSize: '4vw',color: '#090808' }} /></a></span>&nbsp;&nbsp;
        <span><a href={data.contact.instagram} target="blank"><Icon type="instagram" style={{ fontSize: '4vw',color: '#090808'}} /></a> </span>
        </p>
        <br/>
        </div>  
        </Col>
      </Row>
      </div>
    );
  }
}

export default (Contact);
