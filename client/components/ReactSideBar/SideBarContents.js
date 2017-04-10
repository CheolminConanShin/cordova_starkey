import React from 'react'
import {Link} from 'react-router-dom'

const styles = {
  menuMargin: {
    marginBottom: "5px"
  },

  background: {
    height: "100%",
    backgroundColor: "black",
    padding: "20px 10px 10px 10px"
  }
}

const SideBarContents =
<div id="openedSideBar" style={styles.background}>
  <div style={styles.menuMargin}><Link to="/">메뉴</Link></div>
  <div style={styles.menuMargin}><Link to="/customerListView">고객리스트</Link></div>
  <div style={styles.menuMargin}><Link to="/reactSideBar">사이드바</Link></div>
</div>

export default SideBarContents
