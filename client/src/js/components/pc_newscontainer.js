import React, {Component} from 'react'
import {Row, Col} from 'antd'
import {Tabs, Carousel} from 'antd'
import PCNewsBlock from './pc_news_block'
import PCNewsImageBlock from './pc_news_image_block'
import '../../css/pc.css'
const TabPane = Tabs.TabPane

class PCNewsContainer extends Component {
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            {/*<div className="carousel">*/}
                                {/*<Carousel {...settings}>*/}
                                    {/*<div><img src="/images/carousel_1.jpg" alt="1"/></div>*/}
                                    {/*<div><img src="/images/carousel_2.jpg" alt="2"/></div>*/}
                                    {/*<div><img src="/images/carousel_3.jpg" alt="3"/></div>*/}
                                    {/*<div><img src="/images/carousel_4.jpg" alt="4"/></div>*/}
                                {/*</Carousel>*/}
                            {/*</div>*/}
                            <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"/>
                            <PCNewsImageBlock count={6} type="yule" width="400px" cartTitle="娱乐头条" imageWidth="112px"/>
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="头条新闻" key="1">
                                <PCNewsBlock count={22} type="top" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock count={22} type="guoji" width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>

                </Row>
            </div>
        )
    }
}

export default PCNewsContainer