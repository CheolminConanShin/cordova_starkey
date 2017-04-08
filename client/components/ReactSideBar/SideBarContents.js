import React from 'react'

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
<div style={styles.background}>
  <div style={styles.menuMargin}><a id="home" className="menu-item" href="/">메뉴</a></div>
  <div style={styles.menuMargin}><a id="customerList" className="menu-item" href="/#/customerListView">고객리스트</a></div>
  <div style={styles.menuMargin}><a id="contact" className="menu-item" href="/contact">테스트</a></div>
</div>

export default SideBarContents
