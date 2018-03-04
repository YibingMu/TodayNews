import React, { Component } from 'react'
import { Row, Col, Menu, Icon, Button, Input,Tabs, Form,
    Checkbox, message, Modal } from 'antd'
const FormItem = Form.Item
const TabPane = Tabs.TabPane;
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
//import '../../css/pc.css'

class PCHeader extends Component {
    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLoggedin: false,
            userNickName: '',
            userId: 0
        };
    }

    setModalVisible(value) {
        this.setState({modalVisible:value})
    }

    handleClick(e){
        if (e.key = "register") {
            this.setState({current: 'register'});
            this.setModalVisible(true);
        } else {
            {
                this.setState({current: e.key});
            }
        }
    }

    handleSubmit(e){
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formData= this.props.form.getFieldsValue();
        console.log(formData);
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
            + "&username="+formData.userName+"&password="+formData.password
            +"&r_userName=" + formData.r_userName + "&r_password="
            + formData.r_password + "&r_confirmPassword="
            + formData.r_confirmPassword, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({userNickName: json.NickUserName, userid: json.UserId});
            });
        message.success("请求成功！");
        this.setModalVisible(false);
    }

    render() {
        let {getFieldProps} = this.props.form;
        const userShow = this.state.hasLoggedin ?
            <Menu.Item key="logout" className="logout">
                <Button type="primary" htmlType="button" >
                    {this.state.userNickName}
                </Button>&nbsp;&nbsp;
                <a target="_blank">
                    <Button type="dashed" htmlType="button" >
                    个人中心
                    </Button>
                </a>&nbsp;&nbsp;
                <Button type="ghost" htmlType="button" >
                    退出
                </Button>
            </Menu.Item>
            :<Menu.Item key="register" className="register">
                <Icon type="appstore"/>注册／登录
            </Menu.Item>;

        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src="/images/logo.png" alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="appstore" />头条
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore" />娱乐
                            </Menu.Item>
                            <Menu.Item key="jingji">
                                <Icon type="appstore" />经济
                            </Menu.Item>
                            <Menu.Item key="junshi">
                                <Icon type="appstore" />军事
                            </Menu.Item>
                            <Menu.Item key="yinyue">
                                <Icon type="appstore" />音乐
                            </Menu.Item>
                            <Menu.Item key="dianying">
                                <Icon type="appstore" />电影
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="appstore" />国际
                            </Menu.Item>
                            {userShow}
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>

                <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)} okText = "关闭">
                    <Tabs type="card">
                        <TabPane tab="注册" key="2">
                            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    <Input placeholder="请输入您的账号" {...getFieldProps('r_userName')} />
                                </FormItem>
                                <FormItem label="密码">
                                    <Input type="password" placeholder="请输入您的密码" {...getFieldProps('r_password')} />
                                </FormItem>
                                <FormItem label="确认密码">
                                    <Input type="password" placeholder="请再次输入您的密码" {...getFieldProps('r_confirmPassword')} />
                                </FormItem>
                                <Button type="primary" htmlType="submit" >注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>

            </div>
        );
    }
}

export default PCHeader = Form.create({})(PCHeader);
