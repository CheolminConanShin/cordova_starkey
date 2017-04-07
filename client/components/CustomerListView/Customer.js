import React from 'react'

var styles = {
  colorLavender: {
    backgroundColor: "lavender"
  },
  colorBlush: {
    backgroundColor: "lavenderblush"
  },
  font: {
    fontSize: "2vw"
  },
  margin: {
    marginBottom: "1%"
  },
  padding: {
    padding: "0px 0px 0px 5px"
  }
}

const marginInterval = 5

export default class Customer extends React.Component {
  constructor(props){
    super(props);
  }

  marginBottom(index) {
    if(index % marginInterval == 0) {
      return styles.margin
    } else {
      return {}
    }
  }

  render() {
    return(
      <div className="row" style={this.marginBottom(this.props.index)}>
        <div className="col-xs-1" style={Object.assign(styles.colorLavender, styles.font, styles.padding)}>{this.props.customer.name}</div>
        <div className="col-xs-2" style={Object.assign(styles.colorBlush, styles.font, styles.padding )}>{this.props.customer.registrationDate}</div>
        <div className="col-xs-5" style={Object.assign(styles.colorLavender, styles.font, styles.padding)}>{this.props.customer.address}</div>
        <div className="col-xs-2" style={Object.assign(styles.colorBlush, styles.font, styles.padding)}>{this.props.customer.phoneNumber}</div>
        <div className="col-xs-2" style={Object.assign(styles.colorLavender, styles.font, styles.padding)}>{this.props.customer.mobilePhoneNumber}</div>
      </div>
    )
  }
}
