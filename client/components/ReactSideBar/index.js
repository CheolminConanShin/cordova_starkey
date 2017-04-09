import React from 'react'
var Sidebar = require('react-sidebar').default;
import SideBarContents from './SideBarContents'
import Hamburger from './Hamburger'
import CustomerListView from '../CustomerListView'
import ButtonView from '../ButtonView'

const styles = {
  width: "90%",
  height: "100%",
  marginLeft: "5%"
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
    return (
      <Sidebar sidebar={SideBarContents}
               open={this.state.sidebarOpen}
               docked={this.state.sidebarDocked}
               onSetOpen={this.onSetSidebarOpen}>
               {this.props.headerContent}
               <Hamburger onClick={() => this.onSetSidebarOpen(true)}/>
               <div style={styles}>
                 <this.props.mainView/>
               </div>
      </Sidebar>
    );
  }
}
