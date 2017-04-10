import React, { PropTypes } from 'react'

var styles = {
  backgroundColor: "#555250",
  color: "white",
  marginBottom: 5,
  fontSize: "2vw",
  padding: "0px 0px 0px 5px",
  fontFamily: "BMhanna"
}

const Header = React.createClass({
  render () {
    return (
      <div className="row">
        <div className="col-xs-1" style={styles}>이름</div>
        <div className="col-xs-2" style={styles}>가입일</div>
        <div className="col-xs-5" style={styles}>주소</div>
        <div className="col-xs-2" style={styles}>전화번호</div>
        <div className="col-xs-2" style={styles}>핸드폰</div>
      </div>
    )
  }
})

export default Header
