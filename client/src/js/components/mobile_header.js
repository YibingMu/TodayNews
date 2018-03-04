import React, { Component } from 'react'
import { Row, Col, Menu, Icon } from 'antd';
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
import '../../css/mobile.css'

class MobileHeader extends Component {
    constructor() {
        super();
        this.state = {
            current: 'top'
        };
    }
    render() {
        return (
            <div id="mobileheader">
                <header>
                    <img src="/images/logo.png" alt="logo"/>
                    <span>ReactNews</span>
                </header>
            </div>
        );
    }
}

export default MobileHeader;
