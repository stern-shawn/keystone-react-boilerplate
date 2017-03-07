/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// Package Imports
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import {
  Layout,
  NavDrawer,
  Panel,
  Sidebar,
  AppBar,
  IconButton,
} from 'react-toolbox';

// Components
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';
import NavBar from 'components/NavBar';
// Sadly Scrollbars seems to be breaking useScroll middleware...
// import { Scrollbars } from 'react-custom-scrollbars';

// Styling
import styles from './styles.scss';
import theme from './themes.scss';

class App extends Component {
  // TODO: Internal state... blegh, Redux me
  state = {
    drawerActive: false,
    drawerPinned: false,
    sidebarPinned: false,
  };

  toggleDrawerActive = () => {
    this.setState({ drawerActive: !this.state.drawerActive });
  };

  toggleDrawerPinned = () => {
    this.setState({ drawerPinned: !this.state.drawerPinned });
  }

  toggleSidebar = () => {
    this.setState({ sidebarPinned: !this.state.sidebarPinned });
  };

  // Need to use a nested Layout structure to keep fixed AppBar from going
  // over the NavDrawer, at least until 2.x beta of react-toolbox is in production
  render() {
    return (
      <div className={styles.appWrapper}>
        <Helmet
          titleTemplate="%s - KeystoneJS + React-Redux!"
          defaultTitle="KeystoneJS + React-Redux!"
          meta={[
            {
              name: 'description',
              content: 'A meshing of KeystoneJS CMS and MXSTBR\'s React.js Boilerplate',
            },
          ]}
        />
        <Layout>
          <Panel>
            <div className={styles.contentArea}>
              <AppBar theme={theme} fixed leftIcon="menu" onLeftIconClick={this.toggleDrawerActive} />
              <Layout>
                <NavDrawer
                  active={this.state.drawerActive}
                  onOverlayClick={this.toggleDrawerActive}
                >
                  <NavBar />
                </NavDrawer>
                <Panel className={styles.contentPanel}>
                  <div className={styles.contentArea}>
                    <div className={styles.contentWrapper}>
                      {React.Children.toArray(this.props.children)}
                    </div>
                    <Footer />
                  </div>
                </Panel>
                <Sidebar pinned={this.state.sidebarPinned} width={5}>
                  <div>
                    <IconButton icon="close" onClick={this.toggleSidebar} />
                  </div>
                  <div className={styles.alertSidebar}>
                    <p>Supplemental content goes here.</p>
                  </div>
                </Sidebar>
              </Layout>
            </div>
          </Panel>
        </Layout>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
