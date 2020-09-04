import React, {Component} from "react";
import Search from "../../components/search/index"
import List from "../../components/clist/list"
import TOOLS from "../../assets/tools/tools";
import "./index.less"
import LoadingCmpt from "../../components/loading/index"
import NotData from "../../components/NoData/index";
import {Pagination, Checkbox, Tabs, Menu} from 'antd';
import "./../common/index.less"
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;

class Supply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Keyword: "",
            pageIndex: 1,
            pageSize: 16,
            total: 1,
            isDemand: true,
            menu_array: [],
            menu_array1: [],
            DataList: [],
            DataList1: [],
            isLoading: false,
            current: "all",
            current1: "all"
        };
        this.handleClick = this.handleClick.bind(this);//手动绑定
        this.handleClick1 = this.handleClick1.bind(this);//手动绑定
    }

    componentWillMount() {
        this.getMuen()
        this.getMuen1()
        this.demandList()
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }

    getMuen() {
        //获取需求菜单数据
        TOOLS.get("supplyservice/service/menus/").then(res => {
            if (res.status === 200) {
                this.setState({
                    isLoading: false,
                    menu_array: res.data
                });
            }
        })
    }

    getMuen1() {
        //获取供应菜单数据
        TOOLS.get("supplyservice/product/menus/").then(res => {
            if (res.status === 200) {
                this.setState({
                    isLoading: false,
                    menu_array1: res.data
                });
            }
        })
    }

    //需求列表
    demandList(pageIndex = this.state.pageIndex) {
        this.setState({
            isLoading: true
        });
        //获取列表数据
        TOOLS.get("supplyservice/service/demand/", {
            page: pageIndex,
            page_size: this.state.pageSize,
        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    DataList: res.data.results,
                    isLoading: false,
                    total: res.data.count
                });
            }
        })
    }

    //供应列表
    provideList(pageIndex = this.state.pageIndex) {
        this.setState({
            isLoading: true
        });
        //获取列表数据
        TOOLS.get("supplyservice/product/demand/", {
            page: pageIndex,
            page_size: this.state.pageSize,
        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    DataList1: res.data.results,
                    isLoading: false,
                    total: res.data.count
                });
            }
        })
    }

    //产品需求
    changeProvideList(muenId) {
        this.setState({
            isLoading: true
        });
        TOOLS.get("supplyservice/product/demand/", {
            page: this.state.pageIndex,
            page_size: this.state.pageSize,
            menus: muenId
        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    DataList1: res.data.results,
                    isLoading: false,
                    total: res.data.count
                });
            }
        })
    }

    //服务需求
    changeDemandList(muenId) {
        this.setState({
            isLoading: true
        });
        TOOLS.get("supplyservice/service/demand/", {
            page: this.state.pageIndex,
            page_size: this.state.pageSize,
            menus: muenId
        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    DataList: res.data.results,
                    isLoading: false,
                    total: res.data.count
                });
            }
        })
    }

    componentDidMount() {

    }

    handleClick(e) {
        this.setState({
            current: e.key,
        });
    }

    handleClick1(e) {
        this.setState({
            current1: e.key,
        });
    }

    GoPrint() {
        TOOLS.get("user/is_logined/").then(res => {
            if (res.status === 200) {
                if (res.data.is_logined === true) {
                    window.location.href = "http://www.miningcloud.com.cn/console/"
                } else {
                    this.props.history.push("/login")
                    // 页面刷新
                    window.location.reload()
                }
            }
        })
    }

    render() {
        const {DataList, DataList1, isLoading, menu_array, menu_array1} = this.state
        const onChange = (pageNumber) => {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
            this.demandList(pageNumber)
        };
        const onChange1 = (pageNumber) => {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
            this.provideList(pageNumber)
        };
        const onCheckbox = (e) => {
            if (e.target.checked === true) {
                TOOLS.get("supplyservice/service/demand/", {
                    page: this.state.pageIndex,
                    page_size: this.state.pageSize,
                    checkau: e.target.checked
                }).then(res => {
                    if (res.status === 200) {
                        this.setState({
                            DataList: res.data.results,
                            isLoading: false,
                            total: res.data.total_page
                        });
                    }
                })
            } else {
                TOOLS.get("supplyservice/service/demand/", {
                    page: this.state.pageIndex,
                    page_size: this.state.pageSize,
                }).then(res => {
                    if (res.status === 200) {
                        this.setState({
                            DataList: res.data.results,
                            isLoading: false,
                            total: res.data.total_page
                        });
                    }
                })
            }
        }
        const onCheckbox1 = (e) => {
            if (e.target.checked === true) {
                TOOLS.get("supplyservice/product/demand/", {
                    page: this.state.pageIndex,
                    page_size: this.state.pageSize,
                    checkau: e.target.checked
                }).then(res => {
                    if (res.status === 200) {
                        this.setState({
                            DataList1: res.data.results,
                            isLoading: false,
                            total: res.data.count
                        });
                    }
                })
            } else {
                TOOLS.get("supplyservice/product/demand/", {
                    page: this.state.pageIndex,
                    page_size: this.state.pageSize,
                }).then(res => {
                    if (res.status === 200) {
                        this.setState({
                            DataList1: res.data.results,
                            isLoading: false,
                            total: res.data.count
                        });
                    }
                })
            }
        }
        const callback = (key) => {
            if (key === "1") {
                this.setState({
                    isLoading: true
                });
                this.getMuen()
                this.demandList()
            } else {
                this.setState({
                    isLoading: true
                });
                this.getMuen1()
                this.provideList()
            }
        }
        return (
            <div className='Model clearfix'>
                <div className="addr clearfix">
                    <div className="m_left">
                        <span onClick={e => {
                            window.location.href = '/'
                        }}>首页</span>&gt;<span className="breadcrumb">供需对接</span>
                    </div>
                    <div className="m_right">
                        <button className="m_btn" onClick={e => this.GoPrint()}>我要发布需求</button>
                        <Search history={this.props.history} keyWord={this.state.Keyword}
                                placeholder={"请输入关键字搜索"}></Search>
                    </div>
                </div>
                <Tabs onChange={callback} type="card">
                    <TabPane tab="服务需求" key="1">
                        {isLoading ? <LoadingCmpt/> : <div className="box-item">
                            <div className="Menu-list">
                                <Menu onClick={this.handleClick}
                                      selectedKeys={[this.state.current]}
                                      mode="horizontal"
                                >
                                    <Menu.Item key="all"><span onClick={e => this.demandList()}>全部</span></Menu.Item>
                                    {
                                        menu_array.map((item, index) => {
                                            if (item.children.length > 0) {
                                                return <SubMenu key={index + 1} title={item.name}>
                                                    {
                                                        item.children.map((it, i) => {
                                                            return <Menu.Item key={it.id}><span
                                                                onClick={e => this.changeDemandList(it.id)}>{it.name}</span></Menu.Item>
                                                        })
                                                    }
                                                </SubMenu>
                                            } else {
                                                return <Menu.Item key={item.id}><span
                                                    onClick={e => this.demandList(item.id)}>{item.name}</span></Menu.Item>
                                            }

                                        })
                                    }
                                </Menu>
                            </div>
                            <div className="c-content">
                                {/*<div className="m-top clearfix">
                                    <div className="Checkbox"><Checkbox onChange={onCheckbox}>只查看认证企业/用户</Checkbox>
                                    </div>
                                </div>*/}
                                {DataList && DataList.length > 0 && <div>
                                    <List type="server" Addr="/container/serverdetails" isDemand={this.state.isDemand}
                                          history={this.props.history} DataList={DataList}/>
                                    <Pagination defaultPageSize="16" showQuickJumper hideOnSinglePage={true}
                                                defaultCurrent={1} onChange={onChange} total={this.state.total}/></div>
                                }
                                {!(DataList && DataList.length > 0) && <NotData/>}

                            </div>
                        </div>}
                    </TabPane>
                    <TabPane tab="产品需求" key="2">
                        {isLoading ? <LoadingCmpt/> : <div className="box-item">
                            <div className="Menu-list">
                                <Menu onClick={this.handleClick1}
                                      selectedKeys={[this.state.current1]}
                                      mode="horizontal"
                                >
                                    <Menu.Item key="all"><span onClick={e => this.provideList()}>全部</span></Menu.Item>
                                    {
                                        menu_array1.map((item, index) => {
                                            if (item.children.length > 0) {
                                                return <SubMenu key={index + 1} title={item.name}>
                                                    {
                                                        item.children.map((it, i) => {
                                                            return <Menu.Item key={it.id}><span
                                                                onClick={e => this.changeProvideList(it.id)}>{it.name}</span></Menu.Item>
                                                        })
                                                    }
                                                </SubMenu>
                                            } else {
                                                return <Menu.Item key={item.id}><span
                                                    onClick={e => this.changeProvideList(item.id)}>{item.name}</span></Menu.Item>
                                            }
                                        })
                                    }
                                </Menu>
                            </div>
                            <div className="c-content">
                                {/*<div className="m-top clearfix">
                                    <div className="Checkbox"><Checkbox onChange={onCheckbox1}>只查看认证企业/用户</Checkbox>
                                    </div>
                                </div>*/}
                                {DataList1 && DataList1.length > 0 && <div>
                                    <List type="product" Addr="/container/productdetails" isDemand={this.state.isDemand}
                                          history={this.props.history} DataList={DataList1}/>
                                    <Pagination showQuickJumper defaultPageSize="16" hideOnSinglePage={true}
                                                defaultCurrent={1} onChange={onChange1} total={this.state.total}/></div>
                                }
                                {!(DataList1 && DataList1.length > 0) && <NotData/>}

                            </div>
                        </div>}
                    </TabPane>
                </Tabs>

            </div>
        )
    }
};
export default Supply;