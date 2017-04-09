import React from 'react'

var styles = {
  colorLavender: {
    backgroundColor: "#FFF6F2"
  },
  colorBlush: {
    backgroundColor: "#FFF6F2"
  },
  font: {
    fontSize: "1.7vw",
    fontFamily: "NanumGothic",
    color: "#555250"
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
      <div className="row equal" style={this.marginBottom(this.props.index)}>
        <div className="col-xs-1 align-middle" style={Object.assign(styles.colorLavender, styles.font, styles.padding)}>{this.props.customer.name}</div>
        <div className="col-xs-2 align-middle" style={Object.assign(styles.colorBlush, styles.font, styles.padding )}>{this.props.customer.registrationDate}</div>
        <div className="col-xs-5 align-middle" style={Object.assign(styles.colorLavender, styles.font, styles.padding)}>{this.props.customer.address}</div>
        <div className="col-xs-2 align-middle" style={Object.assign(styles.colorBlush, styles.font, styles.padding)}>{this.props.customer.phoneNumber}</div>
        <div className="col-xs-2 align-middle" style={Object.assign(styles.colorLavender, styles.font, styles.padding)}>{this.props.customer.mobilePhoneNumber}</div>
      </div>
    )
  }
}
