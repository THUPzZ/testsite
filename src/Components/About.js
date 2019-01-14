import React, { Component } from 'react';
import { Row,Col ,Card} from 'antd';
const data = require('../data.json') 
//console.log(JSON.stringify(data))
class About extends Component {
  componentDidMount(){
    document.title = "About"
  }
  render() {
    return (
      <div className="bg">
        <Row>
        <Col span={26} offset={1}>
        <br/><br/><br/>
        <div className="head">
          About Me
        </div> 
        </Col>
        </Row>
        <br/><br/><br/><br/><br/>
      
        <Row type="flex" justify="center" gutter={48}>
        <Col span={10}>
          <Card title={data.PersonalData.name+' '+data.PersonalData.lastname} bordered={false} style={{ width: '100%',paddingLeft:30}}>
          <br/><br/>
          <p><span><b>BirthDate </b></span><span>{data.PersonalData.birthDate}</span></p>
          <p><span><b>Age </b></span><span>{data.PersonalData.age} year.</span></p>
          <p><span><b>Height </b></span><span>{data.PersonalData.height} centimeter</span></p>
          <p><span><b>Weight </b></span><span>{data.PersonalData.weight} kilogram</span></p>
          <p><span><b>BloodType </b></span><span>{data.PersonalData.BloodType}</span></p>
          <p><span><b>Nationality </b></span><span>{data.PersonalData.nationality}</span></p>
          <p><span><b>Religion </b></span><span>{data.PersonalData.religion}</span></p>
          <br/><br/>
          </Card>
        </Col>
        <Col span={10}>
          <Card title={"Education"} bordered={false} style={{ width: '100%',paddingLeft:30}}>
          <br/><br/>
          <p><span><b>{data.education[0].name+" "}</b></span><span style={{paddingLeft:30}}>{" "+data.education[0].longTime}</span></p>
          <p><span><b>{data.education[1].name+" "}</b></span><span style={{paddingLeft:30}}>{" "+data.education[1].longTime}</span></p>
          <p><span style={{paddingLeft:30}} >- {data.education[1].branch}</span></p>
          <p><span><b> </b></span><span>{}</span></p>
          <p><span><b> </b></span><span>{}</span></p>
          <p><span><b> </b></span><span>{}</span></p>
          <p><span><b> </b></span><span>{}</span></p>
          <br/><br/>
          </Card>
        </Col>
        </Row>
      </div>    
    );
  }
}

  
export default About;