var React = require('react');
var PropTypes = React.PropTypes;
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

var styles = {
  color1: {
    backgroundColor: "lavender"
  },
  color2: {
    backgroundColor: "lavenderblush"
  }
}

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
  <div>
    <div className="row">
      <div className="col-xs-2" style={styles.color1}>name</div>
      <div className="col-xs-2" style={styles.color2}>date</div>
      <div className="col-xs-4" style={styles.color1}>address</div>
      <div className="col-xs-2" style={styles.color2}>telephone</div>
      <div className="col-xs-2" style={styles.color1}>mobilephone</div>
    </div>
    <div className="row">
      <div className="col-xs-2" style={styles.color1}>Conan Shin</div>
      <div className="col-xs-2" style={styles.color2}>2015-11-30</div>
      <div className="col-xs-4" style={styles.color1}>용산구 한강대로 98다길 26</div>
      <div className="col-xs-2" style={styles.color2}>010-1111-1111</div>
      <div className="col-xs-2" style={styles.color1}>010-1111-1111</div>
    </div>
    <div className="row">
      <div className="col-xs-2" style={styles.color1}>Conan Shin</div>
      <div className="col-xs-2" style={styles.color2}>2015-11-30</div>
      <div className="col-xs-4" style={styles.color1}>용산구 한강대로 98다길 26</div>
      <div className="col-xs-2" style={styles.color2}>010-1111-1111</div>
      <div className="col-xs-2" style={styles.color1}>010-1111-1111</div>
    </div>
  </div>
)

var CustomerTable = React.createClass({

  render: function() {
    return tableInstance;
  }

});

module.exports = CustomerTable;
