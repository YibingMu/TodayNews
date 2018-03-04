import React, { Component } from 'react'
import { Router, Route, hashHistory } from 'react-router'
import PCIndex from './js/components/pc_index'
import MobileIndex from './js/components/mobile_index'

import MediaQuery from 'react-responsive'
import 'antd/dist/antd.css'


class App extends Component {
  render() {
    return (
      <div>
          <MediaQuery query='(min-device-width: 1224px)'>
              <PCIndex/>
          </MediaQuery>
          <MediaQuery query='(max-device-width: 1224px)'>
              <MobileIndex/>
          </MediaQuery>
      </div>
    );
  }
}

export default App;
