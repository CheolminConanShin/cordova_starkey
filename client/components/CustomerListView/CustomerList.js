var React = require('react');
var PropTypes = React.PropTypes;
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
import Header from './Header'
import Firebase from '../../connector/Firebase'
import Customer from './Customer'

export default class CustomerTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listitem: undefined
    }
  }

  restructureData(objectFormatData) {
    let returnList = [];
    for(let [key, value] of Object.entries(objectFormatData)) {
      value.key = key;
      returnList.push(value);
    }
    return returnList;
  }

  componentWillMount() {
    const me = this;
    Firebase.reference.on("value", snapshot => {
      const restructuredData = this.restructureData(snapshot.val());
      const listItemComponent = restructuredData.map((customer, index) =>
        <Customer index={index+1} key={customer.key} customer={customer}/>
      )
      me.setState({
        listitem: listItemComponent
      })
    })
  }

  render() {
    return (
      <div>
        <Header/>
        {this.state.listitem}
      </div>
    )
  }
}
