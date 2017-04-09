import React from 'react'
var Sidebar = require('react-sidebar').default;
import SideBarContents from './SideBarContents'
import Hamburger from './Hamburger'
import CustomerListView from '../CustomerListView'
import ButtonView from '../ButtonView'

const styles = {
  mainView: {
    width: "90%",
    height: "100%",
    marginLeft: "5%"
  },
  title: {
    position: "relative",
    color: "#555250",
    borderRadius: "25px",
    margin: "3% 7% 3% 7%",
    padding: "10px 20px 10px 20px",
    fontSize: "4vw",
    lineHeight: "5vw",
    textAlign: "center"
  },
}


export default class ReactSideBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sidebarOpen: false,
      sidebarDocked: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({
      sidebarOpen: open
    })
  }

  componentWillMount() {
    const mql = window.matchMedia("(min-width: 800px)");
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged() {
    this.setState({
      sidebarDocked: this.state.mql.matches
    });
  }

  render() {
    let HamburgerIcon;
    if(this.state.mql.matches) {
      HamburgerIcon = <div></div>
    }else{
      HamburgerIcon = <Hamburger onClick={() => this.onSetSidebarOpen(true)}/>
    }
    return (
      <Sidebar sidebar={SideBarContents}
               open={this.state.sidebarOpen}
               docked={this.state.sidebarDocked}
               onSetOpen={this.onSetSidebarOpen}>
               <div style={styles.title}>{HamburgerIcon}{this.props.headerContent}</div>
               <div style={styles.mainView}>
                 <this.props.mainView/>
               </div>
      </Sidebar>
    );
  }
}
