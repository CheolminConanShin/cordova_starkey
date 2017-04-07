var React = require('react');
var PropTypes = React.PropTypes;
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
import Header from './Header'
import Firebase from '../../connector/Firebase';

var styles = {
  color1: {
    backgroundColor: "lavender"
  },
  color2: {
    backgroundColor: "lavenderblush"
  },
  margin: {
    margin: "3%"
  }
}

const tableInstance = (
  <div style={styles.margin}>
    <Header/>
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
  render() {
    return tableInstance;
  },

  componentDidMount() {
    Firebase.reference.once("value", snapshot => {
      const store = snapshot.val();
      console.log(store);
    })
  }
});

module.exports = CustomerTable;
