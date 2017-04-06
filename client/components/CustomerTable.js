var React = require('react');
var PropTypes = React.PropTypes;
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

const gridInstance = (
  <Grid>
    <Row className="show-grid">
      <Col xs={2} lg={2}>이름</Col>
      <Col xs={2} lg={2}>가입일</Col>
      <Col xs={4} lg={4}>주소</Col>
      <Col xs={2} lg={2}>집</Col>
      <Col xs={2} lg={2}>핸드폰</Col>
    </Row>
  </Grid>
);

const tableInstance = (
  <div className="row">
    <div className="col-xs-4" style={{"background-color:lavender"}}>.col-sm-4</div>
    <div className="col-xs-4" style={{background-color:"lavenderblush"}}>.col-sm-4</div>
    <div className="col-xs-4" style={{background-color:"lavender"}}>.col-sm-4</div>
  </div>
)

var CustomerTable = React.createClass({

  render: function() {
    return tableInstance;
  }

});

module.exports = CustomerTable;
