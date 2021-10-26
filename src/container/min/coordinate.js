
import React, { Component } from "react";
import { Row, Button, Col } from 'antd';
import TOOLS from "../../assets/tools/tools";
import "../could/index.less";
import "./index.less";
import "./minDesign.less";
import "./../common/index.less"
class Mincoordinate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'large',
            highPlatform: true,
            highScene: false,
            highService: false
        };
        this.toUrl = this.toUrl.bind(this);//手动绑定
    };
    componentDidMount() {
        let curUrl = this.props.history.location.pathname;
        let urls = document.getElementsByClassName('links')
        for (let i = 0; i < urls.length; i++) {
            if (curUrl == urls[i].dataset.url) {
                urls[i].style.color = "#39B8E8"
            } else {
                urls[i].style.color = "#fff"
            }
        }
    }
    componentWillMount() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
    GoPrint() {
        window.location.href = "http://digital.miningcloud.com.cn:8032";
		// TOOLS.get("user/is_logined/").then(res => {
		// 	if (res.status === 200) {
		// 		if (res.data.is_logined === true) {
		// 			window.location.href = "http://218.249.43.70:8032/"
		// 		} else {
		// 			this.props.history.push("/login") 
		// 			// 页面刷新
		// 			window.location.reload()
		// 		}
		// 	}
		// })
	}
    toUrl(e) {
        this.props.history.push(e);
    }
    // 点击平台功能
    showPlatForm(){
        this.setState({
            highPlatform: true,
            highScene: false,
            highService: false
        })
        console.log(this.state);
    }
    // 点击应用场景
    showScene(){
        this.setState({
            highPlatform: false,
            highScene: true,
            highService: false
        })
    }
    // 点击服务模式
    showService(){
        this.setState({
            highPlatform: false,
            highScene: false,
            highService: true
        })
    }

    render() {
        const { size, highPlatform, highScene } = this.state;
        const renderMainContent = ()=>{
            if(highPlatform){
              return <div>
                <div className="server" style={{ height: "auto", backgroundColor: '#fff' }}>
                    <div className="topEle">
                        <Row>
                            <Col className="ant-col" span={5}>
                            </Col>
                            <Col className="ant-col" span={14}>
                                <Row>
                                <Col className="ant-col" span={4}>
                                    <div>
                                    <div className="cName">· 文档管理 ·</div>
                                    <div className="eName">DOCUMENT  MANAGEMENT</div>
                                    </div>
                                </Col>
                                </Row>
                                <Row>
                                    <Col className="ant-col" span={12}>
                                        <div className="content">
                                            <div className="word">
                                                <div className="numberList">
                                                    <div>
                                                    <p>01</p>
                                                    <p>02</p>
                                                    <p>03</p>
                                                    <p>04</p>
                                                    </div>
                                                </div>
                                                <div className="textList">
                                                    <p>文档集中管理</p>
                                                    <div>云端存储和管理整个项目生命周期中的文档、图纸、模型等所有数据，灵活分类管理，建立项目级网盘。基于国家级超算平台提供的云基础设施，安全可靠。</div>
                                                    <p>权限管理</p>
                                                    <div>提供浏览、下载、创建、修改、删除、授权六种细粒度的权限控制，可针对任一层级文件夹，对成员进行灵活授权、保护文件、模型数据安全。</div>
                                                    <p>在线浏览</p>
                                                    <div>支持多种格式图纸、模型在线预览，支持Office格式文档在线浏览和多人编辑，支持PDF、图片视频格式文件的在线浏览。</div>
                                                    <p>快速分享</p>
                                                    <div>通过链接快速分享文件或文件夹，即时查看，支持下载权限设置和过期时间设置，提高项目协同效率与文档安全。</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="ant-col" span={12}>
                                        <div className="imgContent">
                                            <div className="img4 flex_right"></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="ant-col" span={5}></Col>
                        </Row>
                    </div>
                    <div className="middleEle">
                        <Row>
                            <Col className="ant-col" span={5}>
                            </Col>
                            <Col className="ant-col" span={14}>
                            <Row>
                                <Col className="ant-col" span={4}>
                                    <div>
                                    <div className="cName">· MIM管理 ·</div>
                                    <div className="eName">MIM  MANAGEMENT</div>
                                    </div>
                                </Col>
                            </Row>
                                <Row>
                                    <Col className="ant-col" span={12}>
                                        <div className="imgContent">
                                            <div className="img5"></div>
                                        </div>
                                    </Col>
                                    <Col className="ant-col" span={8}>
                                        <div className="content  flex_right conDes">
                                            <div className="word">
                                                <div>
                                                    <div className="allText">
                                                        <div className="textbox">图纸模型在线浏览</div>
                                                        <div>无需安装任何专业软件，支持DWG、IFC、DGN、RVM、FBX、OBJ等多种格式文件，流畅不失真，提供视点、剖切、漫游、测量等浏览工具。</div>
                                                    </div>
                                                    <div className="allText">
                                                        <div className="textbox">属性信息查阅</div>
                                                        <div>完整解析模型结构树和属性信息，支持海量 MIM 数据（如构件信息、空间信息、视图信息......）在云端结构化存储，支持交互式信息查阅。</div>
                                                   </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="ant-col" span={5}></Col>
                        </Row>
                    </div>
                    <div className="botEle">
                        <Row>
                            <Col className="ant-col" span={5}>
                            </Col>
                            <Col className="ant-col" span={14}>
                                <Row>
                                    <Col className="ant-col" span={8}>
                                        <div className="content">
                                            <div className="word">
                                            <div>
                                                    <div className="allText">
                                                        <div className="textbox">版本管理</div>
                                                        <div>版本更新自动化，保障项目成员获取最新的项目资料，方便追溯，查阅文档历史信息。</div>
                                                    </div>
                                                    <div className="allText">
                                                        
                                                        <div className="textbox">文档关联与二三维联动</div>
                                                        <div>三维模型或构建关联图纸、照片和文件，实现工程数据的可视化存档和查阅；支持二维图纸与三维模型的只能识别和联动操作。</div>
                                                    </div>
                                                    <div className="allText">
                                                    <div className="textbox">分享链接和二维码</div>
                                                     <div>通过链接分享图纸、模型，在浏览器端即可快速查看；纸质图纸附加二维码可在手机端扫码看图看模型。</div>
                                                     </div>
                                                </div>


                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="ant-col" span={12}>
                                        <div className="imgContent">
                                            <div className="img6 flex_right"></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="ant-col" span={5}></Col>
                        </Row>
                    </div>
                    <div className="leftDisgn"></div>
                    <div className="rightDesign"></div>
                </div>
                <div className="server" style={{ height: "auto", backgroundColor: '#fff' }}>
                    <div className="middleEle">
                        <Row>
                            <Col className="ant-col" span={5}>
                            </Col>
                            <Col className="ant-col" span={14}>
                            <Row>
                                <Col className="ant-col" span={4}>
                                    <div>
                                    <div className="cName">· MIM开发 ·</div>
                                    <div className="eName">MIM  DEVELOPMENT</div>
                                    </div>
                                </Col>
                            </Row>
                         
                            </Col>
                            <Col className="ant-col" span={5}></Col>
                        </Row>
                        <div className="computing-could banner" id="mimdevback">
                            <img className="mimdevback01" src={require("../../img/mimdev01.png")}></img>
                            <img className="mimdevback02" src={require("../../img/mimdev02.png")}></img>
                            <img className="mimdevback03" src={require("../../img/mimdev03.png")}></img>
                            <div className="textBox">
                                <div className="innerText">
                                    <p>工艺流程模拟</p>
                                    <div><span>基于三维模型的工艺流程动态模拟，施工进度模拟，实现设计方案的可视化交付，方便进行讨论和指导施工。</span></div>
                                </div>
                                <div className="innerText">
                                    <p>可视化管理</p>
                                    <div><span>基于MIM模型和平台数据接口，将现场的各类智能设备数据接入平台，融合IOT数业务数据和空间数据，实现工程项目全过程的数字化可视化管理。</span></div>
                                </div>
                                <div className="innerText">
                                    <p>定制服务</p>
                                    <div><span>平台开放丰富的API接口，更具需求进行定制化开发各类应用，支持与现有系统（如OA、ERP等）对接。</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="botEle">
                        <Row>
                            <Col className="ant-col" span={5}>
                            </Col>
                            <Col className="ant-col" span={14}>
                            <Row>
                                <Col className="ant-col" span={4}>
                                    <div>
                                    <div className="cName">· 工作协同 ·</div>
                                    <div className="eName">WORK SYNERGY</div>
                                    </div>

                                </Col>
                            </Row>
                                <Row>
                                    <Col className="ant-col" span={12}>
                                        <div className="content">
                                            <div className="word">
                                            <div className="allText">
                                            <div className="flexBox">
                                                <div className="shareBox">
                                                <div className="textbox">项目成员管理</div>
                                                <div><span>项目成员及角色分组管理，成员之间可共享文档、图纸、模型，满足项目成员之间文件沟通、统一工作环境和问题交流的需求。</span></div>
                                                    <img src={require("../../img/share01.png")}></img>
                                                </div>
                                                

                                                <div className="shareBox">
                                                <div className="textbox">批注与评论</div>
                                                <div><span>支持对图纸、模型、PDF文档、Office文档添加批注，支持对批注进行多人评论，实现各方面的可视化交流及问题跟踪解决。</span></div>
                                                    <img src={require("../../img/share02.png")}></img>
                                                </div>

                                                <div className="shareBox">                                                                                                                                                                                                                                              
                                                <div className="textbox">消息通知与项目动态</div>
                                                <div><span>提供手机短信、web端、移动端消息推送等多渠道的即时提醒，可查看项目动态更新，各类操作留痕，便于追溯。</span></div>
                                                    <img src={require("../../img/share03.png")}></img>
                                                </div>
                                                

                                                <div className="shareBox">
                                                <div className="textbox">批注与评论</div>
                                                <div><span>集成网页端及微信小程序端视频会议功能，一键入会，便捷沟通，支持高清视频、屏幕共享、即时消息功能。</span></div>
                                                    <img src={require("../../img/share04.png")}></img>
                                                </div>
                            
                                                </div>
                                            </div>
                                            </div> 
                                        </div>
                                    </Col>
                                    <Col className="ant-col" span={12}>
                                    </Col>
                                    <Col className="ant-col" span={16}>
                                        <div className="appback">
                                            <p>移动应用</p>
                                            <div className="innerText"><span>与云端数据同步，通过手机端应用可以随时浏览项目文件、图纸及模型，满足施工现场、出差等场景的使用需求。</span></div>
                                            <img src={require("../../img/DESIGN2copie2@2x.png")}></img>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="ant-col" span={5}></Col>
                        </Row>
                    </div>

                </div>
              </div>
            } else if(highScene){
              return <div className="server" style={{ height: "auto", backgroundColor: '#131c3a', height: '2200px', padding: '100px' }}>
                  <div className="container">
                    <div className="sceneTitle">
                        <div style={{ 'fontSize': '22px'}}>ABOUT</div>
                        <div style={{ 'fontSize': '34px'}}>应用场景</div>
                    </div>
                    <div className="designaBox">
                        <div className="innerText">
                        <div className="title">协同设计</div>
                        <div className="line"><span>打破传统协同设计的地域限制、模型资料浏览的终端限制，实现多专业设计文档集中存储、同意沟通环境、设计条件同步、在线无纸化审查，提高业务流转效率。</span></div>
                        </div>
                        <img  src={require("../../img/design.png")}></img>
                    </div>
                    <div className="designaBox">
                        <img  src={require("../../img/deliver.png")}></img>
                        <div className="innerText">
                        <div className="title">数字化交付</div>
                        <div className="line"><span>为工程设计提供数字化交付平台，实现问胆囊那个、图纸、模型、方案的在线可视化交付，为运营阶段的智慧矿山智慧工厂建设提供数据基础。</span></div>
                        </div>
                    </div>
                    <div className="designaBox">
                        <div className="innerText">
                        <div className="title">项目管理</div>
                        <div className="line"><span>基于MIM协同平台建立智慧工地和指挥运维系统，实现项目图纸模型及相关文档的统一管理，实现进度、安全、质量的可视化管控。</span></div>
                        </div>
                        <img  src={require("../../img/manage.png")}></img>
                    </div>

                    <div className="designaBox">
                        <img  src={require("../../img/cooperation.png")}></img>
                        <div className="innerText">
                        <div className="title">工程协作</div>
                        <div className="line"><span>引入项目参与各方在平台上协同工作，如实记录项目实施过程，实现基于数据的项目协同。</span></div>
                        </div>
                    </div>
  
                  </div>
                  <div className="footer">
                        <div className="line"></div>
                        <div className="innerText">MIM协同平台</div>
                        <div className="line"></div>
                    </div>
              </div>
            } else {
                return <div className="server" style={{ height: "auto", backgroundColor: '#131c3a', height: '1550px', padding: '100px' }}>
                <div className="container">
                  <div className="serviceTitle">
                      <div style={{ 'fontSize': '22px'}}>ABOUT</div>
                      <div style={{ 'fontSize': '34px'}}>服务模式</div>
                  </div>
                  <div className="designaBox">
                      <img  src={require("../../img/cloudservices.png")}></img>
                      <div className="innerText">
                      <div className="title">公有云服务</div>
                      <div className="line"><span>开通即用，方便快捷。国家级超级计算平台提供安全可靠得数据存储服务和计算能力，用户无需购买硬件，按需配置资源。</span></div>
                      </div>
                  </div>
                  <div className="designaBox">
                      <div className="innerText">
                      <div className="title">私有化部署</div>
                      <div className="line"><span>建立私有化得企业级数据中心，支持按需扩展服务器节点资源和存储空间。提供丰富得API接口，支持定制化二次开发及与现有系统对接。</span></div>
                      </div>
                      <img src={require("../../img/deploy.png")}></img>
                  </div>
                <div className="codeContainer">
                    <div className="codeBox">
                        <img src={require("../../img/drawingCode.png")}></img>
                        <div><span>扫码看图纸</span></div>
                    </div>
                    <div className="codeBox">
                        <img src={require("../../img/modelCode.png")}></img>
                        <div><span>扫码看模型</span></div>
                    </div>
                    <div className="codeBox">
                        <img src={require("../../img/appCode.png")}></img>
                        <div><span>扫码看应用</span></div>
                    </div>
                </div>
                </div>
                <div className="footer">
                      <div className="line"></div>
                      <div className="innerText">MIM协同平台</div>
                      <div className="line"></div>
                  </div>
            </div>
            }
          }
        return (
            <div className="cloud_conten">
                <div className="computing-could banner" id="coordinate">
                <div className="info coordinateInfo" style={{backgroundColor:'transparent'}}>
						<div className="innerText">
							<div className="title"><h2>MIM协同平台</h2></div>
							<div className="text"><p>以项目为核心的数字化交付，全流程协同工作</p></div>
                            <div className="link"><Button size={size} type="primary" onClick={e => this.GoPrint()} id="customBtn" type="primary">立即使用</Button></div>
                        </div>
                        <div className="menu">
                            {
                                 this.state.highPlatform?
                                <div onClick={e => this.showPlatForm()} >
                                    <div className="icon"><img src={require("../../img/平台功能@2x.png")} /></div>
                                    <div><span style={{color: "#3ab7e8"}}>平台功能</span></div>
                                </div>:
                                <div onClick={e => this.showPlatForm()} >
                                    <div className="icon"><img src={require("../../img/平台功能灰@2x.png")} /></div>
                                    <div style={{color: "#333333"}}><span>平台功能</span></div>
                                </div>
                            }
                            {
                                this.state.highScene?
                                <div onClick={e => this.showScene()}>
                                    <div className="icon"><img src={require("../../img/应用场景蓝@2x.png")} /></div>
                                    <div><span style={{color: "#3ab7e8"}}>应用场景</span></div>
                                </div>: 
                                <div onClick={e => this.showScene()}>
                                     <div className="icon"><img src={require("../../img/应用场景@2x.png")} /></div>
                                     <div><span style={{color: "#333333"}}>应用场景</span></div>
                                 </div>
                            }
                            {
                                this.state.highService?
                                <div onClick={e => this.showService()}>
                                    <div className="icon"><img src={require("../../img/服务模式蓝@2x.png")} /></div>
                                    <div><span style={{color: "#3ab7e8"}}>服务模式</span></div>
                                </div>:
                                <div onClick={e => this.showService()}>
                                    <div className="icon"><img src={require("../../img/服务模式@2x.png")} /></div>
                                    <div><span style={{color: "#333333"}}>服务模式</span></div>
                                </div>
                            }

                        </div>
					    </div>
                </div>
                {renderMainContent()}
            </div>
        )
    }
};
export default Mincoordinate;