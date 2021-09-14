import React, { Component } from "react";
import { BackTop } from 'antd';
import "./index.less";

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    toPage(url) {
        
        sessionStorage.setItem("current", url.key);
        this.props.history.push(url.path);
    }
    render() {
        return (
            <div className="footer_wrapper">
                <BackTop />
                <div className="footer_bottom tc">
                    <div>
                        <div className="footTitle big">
                            <span>平台产品</span>
                            <span></span>
                            <span>友情链接</span>
                            <span>联系我们</span>
                        </div>
                        <div className="footTitle small">
                            <span><a href="http://www.miningcloud.com.cn/container/compute" target='_blank'>超算云服务</a></span>
                            <span><a href="http://digital.miningcloud.com.cn:8032/" target='_blank'>MIM协同平台</a></span>
                            <span><a href="http://www.enfi.com.cn/" target='_blank'>中国恩菲</a></span>
                            <span><span className="icon icon1"></span><span style={{ paddingLeft: '30px' }}>010-63936496</span></span>
                        </div>
                        <div className="footTitle small">
                           <span><a href="http://techinfo.miningcloud.com.cn" target='_blank'>行业资讯</a></span>
                            <span><a href="http://www.miningcloud.com.cn/container/min3DMine" target='_blank'>MIM智慧管控平台</a></span>
                            <span><a href="https://www.nscc-tj.cn/" target='_blank'>国家超算天津中心</a></span>
                            <span><span className="icon icon2"></span> <span style={{ paddingLeft: '30px' }}>CMIC@enfi.com.cn</span></span>
                        </div>
                        <div className="footTitle small">
                            <span><a href="http://web.miningcloud.com.cn:8033" target='_blank'>矿业经济数据</a></span>
                            <span><a href="http://da.miningcloud.com.cn" target='_blank'>数据分析平台</a></span>
                            <span><a href="https://www.th-icloud.cn/" target='_blank'>天河工业云</a></span>
                            <span><span className="icon icon3"></span><span style={{ paddingLeft: '30px' }}>北京复兴路12号</span></span>
                        </div>
                        <div className="footTitle small">
                            <span><a href="http://equip.miningcloud.com.cn" target='_blank'>矿业装备数据</a></span>
                            <span>人工智能</span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="footTitle small">
                            <span><a href="http://design.miningcloud.com.cn" target='_blank'>MIM工程设计云</a></span>
                            <span><a href="https://web.miningcloud.com.cn:8046/meeting" target='_blank'>视频会议</a></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="wechat"><img src={require("../../img/wechat.jpg")} /><p>微信关注</p></div>
                </div>
                <div className="copyright">
                    <div>
                        <span><a href="http://www.miningcloud.com.cn/admin" target='_blank'>后台管理</a>|<a href="http://doc.miningcloud.com.cn:8066" target='_blank'>矿业云网盘</a>|<a href="http://www.miningcloud.com.cn/container/register_rotocol" target='_blank'>免责申明</a></span>
                        <span>Copyright@版权所有</span>
                        <span>中国矿业信息化协同创新北京市工程研究中心</span>
                        <span>网站备案号 京ICP备18055077号</span>
                    </div>
                </div>
            </div>
        )
    }
}

