import React, {Component} from "react";
import "../BaseCloud/index.less"
import "./../common/index.less"
class MIM extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    componentWillMount() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
    render() {
        return (
            <div className="cloud_conten">
                <div className="banner mim">
                    <div className="container">
                        <h2>Mining Information Model（MIM）</h2>
                        <div className="content">
                            MIM是以三维数字技术为基础，集成矿山工程项目信息，建立可视化数据模型，可实现矿山全生命周期（勘探、基建、开采、复垦）设施实体与功能特性的数字化表达，
                            其中包括对矿山演化进行三维仿真模拟，实现全阶段的工程量、成本、效益及相关技术经济参数的准确估计
                        </div>
                        <a href="">即将上线</a>
                    </div>
                </div>
                <div className="product">
                    <h2>MIM的概念</h2>
                    <div className="p_content">
                        <p>矿山信息模型（Mine Information Modeling
                            ，MIM）是以三维数字技术为基础，集成了矿山工程项目各种相关信息的工程数据模型，可实现矿山全生命周期动态变化过程的数字化表达。通过连接矿山生命期不同阶段的数据、过程和资源，对矿山进行完整描述。MIM可解决分布式、异构数据之间的一致性和全局共享问题，支持包括资源勘查、方案设计
                            、基建施工、生产管理及闭坑等在内的矿山全生命期中工程信息的动态创建、管理和共享。</p>
                        <ul className="MIMLists clearfix">
                            <li>
                                <span>01</span>
                                <div>
                                    <h3>面向矿山全生命周期的多维数据库系统</h3>
                                    <p>
                                        矿山全生命周期包括矿产资源勘查、矿山设计、矿山基建、矿山生产及闭坑四个阶段，矿山生命期的各个阶段中，涉及的异构系统类别较多，MIM将成为一个多维数据组成的数据库，建立一套维护性
                                        强的系统数据采集标准方法，对矿山全要素、全流程、全业务的数据进行集成与融合。
                                    </p>
                                </div>
                            </li>
                            <li>
                                <span>02</span>
                                <div>
                                    <h3>开放性与安全性</h3>
                                    <p>
                                        MIM通过大数据云平台技术实现数据的共享和协调管理，建立数据安全与共享机制。开放共享与安全是一个既互相矛盾又能够有机结合的共同体：一方面我们需要共享给我们带来更大的便捷,另一方面我们还需要在共享的同时保障我们的数据安全。
                                    </p>
                                </div>
                            </li>
                            <li>
                                <span>03</span>
                                <div>
                                    <h3>可视化设计与分析</h3>
                                    <p>
                                        MIM是采用三维数字表达技术设计的矿山信息模型，这种模型具有信息的完整性、
                                        准确性与清晰性等特点。借助于三维建模、VR、AR的技术，实施三维浏览、碰撞检测、施工模拟等，从
                                        而使工程的设计和施工工作在可视化的指导下进行，提升质量和效率。
                                    </p>
                                </div>
                            </li>
                            <li>
                                <span>04</span>
                                <div>
                                    <h3>持续更新与改进</h3>
                                    <p>
                                        矿山建设及生产是一个动态变化的过程，矿山的物理状态随着开采的进行实时变化，其相关系统的信息也在随时变化，MIM模型数据可不断进行补充、完善并始终保持模型的一致性。
                                    </p>
                                </div>
                            </li>
                            <li>
                                <span>05</span>
                                <div>
                                    <h3>协同工作与数据共享</h3>
                                    <p>
                                        基于MIM建设协同工作云平台，收录项
                                        目全生命周期的信息文档。在需要投资方、建设方、施工方、设计方、咨
                                        询方、监理方、相关政府主管部门等多方参与且建设周期较长的工程建设项目中，
                                        MIM云平台能及时收录信息文档并由参与各方共享。MIM 云平台还提供各建设阶段的工作流程，更加方便进行项目管理工作，相比传统设计阶段工作模式，MIM
                                        云平台对其进行了整体的优化。
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <h2>MIM的价值</h2>
                    <ul className="step-row clearfix">
                        <li className="step-row-point step-row-top clearfix"></li>
                        <li className="step-row-left clearfix">
                            <div>
                                <h4>设计阶段——为矿山提供真三维设计、数字化交底</h4>
                                <p>1、工程师可以基于MIM使用三维的思考方式来完成矿山设计，同时也
                                    使业主及最终用户真正摆脱了技术壁垒的限制，随时知道自己的投资能获得什么。
                                    通过MIM的可视化实现同构件之间形成互动性和
                                    反馈性的可视，且项目设计、建造、运营过程中的沟通、讨论、
                                    决策都在可视化的状态下进行。</p>
                                <p>2、方案论证阶段可以借助MIM提供方便的、低成本的不同解决方案供项目投资方进行选择，通过数据对比和模拟分析，找出不同解决方案的优缺点，帮助项目投资方迅速评估建筑投资方案的成本和时间。设计的实时修改往往基于最终用户的反馈，在
                                    MIM 平台下，项目各方关注的焦点问题比较容易得到直观的展现并迅速达成共识，相应的需要决策的时间也会比以往减少。</p>
                                <p>3、MIM
                                    技术为协同设计提供底层支撑，大幅提升协同设计的技术含量。借助MIM的技术优势，协同的范畴也从单纯的设计阶段扩展到矿山全生命周期，需要规划、设计、施工、运营等各方的集体参与。</p>
                                <p>4、基于MIM提供的真实造价管理需要的大量工程量信息，计算机可以快速对各种构件进行统计分析，实现工程量信息与设计方案的完全一致。通过 MIM
                                    获得的准确的工程量统计可以用于前期设计过程中的成本估算、在业主预算范围内不同设计方案的探索或者不同设计方案建造成本的比较。</p>
                                <p>5、可以在项目设计过程对矿山进行全生命周期5D（3D+时间+经济）模拟、精确分析和优化设计方案，对整个矿山的进度、资源和质量进行统一考虑，以降低成本、提高质量。</p>
                            </div>
                        </li>
                        <li className="step-row-bottom clearfix"></li>
                        <li className="step-row-right clearfix">
                            <div>
                                <h4>建设阶段——为矿山提供施工数字化管理</h4>
                                <p>1、通过MIM技术结合施工方案、施工模拟和现场视频监测，大大减少矿山建设与安全问题，减少返工和整改。</p>
                                <p>2、对材料进场实现信息化监控、使用数字化条条形码记录施工项目主要材料的进出场情况，并在MIM系统上实时显示。</p>
                                <p>3、通过将 MIM 与生产进度计划相链接，将空间信息与时间信息整合在一个可视的 4D模型中，可以直观、精确地反映整个矿山的全生命周期过程。</p>
                                <p>4、将文档等通过手工操作和MIM模型中相应部位进行链接。对文档的搜索、查阅、定位功能，并且所有操作在基于四维MIM可视化模型的界面中，充分提高数据检索的直观性，提高相关资料的利用率。</p>
                                <p>5、自动形成完整的信息数据库，为管理人员提供快速查询定位。内容可包括：可行性分析报告、设计方案、勘察报告、设计图纸、造价资料、设计变更会议记录、施工声像及照片、签证和技术核定单、设备相关信息、各种施工记录、物料信息。所有信息化数据实现云存储，分级按权限共享。</p>
                            </div>
                        </li>
                        <li className="step-row-bottom-one clearfix"></li>
                        <li className="step-row-left clearfix">
                            <div>
                                <h4>运营阶段：为矿山提供生产数字化管理</h4>
                                <p>1、利用MIM可以实现资产监控、查询、定位管理可视化。MIM中包含的大量信息能够导入到矿山资产管理系统中，大大减少系统初始化在数据准备方面的时间及人力投入，通过MIM结合物联网技术可以使资产在矿山中的定位及相关参数信息一目了然。</p>
                                <p>2、在矿山生产运营期间，工程和设备设施都需要不断得到维护。MIM
                                    模型结合运营维护管理系统可以充分发挥空间定位和数据记录的优势，合理制定维护计划，分配专人维护工作，以降低矿山出现突发状况的概率。对一些重要设备还可以跟踪维护工作的历史记录，以便对设备的适用状态提前做出判断。</p>
                                <p>3、基于MIM的矿山能耗分析可进行更全面的性能分析，在设计阶段就进行的能耗模拟能及早发现存在的问题，基于MIM形成的数据库，能够对能耗进行大数据分析与优化。</p>
                                <p>4、利用MIM及相应灾害分析模拟软件，可以在灾害发生前，模拟灾害发生的过程，分析灾害发生的原因，制定避免灾害发生的措施，以及发生灾害后人员疏散、救援支持的应急预案。当灾害发生后，MIM模型可以提供救援人员紧急状况点的完整信息，这将有效提高突发状况应对措施。</p>
                            </div>
                        </li>
                        <li className="step-row-point step-row-top step-row-bot clearfix"></li>
                    </ul>
                </div>
            </div>
        )
    }
};
export default MIM;