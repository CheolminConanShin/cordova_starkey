var React = require('react');
var PropTypes = React.PropTypes;
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

const gridInstance = (
  <Grid>
    <Row className="show-grid">
      <Col lgHidden={true}><code>&lt;hidden when display size is large /&gt;</code><br/>{dummySentences.slice(0, 2).join(' ')}</Col>
      <Col mdHidden={true}><code>&lt;hidden when display size is medium /&gt;</code><br/>{dummySentences.slice(0, 2).join(' ')}</Col>
      <Col smHidden={true}><code>&lt;hidden when display size is small /&gt;</code><br/>{dummySentences.slice(0, 2).join(' ')}</Col>
      <Col xsHidden={true}><code>&lt;hidden when display size is x-small /&gt;</code><br/>{dummySentences.slice(0, 2).join(' ')}</Col>
    </Row>
  </Grid>
);

var CustomerTable = React.createClass({

  render: function() {
    return gridInstance;
  }

});

module.exports = CustomerTable;
