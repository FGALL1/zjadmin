import $request from "@/utils/request";

const api = {
  // 菜单
  menuList: "/getMenus",
  // 系统菜单，菜单权限相关
  sysMenuList: "/system/menu/list",

  // 首页
  statistics: "/stats/irrigated",
  waterConsumption: "/stats/water",
  waterEfficiency: "/stats/efficiency",
  waterCost: "/stats/cost",

  // 渠系概况
  survey: "/basics/survey/list",
  surveyDetail: "/basics/survey",
  surveyEdit: "/basics/survey",

  // 通用
  uploadFile: "/common/upload",
  allDictionary: "/system/dict/type/getAllDictTypeAndData",
  regionTree: "/basics/regionInfo/treeselect",
  reportFormTree: "/basics/regionInfo/reportFormTree", // 为灌区、干渠、协会 报表做铺垫
  departmentTree: "/system/dept/treeselect",
  downloadFile: "/common/download", // Ruoyi若依通用下载接口

  // 基本情况
  baseInfo: "/basics/channel/page",
  baseInfoChannel: "/basics/channel/trunk",

  // 水库存水情况
  reservoirBase: "/basics/reservoir/list",
  reservoirBaseDetail: "/basics/reservoir",
  reservoirBaseEdit: "/basics/reservoir",
  reservoirTable: "/basics/stzvarlb/page",
  reservoirChart: "/basics/stzvarlb/list",
  reservoirTableDetail: "/basics/stzvarlb",
  reservoirTableAdd: "/basics/stzvarlb",
  reservoirTableEdit: "/basics/stzvarlb",
  reservoirTableDelete: "/basics/stzvarlb",
  getStorage: "/basics/stZvarlData/page",
  getStorageAll: "/basics/stZvarlData/list",
  storageCRUD: "/basics/stZvarlData",

  // 渠道信息
  channel: "/basics/channel/tree",
  channelDownload: "/basics/channel/export",
  getReserviorChannel: "/basics/channel/reservior",
  channelTree: "/basics/channel/treeselect",
  special: "/basics/personnel/special",
  group: "/basics/personnel/group",
  channelCRUD: "/basics/channel",
  queryChildChannelCrop: "/basics/channel/queryChildChannelCrop",
  queryChildChannelCropAfterBuilding:
      "/basics/channel/queryChildChannelCropAfterBuilding",
  updateChannelCrop: "/basics/channel/updateChannelCrop",
  subChannel: "/basics/channel/list",
  getChannelFlowRecord: "/basics/channelHistoryData",
  setChannelFlow: "/basics/channelData",
  // 获取渠首
  selectChannelList: "/basics/channel/list",
  selectHeadChannel: "/basics/channel/selectheadchannel",

  // 行政村管理
  regionInfo: "/basics/regionInfo/list",
  regionCRUD: "/basics/regionInfo",
  getPersonByRegion: "/channel/group/queryGroup",
  regionChannelById: "/basics/regionChannel", // 根据区域ID，查询区域关联渠道信息
  regionChannelCRUD: "/basics/regionChannel", // 新增、编辑区域关联渠道信息
  getVillage: "/basics/regionChannel/getVillage", // 查询最下级村庄列表

  // 人员管理
  personnelInfo: "/basics/personnel/list",
  personnelCRUD: "/basics/personnel",
  getPersonInfoByZG: "/channel/special/queryBySpecialId",
  getPersonInfoByQG: "/channel/group/queryByGroupId",

  // 管理单位
  getManagementUnit: "/basics/management/getTree",
  getManagementUnitDetail: "/basics/management/queryById",
  queryManagementList: "/basics/management/queryManagementList",
  queryManagementAll: "/basics/management/queryByAll",
  addManagementUnit: "/basics/management/addManagement",
  editManagementUnit: "/basics/management/editManagement",
  deleteManagementUnit: "/basics/management/deleteIds",
  getChannelSpecialPersonInfoList: "/channel/special/queryPage", // 管理单位下属人员
  getChannelGroupPersonInfoList: "/channel/special/queryPage", // 管理单位下属人员
  getChannelSpecialList: "/channel/special/queryAllByMid", // 查询所有人员
  getChannelSpecialPage: "/channel/special/queryPage", // 查询所有人员
  channelSpecialPersonCRUD: "/channel/special",
  channelGroupPersonCRUD: "/channel/group",
  getManagementUnitSpecialPerson: "/channel/special/queryBySpecialId",
  getManagementUnitSpecialPersonInfoAll: "/channel/special/queryAllByMid", // 管理单位下属人员
  getManagementUnitGroupPersonInfoAll: "/channel/special/queryAllByMid", // 管理单位下属人员

  // 平面布置图
  uploadColorMap: "/basics/layout/upload", // 彩图上传
  loadColorMap: "/basics/layout/", // 读取彩图

  // 测站
  stationAll: "/basics/station/list", // 所有测站
  stationPage: "/basics/station/page", // 测站列表
  reserviorStationPage: "/basics/station/reserviorStationPage", // 查询水库关联的测站信息分页列表
  selectStationChannelTree: "/basics/station/selectStationChannelTree", // 测站列表
  stationCRUD: "/basics/station", // 闸站增删查改
  stationRain: "/basics/station/rainStation", // 雨量站列表
  stationEva: "/basics/station/evaporationStation", // 蒸发站列表
  stationUnique: "/basics/station/checkStationCodeUnique", // 测站编码唯一性验证
  getStationByStationType: "/basics/station/listByStationType", // 按监测项目查询测站列表
  getStationByStationTypeMode: "/basics/station/listByStationTypeMode", // 按监测项目查询测站列表
  getStationByStationTypeModeWater:
      "/basics/station/listByStationTypeModeWater",
  stationDownload: "/basics/station/export",
  // 涵闸管理
  gatePage: "/zz/gate/page", // 闸站列表
  gatePageBySite: "/zz/gate/buildingAssociatedGatePage", // 根据建筑物关联去查询闸站
  gateChannelTree: "/zz/gate/selectGateTree", // 闸站列表
  gateCRUD: "/zz/gate", // 闸站增删查改
  gateModifyResOnly: "/zz/gate/modifyRes",
  gateDownload: "zz/gate/export", // 导出
  gateUnique: "/zz/gate/checkGateCodeUnique",
  gateRealTimeDataByStation: "/zz/gate/realTimeData", // 闸站闸门实时数据（根据测站分类闸门）
  gateRealTimeData: "/zz/gate/zzRealTimeData", // 闸站闸门实时数据
  operatingGate: "/zm/control/operate",
  getAllGates: "/zz/gate/list", // 获取所有闸站
  getAllGatesMode: "/zz/gate/listMode",
  getGatesDetail: "/zz/gate", // 获取闸站详情
  getGatesLogs: "/zm/log/page", // 操作日志
  getInstitution: "/zz/system", // 管理制度
  getInstitutionById: "/zz/system", // 管理制度
  editInstitution: "/zz/system", // 编辑管理制度
  getRepairRecord: "/zz/sbxxInfo/list", // 维护记录
  repairCRUD: "/zz/sbxxInfo", // 维护记录crud
  summaryCRUD: "/zz/introduce", // 涵闸简介相关
  getBuildingIntroduce: "/introduce/building/getBuildingIntroduce",
  buildingIntroduceCRUD: "/introduce/building",
  getRunReport: "/zm/data/runRecord", // 获取涵闸运行记录

  // 降水量
  rainfall: "/basics/stpptnr/list",
  rainfallCRUD: "/basics/stpptnr",

  // 蒸发量
  stestatr: "/basics/stestatr/list",
  stestatrCRUD: "/basics/stestatr",

  // 墒情
  stsoilr: "/basics/stsoilr/list",

  // 灌期配置
  getCurrentIrr: "/watermanage/irrigation/current",
  getCurrentOrLatestIrr: "/watermanage/irrigation/currentOrLatestIrr",
  getIrrPage: "/watermanage/irrigation/page",
  getIrrSelect: "/watermanage/irrigation/selectList",
  getIrrAvailable: "/watermanage/irrigation/getIrrAvailable",
  irrCRUD: "/watermanage/irrigation",
  stopIrrigation: "/watermanage/irrigation/editStatus",

  // 计划用水设置
  waterSetting: "/watermanage/irrigation/currentWater",
  waterSettingCRUD: "/watermanage/plan",
  waterPlanCRUD: "/watermanage/water",
  getPlanWaterTree: "/watermanage/planwater/tree",
  calcPlanWater: "/watermanage/planwater/calculation",
  editPlanWater: "/watermanage/planwater/edit",
  batchEditPlanWater: "/watermanage/planwater/batchEdit",
  getSetRecord: "/watermanage/planwaterrecord/list",

  // 计划用水设置记录
  waterSettingRecord: "/watermanage/plan/page",

  // 水费查询
  // waterFee: '/feemanage/fee/list',
  // waterFeeTree: '/feemanage/fee/tree',
  waterFeeCRUD: "/feemanage/payment",
  // waterFeeReord: '/feemanage/fee/getDayFeeHistory',//日水费记录
  paymentRecord: "/feemanage/payment/page",
  // 水费查询
  waterFeeRateTree: "/feeManage/channelWaterRateManagementNewest/list",
  // 水费查询历史列表
  waterFeeHistoryList: "/feeManage/channelWaterRateManagement/historyList",
  // 水费管理历史记录-日水费
  getHistoryList: "/feeManage/channelWaterRateManagement/getHistoryList",
  // 水费提示
  waterFeeTipsTree: "/feeManage/channelWaterRateManagementNewest/tipsList",
  // 水费提示历史列表
  waterFeeTipsHistoryList:
      "/feeManage/channelWaterRateManagement/historySchedulingList",
  // 机构水费查询
  getYearWaterCharge: "/waterCharge/query/getYearWaterCharge",
  // 机构年度缴费记录
  getPaymentRecord: "/waterCharge/query/getPaymentRecord",
  // 机构年度水量记录
  getYearWater: "/waterVolume/getYearWater",
  // 机构站点水量
  getSiteYearWater: "/waterVolume/getSiteYearWater",

  // 灌溉水价
  waterPrice: "/waterPrice/price/page",
  waterPriceDetail: "/waterPrice/price/selectOne",
  waterPriceCurrent: "/waterPrice/price/getPrice",
  waterPriceAll: "/waterPrice/price/selectAll",
  waterPriceAdd: "/waterPrice/price/addWaterPrice",
  waterPriceEdit: "/waterPrice/price/editWaterPrice",
  waterPriceDelete: "/waterPrice/price/deleteWaterPrice",
  waterPriceUpdateStatus: "/waterPrice/price/updateStatus",

  // 水量平衡
  waterBalance: "/waterbalance/balance/list",
  waterBalanceTree: "/waterbalance/balance/tree",
  // 四大水量平衡区查询
  waterSectionBalance: "/waterbalance/balance/waterSectionBalance",
  // 平衡区过水断面配置
  channelSectionPage: "/channel/section/list", // 分页查询
  selectChannelWaterSectionTree: "/channel/section/selectWaterSectionTree", // 分页查询
  channelSectionCRUD: "/channel/section", // 新增、编辑、删除
  // 四大平衡区查询

  // 列表所有数据
  chartData: "/datamanage/flow/timeListChart",
  // 时段数据
  timeData: "/datamanage/flow/timeList",
  // 流量数据
  flowData: "/datamanage/flow/table",
  // 获取手动测站的时段数据。
  getManualFlowData: "/datamanage/flow/manualFlowData",
  getManualFlowDataChart: "/datamanage/flow/manualFlowDataChart",
  // 获取手动测站的时段数据。
  getPumpFlowData: "/datamanage/flow/pumpFlowData",
  getPumpFlowDataChart: "/datamanage/flow/pumpFlowDataChart",
  // 获取手动测站的时段数据
  getGateFlowData: "/datamanage/flow/gateFlowData",
  getGateFlowDataChart: "/datamanage/flow/gateFlowDataChart",

  // 用水管理情况
  waterManage: "/watermanage/management/list",
  waterManageHistory: "/watermanage/management/history",
  // 渠道用水管理列表
  channelWaterManagementNewest:
      "/waterManage/channelWaterManagementNewest/list",
  // 渠道用水管理历史列表接口
  channelWaterManagementHistoryList:
      "/waterManage/channelWaterManagement/historyList",
  // 渠道用水管理调度提示列表
  channelWaterSchedulingList:
      "/waterManage/channelWaterManagementNewest/schedulingList",
  // 渠道用水管理调度提示历史列表
  channelWaterHistorySchedulingList:
      "/waterManage/channelWaterManagement/historySchedulingList",

  // 调度/费用提示
  dispatchTips: "/scheduledtip/scheduled/list",
  dispatchTipsHistory: "/scheduledtip/scheduled/getHistory",
  costTips: "/feetip/tip/list",
  costTipsHistory: "/feetip/tip/getHistory",

  // 站点当前数据
  stationCurrentData: "/basics/overview/realData",
  // 关联渠道
  relationChannel: "/basics/overview/associationChannel",

  // 泵站
  findBengzhanPage: "/bz/bzInfo/findPage",
  selectBzTree: "/bz/bzInfo/selectBzTree",
  bzDownload: "/bz/bzInfo/export", // 导出
  selectBengzhanById: "/bz/bzInfo/selectById",
  addBengzhanInfo: "/bz/bzInfo/addBzInfo",
  editBengzhanInfo: "/bz/bzInfo/editBzInfo",
  deleteBengzhanByIds: "/bz/bzInfo/deleteIds",
  addBengzhanBJInfo: "/bz/bzBjInfo/addBzBjInfo",
  editBengzhanBJInfo: "/bz/bzBjInfo/editBzBjInfo",
  findBengzhanBJPage: "/bz/bzBjInfo/findPage",
  selectBengzhanBJById: "/bz/bzBjInfo/selectById",
  deleteBengzhanBJById: "/bz/bzBjInfo/deleteIds",
  bzRealtimeView: "/bz/bzPlcDataRealVal/bzview",
  // queryBzRealTimeViewByBzId: '/bz/bzPlcDataRealVal/bzview',
  bzMonitor: "/bz/bzPlcDataRealVal/getBzControl",
  bzSwitcher: "/bz/bzInfo/bzStateControl",
  bzbjSwitcher: "/bz/bzBjInfo/bzBjStateControl",
  findAllBzList: "/bz/bzInfo/findAllBzList",
  addPumpSystem: "/bz/bzSystem/addBzSystem",
  editPumpSystem: "/bz/bzSystem/editBzSystem",
  getPumpSystemDetail: "/bz/bzSystem/queryLatest",
  getAllPump: "/bz/bzInfo/findAllBzList",

  // 庙前一级站 实时监测页面
  MQYJZRealData: "/mqyjz/realData",
  // 谢村二级站 实时监测页面
  XCEJZRealData: "/xcejz/realData",
  // 南干二级站 实时监测页面
  NGEJZRealData: "/ngejz/realData",
  // 北干三级站 实时监测页面
  BGSJZRealData: "/bgsjz/realData",
  // 中干三级站 实时监测页面
  ZGSJZRealData: "/zgsjz/realData",

  // 庙前一级站 历史监测单个记录
  MQYJZHistoryData: "/mqyjz/history",
  // 谢村二级站 历史监测单个记录
  XCEJZHistoryData: "/xcejz/history",
  // 南干二级站 历史监测单个记录
  NGEJZHistoryData: "/ngejz/history",
  // 北干三级站 历史监测单个记录
  BGSJZHistoryData: "/bgsjz/history",
  // 中干三级站 历史监测单个记录
  ZGSJZHistoryData: "/zgsjz/history",

  // 庙前一级站 历史监测记录列表
  MQYJZHistoryDataList: "/mqyjz/history/list",
  // 谢村二级站 历史监测记录列表
  XCEJZHistoryDataList: "/xcejz/history/list",
  // 南干二级站 历史监测记录列表
  NGEJZHistoryDataList: "/ngejz/history/list",
  // 北干三级站 历史监测记录列表
  BGSJZHistoryDataList: "/bgsjz/history/list",
  // 中干三级站 历史监测记录列表
  ZGSJZHistoryDataList: "/zgsjz/history/list",
  // 泵站设备维修记录
  sbwxAddBzSbxxInfo: "bz/bzSbxxInfo/addBzSbxxInfo",
  sbwxQueryById: "bz/bzSbxxInfo/queryById",
  // sbwxQueryByBzId: 'bz/bzSbxxInfo/queryByBzId',
  sbwxEditBzSbxxInfo: "/bz/bzSbxxInfo/editBzSbxxInfo",
  sbwxSelectBzSbxxInfo: "/bz/bzSbxxInfo/selectBzSbxxInfo",
  sbwxDeleteBzSbxxInfo: "bz/bzSbxxInfo/deleteBzSbxxInfo",

  // 工况查询
  bzgkList: "/bz/bzPlcDataHistoryVal/list",
  bzgkBootSituation: "/bz/bzPlcDataHistoryVal/bootSituation",
  bootDayReport: "bz/bzPlcDataHistoryVal/bootDayReport",

  // 泵站操作日志
  bzLogList: "/bz/bzLog/", // 泵站日志列表
  bzLogExport: "/bz/bzLog/export", // 泵站日志导出

  // 泵站监测 -- 泵站电表
  bzElectricityMeter: "/electricityMeter/realData/list",
  // 泵站监测 -- 水源站
  bzShipRealData: "/ship/realData/list",

  // 闸站实时数据
  zzRealtimeData4Map: "/zz/gate/zzTimeData",
  // 某个闸站下的闸门列表
  zzSluicePage: "/zz/gate/getGateSluice",

  // 实时数据
  getRainMonthChart: "/basics/stpptnr/monthChartList",

  // 工程巡检-检查项配置
  getCheckItem: "/inspection/item/page",
  getCheckItemByType: "/inspection/item/list",
  checkItemCRUD: "/inspection/item",
  inspectionPass: "/flowNode/inspectionPass", //巡检通过
  getUserByMainId: "/flowNode/getUserByMainId", //获取巡检用户

  // 测站管理
  measureListPage: "/station/measured/page",
  measureInfoCRUD: "/station/measured",
  // getSoilList: "/basics/station/soil/list",
  measureGetInfoByStcd: "/station/measured/stationCode",
  getStationFlowRecord: "/station/stationHistoryData",
  setStationFlow: "/station/stationData",
  stationFlowStopWater: "/station/stationData/stopWater",
  checkSetStationFlowDataValid: "/station/stationData/checkDataValid",
  queryChannelTreeStationMeasured:
      "/station/measured/queryChannelTreeStationMeasured", // 测站比测页面树结构接口
  gatePumpDataHistoryPage: "/station/stationHistoryData/queryPumpAll", // 查询泵站手录数据历史记录
  gateGateDataHistoryPage: "/station/stationHistoryData/queryGateAll", // 查询闸站手录数据历史记录
  gateStationDataHistoryPage: "/station/stationHistoryData/queryStationAll", // 查询测站手录数据历史记录

  // 工程巡检-运行情况巡检记录
  getInspectionRecord: "/record/inspection/page",
  getAllInspectionRecords: "/record/inspection/queryAll",
  inspectionCRUD: "/record/inspection",
  getInspectionCount: "/record/inspection/queryTitleCount",
  getInspectionChart: "/record/inspection/chart",

  // 工程巡检-人员值守情况巡检
  getAllOnDuty: "/inspection/onDuty/list", // 分页、条件查询
  getAllOnDutyMonth: "/inspection/onDuty/month", // 分页、条件查询
  onDutyCRUD: "/inspection/onDuty", // 新增、编辑、删除

  // 工程巡检-运行安全
  getAllSafet: "/inspection/safet/list", // 分页、条件查询
  safetCRUD: "/inspection/safet", // 新增、编辑、删除
  getSafetChart: "/inspection/safet/chart", // 图表数据查询
  getSafetCount: "/inspection/safet/queryTitleCount", // 安全巡检数量
  // 工程巡检-运行安全-检查项配置
  getAllSafetItem: "/inspection/safet/item/list", // 分页、条件查询
  safetItemCRUD: "/inspection/safet/item", // 新增、编辑、删除

  // 水源路径查询
  findWaterSourcePath: "/gis/findWaterFlowPath",

  // 山西概化图相关
  initialAllNodes: "/channelLink/initalAllNodes", // 初始化查询所有节点
  queryChannelWaterBuilding: "/channel/water/queryChannelWaterBuilding", // 查询是否
  channelLink: "/channelLink/queryLink", // 查询水源路径
  getChannelAndNodes: "/channelLink/getChannelAndNodes", // 查询下游可做水量平衡的分水节点
  queryChannelBalance: "channelLink/queryChannelBalance", // 查询水量平衡结果
  queryChannelBalanceByChannelNumber: "channelLink/initialBalance", // 通过渠道编码查询水量平衡
  queryNodeDetails: "channelLink/queryNodeDetails", // 查询节点详情
  queryNodeBalance: "channelLink/queryNodeBalance", // 查询节点间的水量平衡结果
  queryCloseLoop: "/channelLink/queryCloseLoop", // 节点间闭环节点列表
  queryNodeBuildingId: "/channelLink/queryNodeBuildingId", // 查询渠道ID
  queryUnboundSite: "/channelLink/queryUnboundSite", // 通过建筑物类型查询建筑物列表
  nodeCRUD: "/channelLink", // 概化图节点相关CRUD接口
  selectChannelAssociatedSite: "/basics/channel/selectChannelAssociatedSite", // 通过渠道查询本级渠道相关的分水点与过境点

  flowChannelStationRealData: "/real/data/flowChannelStationRealData",
  flowChannelCrossBorderRealData: "/real/data/flowChannelCrossBorderRealData",

  // 实时数据接口
  getAllFlowRealData: "/real/data/flowRealData",
  // 渠道状态接口
  channelSiteStatusRealData: "/real/data/channelSiteStatusRealData",

  // 渠道操作日志
  channelLog: "/historyRecord/channelInfo",
  channelLogDetail: "/historyRecord/channelInfo",
  // 泵站操作日志
  pumpLog: "/historyRecord/bzInfo",
  pumpLogDetail: "/historyRecord/bzInfo",
  // 闸站操作日志
  gateLog: "/historyRecord/gateInfo",
  gateLogDetail: "/historyRecord/gateInfo",
  // 测站操作日志
  stationLog: "/historyRecord/stationInfo",
  stationLogDetail: "/historyRecord/stationInfo",
  // 管理单位操作日志
  managementLog: "/historyRecord/managementUnit",
  managementLogDetail: "/historyRecord/managementUnit",
  // 行政区划操作日志
  regionLog: "/historyRecord/regionInfo",
  regionLogDetail: "/historyRecord/regionInfo",

  // 通用操作日志
  operationRecord: "/history/operrecord",
  operationRecordLogList: "/history/operrecord/loglist",
  // 水库操作日志 水库日志特殊是因为水库信息存了两张表
  operationRecordResLogList: "/history/operrecord/resloglist",

  channelRealData: "/real/data/channelRealData", // 关注渠道的tree接口接口
  stationRealData: "/real/data/getStationRealData", // 测站实时数据接口

  acreageFee: "/acreageFee", // 按亩收费接口

  /**
   * 用水管理-用水参数配置-作物用水定额
   */
  cropWaterQuotaPage: "/watermanage/cropQuota/list", //分页查询
  cropWaterQuotaCURD: "/watermanage/cropQuota", //新增、修改、删除
  checkCropCodeUnique: "/watermanage/cropQuota/checkCropCodeUnique", //校验编码唯一

  /**
   * 用水管理-用水参数配置-渠道用水系数
   */
  channelCoefficientPage: "/watermanage/coefficient/list", //分页查询
  getChannelCoefficientTree: "/watermanage/coefficient/tree", //树列表
  channelCoefficientCURD: "/watermanage/coefficient", //新增、修改、删除
  getChannelCoefficientRecord: "/historyRecord/coefficient/list", //查询历史记录

  /**
   * 用水管理-获取各渠道用水管理列表-本级及下级渠道
   */
  getChannelWaterManagement:
      "/waterManage/channelWaterManagementNewest/selectChannelWaterManagement", // 查询列表

  // 防汛预警 --废弃
  //floodWarningInfoAll: "/floodWarningInfo/queryAll",
  //floodWarningInfoPage: "/floodWarningInfo/queryPage",
  //floodWarningInfoCRUD: "/floodWarningInfo",

  // 防汛仓库
  floodDepotAll: "/floodDepot/queryAll",
  floodDepotPage: "/floodDepot/list",
  floodDepotCRUD: "/floodDepot",

  // 防汛物资item管理
  floodMaterialItemAll: "/flood/item/all",
  floodMaterialItemEdit: "/flood/item/editAll",

  // 防汛物资入库记录
  floodMaterialEntryRecordPage: "/flood/entry/all",
  floodMaterialEntryCRUD: "/flood/entry",

  // 防汛物资出库记录
  floodMaterialOutgoingRecordPage: "/flood/outgoing/all",
  floodMaterialOutgoingCRUD: "/flood/outgoing",

  // 查询库存信息
  floodInventoryInfo: "/flood/inventory/all",
  // 防汛预警监测站点信息 -- 废弃 由floodWarningSiteInfo2替代
  //floodWarningSiteInfoPage: "/floodWarningSiteInfo/queryPage",
  //floodWarningSiteInfoAll: "/floodWarningSiteInfo/queryAll",
  floodSluiceAll: "/zz/gate/queryFloodAll",

  //水位流量
  waterFlow: "/system/waterflow",
  waterFlowList: "/system/waterflow/list",
  waterFlowPage: "/system/waterflow/page",

  // 平衡区概化图底图弹出窗界面
  queryChannelInfo4ReducedGraph: "/basics/channel/queryChannelGraph", // 渠道
  getMonitorInfoByCode: "/basics/station/getInfoByStationCode",
  getGateInfoByGateCode: "/zz/gate/getInfoByGateCode",
  getPumpInfoByBzCode: "/bz/bzInfo/selectByBzCode",
  getChannelWaterRateManagementNewest:
      "/feeManage/channelWaterRateManagementNewest/list",

  // 关注站点： 2022.04.25
  userFocusSite: "/system/userFocusSite",

  // 数据报表
  // 村庄 日报表
  // dayReportPage: "/statistical/report/dayReportForm",
  getDayVillage: "/statistical/report/getDayVillage",
  // 月报表
  // monthReportPage: "/statistical/report/monthReportForm",
  getMonthVillageReport: "/statistical/report/getMonthVillage",
  // 年报表
  // yearReportPage: "/statistical/report/yearReportForm",
  getYearVillageReport: "/statistical/report/getYearVillage",
  // 报表列表
  statisticalReportPage: "/statistical/report/list",
  // 报表新增
  statisticalReportCRUD: "/floodWarningInfo",
  // 报表批量新增
  statisticalReportAddList: "/floodWarningInfo/insertList",
  // 协会日报表
  getDayAssociatione: "/statistical/report/getDayAssociatione",
  //  协会日报表使用ManagementUnit关联
  getAssociationeDayReport: "/statistical/report/getAssociationeDayReport",
  // 协会月报表
  getAssociationeMonthReport: "/statistical/report/getAssociationeMonthReport",
  // 协会年报表
  getAssociationeYearReport: "/statistical/report/getAssociationeYearReport",
  // 调用协会报表定时任务
  callAssociationeTask: "/statistical/report/callAssociationeTask",
  //干渠日报表
  getGanQuReport: "/statistical/report/ganqu",
  //支渠日报表
  getZhiQuReport: "/statistical/report/zhiqu",
  //管理段日支渠报表
  getGLDZhiQuReport: "/statistical/report/gld",
  //干渠月报表
  getGanQuMonthReport: "/statistical/report/ganqumonth",
  //支渠月报表
  getZhiQuMonthReport: "/statistical/report/zhiqumonth",

  //干渠日报表导出
  expGanQuReport: "/statistical/report/exportGanQuReport",
  //支渠日报表导出
  exportZhiQuReport: "/statistical/report/exportZhiQuReport",
  //管理段日报表导出
  exportGLDReport: "/statistical/report/exportGLDReport",
  //干渠月报表导出
  exportGanQuMounthReport: "/statistical/report/exportGanQuMounthReport",
  //支渠月报表导出
  exportZhiQuMonthReport: "/statistical/report/exportZhiQuMonthReport",

  // 水价综改 -- 水权分配
  waterRightsDistributionTree: "/waterRights/distribution/treeList", // 树结构查询
  waterRightsDistributionPage: "/waterRights/distribution/list", // 列表查询
  waterRightsDistributionCRUD: "/waterRights/distribution", // 新增、编辑、删除
  waterRightsCalc: "/waterRights/distribution/calculation", //水权计算
  batchEditWaterRights: "/waterRights/distribution/batchEdit", //水权分配
  // 水价综改 -- 水权交易 -- 水权证管理
  certificateGrant: "/waterRights/distribution/certificateGrant",
  certificateGrantAll: "/waterRights/distribution/certificateGrantAll",
  // 水价综改 -- 水权交易 -- 申请记录
  applyPage: "/waterRights/apply/list",
  // 水价综改 -- 水权交易 -- 申请记录操作：编辑、删除、详情
  applyCRUD: "/waterRights/apply",
  // 水价综改 -- 水权交易 -- 交易记录
  tradingPage: "/waterRights/trading/list",
  // 水价综改 -- 水权交易 -- 交易记录操作：编辑、删除、详情
  tradingCRUD: "/waterRights/trading",

  // 水价综改 -- 统计分析 -- 干渠片用水统计分析
  getChart: "/trunkCanal/water/getChart", // 图表数据接口
  getTable: "/trunkCanal/water/getTable", // 表格数据接口

  // 水价综改 -- 统计分析 -- 协会用水总量分析
  getAssociationTable: "/trunkCanal/water/getAssociationTable", // 表格接口

  // 水价综改 -- 制度管理
  getWaterRightsSystem: "/waterRights/system/list",
  waterRightsSystemCRUD: "/waterRights/system",

  // 渠道和泵站示意图
  getChannelFlowRealData: "/real/data/channelFlowRealData",

  /**
   * 视频管理
   */
  //1.视频配置
  videoInfoPage: "/video/videoInfo/list", //分页
  getVideoChannelTree: "/video/videoInfo/selectVideoStationTree", //按渠道树
  getAllVideoInfoWithBuilding: "/video/videoInfo/getAllVideoInfoWithBuilding", //包含关联站点信息
  videoInfoCURD: "/video/videoInfo", //新增、编辑、删除
  //通道配置
  videoChannelPage: "/video/videoChannel/list", //分页
  videoChannelCURD: "/video/videoChannel", //新增、编辑、删除
  getAllVideoInfo: "/video/videoInfo/getAllVideoInfo",
  getAllVideoInfoTree: "/video/videoInfo/getAllVideoInfoTree",
  getVideoChannelByVideoId: "/video/videoChannel/getVideoChannelByVideoId",
  getVideoStationChannelByBuildingInfo:
      "/video/videoInfo/getVideoStationChannelByBuildingInfo",
  // 概化示意图协会版
  associationRealData: "/real/data/associationRealData", // 获取数据

  // 报警记录表 -- 废弃 有floodWarningInfo2替代
  //floodWarningInfo: "/floodWarningSiteInfo/queryPage",
  //allFloodWarningInfo: "/floodWarningSiteInfo/queryAll",

  // 配水调度
  //需水上报
  waterDemand: "/waterDemand/report/getChannelInfoByUnitId",
  // 需水申报列表查询
  getWaterDemandReportList: "/waterDemand/report/getWaterDemandReportList",
  // 机构下站点列表
  getSiteList: "/waterDemand/report/getSiteList",
  // 批量新增需水申报数据
  insertList: "/waterDemand/report/insertList",
  // 需水上报审核
  waterDemandList: "/waterDemand/report/list",
  waterDemandCRUD: "/waterDemand/report",
  // 调度演算
  waterDeductionTree: "/water/deduction/tree",
  waterDeductionList: "/water/deduction/list",
  waterDeductionCRUD: "/water/deduction",
  // 调度大事记
  //waterRecordList: '',
  waterRecordCRUD: "",

  // 需水申报  用水户、协会、管理机构需水申报
  // 申报历史
  waterDemandDeclarationList: "/waterDemand/declaration/list",
  // 需水申报新增、编辑、删除
  waterDemandDeclarationCRUD: "/waterDemand/declaration",
  // 需水申报详情
  waterDemandDeclarationDetails:
      "/waterDemand/declaration/selectWaterDemandDeclarationDetails",
  waterDemandDeclarationDetailsNew:
      "/waterDemand/declaration/selectWaterDemandDeclarationDetailsNew",

  // 需水审批列表详情
  waterDemandApprovalList: "/waterDemand/declaration/listWithApproval",
  // 通过或驳回
  passOrReject: "/waterDemand/details/passOrReject",
  // 需水审批相关
  waterApprovalCRUD: "/waterDemand/approval",
  // 获取当前灌期的计划水量
  getIrrigationPlanWater: "/waterDemand/approval/getIrrigationPlanWater",
  // 批量编辑
  waterApprovalEditBatch: "/waterDemand/approval/editBatch",
  // 检查是否可以进行审批
  checkApply: "/waterDemand/approval/checkApply",
  // 分组获取需水日志
  getWaterDemandLog: "/waterDemand/details/getWaterDemandLog",

  // 月度用水量
  getMonthlyWaterUse: "/waterDemand/declaration/getMonthlyWaterUse",

  // 下级站点需水申报信息
  childrenWaterDemandDeclaration: "/waterDemand/declaration/getChildrenSite",
  // 查询该渠道需水申报信息
  itselfWaterDemandDeclaration:
      "/waterDemand/declaration/getItselfWaterDemandDeclaration",
  // 按月份查询该渠道需水申报信息
  getItselfWaterDemandDeclarationByMonths:
      "/waterDemand/declaration/getItselfWaterDemandDeclarationByMonths",

  // 按月返回当前建筑物下级所有渠道的所有作物的需水量
  selectCropQuataByBuilding: "/waterquota/selectCropQuataByBuilding",

  // 按月返回当前建筑物的放水停水时间
  getItselfWaterShutdownAndReleaseByMonths:
      "/waterDemand/declaration/getItselfWaterShutdownAndReleaseByMonths",

  // 用水户关联站点
  userBuildingList: "/system/user/getUserChannel",
  // 所有渠道关联站点
  allBuildingList: "/system/user/getUserAllBuilding",
  // 用水过程线
  getWaterUseHydrograph: "/waterDemand/declaration/getWaterUseHydrograph",

  // 配水计划
  // 配水计划 -- 平衡区供水细节表
  getWaterDemandDetails: "/waterDemand/declaration/getWaterDemandDetails",

  //指令下达-指令列表
  waterInstructionList: "waterInstruction/status/list",
  waterInstructionCURD: "waterInstruction/status", //新增、编辑、删除
  //调度大事记
  waterRecordList: "waterInstruction/status/recordlist",

  // 泵站检修
  // 泵站检修列表
  getJianxiuTypeL1: "/bz/item/list",
  getJianxiuTypeL2: "/bz/item/getTwolevels",
  // 泵站检修详情
  getJianxiuRecordList: "/bz/record/list",
  getJianxiuRecordCRUD: "/bz/record",

  //部门管理
  departmentInfo: "/system/dept/list",
  departmentCURD: "/system/dept",

  //用水户管理
  waterUserInfo: "/waterUser/queryWaterUserList",
  waterUserCURD: "/waterUser",
  // 用水户用水统计
  waterUserStatistic: "/waterUser/statistic/getWaterUseStatistics",

  // 地图：首页搜索及过滤
  queryBuildingNameOrCode: "/channelLink/queryBuildingNameOrCode", // 搜索框查询
  queryBuildingRunningData: "/channelLink/queryBuildingRunningData", // 站点运行数据查询
  queryBuildingRunningState: "/channelLink/queryBuildingRunningState", // 首页查询站点运行状态

  //灌溉制度设计成果-作物用水定额
  waterQuotaPage: "/waterquota/list", //分页查询
  waterQuotaCURD: "/waterquota", //新增、修改、删除

  // 水库
  reservoirInfoCRUD: "/basics/attresbase",
  getReservoirBindableList: "/basics/attresbas/getReservoirBindableList",
  reservoirInfoAll: "/basics/attresbase/all",
  reservoirInfoList: "/basics/attresbase/list",
  reservoirInfoPage: "/basics/attresbase/page",
  reservoirInfoFrontendPage: "/basics/attresbase/frontendPage",
  reservoirInfoExport: "/basics/attresbase/export",
  reservoirInfoBind: "/basics/attresbase/bind",
  queryResStorage: "/basics/attresbase/queryResStorage",
  queryPeriodResStorage: "/basics/attresbase/queryPeriodResStorage",
  // 水库的extra其它信息
  resExtraInfoCRUD: "/basics/attresextra",
  getRelatedBindableStationList:
      "/basics/associatedSites/getRelatedBindableStationList",
  getRelatedBindableChannelList:
      "/basics/associatedSites/getRelatedBindableChannelList",
  getRelatedBindableGateList:
      "/basics/associatedSites/getRelatedBindableGateList",
  // 大坝
  damInfoCRUD: "/basics/dam",
  getDamBindableList: "/basics/dam/getDamBindableList",
  getDamBindableListByUsed: "/basics/dam/getDamBindableListByUsed",
  damInfoAll: "/basics/dam/all",
  damInfoList: "/basics/dam/list",
  damInfoExport: "/basics/dam/export",
  damInfoBind: "/basics/dam/bind",
  // 渡槽
  flumInfoCRUD: "/basics/flum",
  getFlumBindableList: "/basics/flum/getFlumBindableList",
  flumInfoAll: "/basics/flum/all",
  flumInfoList: "/basics/flum/list",
  ReserviorflumInfoList: "/basics/flum/reservior",
  selectflumChannelTree: "/basics/flum/selectFlumTree",
  flumInfoExport: "/basics/flum/export",
  flumInfoBind: "/basics/flum/bind",

  // 涵洞
  culvInfoCRUD: "/basics/culv",
  getCulvBindableList: "/basics/culv/getCulvBindableList",
  culvInfoAll: "/basics/culv/all",
  culvInfoList: "/basics/culv/list",
  selectCulvTree: "/basics/culv/selectCulvTree",
  culvInfoExport: "/basics/culv/export",
  culvInfoBind: "/basics/culv/bind",
  // 溢洪道
  selectSpillwayList: "/basics/spillway/list",
  updateAttSpillwayByBuildingId:
      "/basics/spillway/updateAttSpillwayByBuildingId",
  selectSpillwayListByUsed: "/basics/spillway/listByUsed",
  selectSpillwayAll: "/basics/spillway/all",
  spillwayInfoCRUD: "/basics/spillway",
  spillwayExport: "/basics/spillway/export",

  getAssociatedSitesOfBuilding:
      "/basics/associatedSites/getAssociatedSitesOfBuilding",
  // 修改建筑物关联
  updateSitesOfBuilding: "/basics/associatedSites/updateSitesOfBuilding",

  // 沉砂池
  sedInfoCRUD: "/basics/sed",
  getSedBindableList: "/basics/sed/getSedBindableList",
  sedInfoAll: "/basics/sed/all",
  sedInfoList: "/basics/sed/list",
  sedInfoExport: "/basics/sed/export",
  sedInfoBind: "/basics/sed/bind",

  // 防汛报警
  floodWarningSiteInfoPage: "/warning/site2/list",
  fooldStationWarnStationCRUD: "/basics/warning",
  fooldStationWarnStationAll: "/basics/warning/queryAll",
  selectFloodStationFromMeasureStation: "/basics/warning/floodStation",
  floodWarningSiteInfoAll: "/warning/site2/queryAll",
  floodWarningSiteInfoCRUD: "/warning/site2",
  floodWarningInfo: "/warning/site2/list",
  allFloodWarningInfo: "/warning/site2/queryAll",

  floodWarningInfoAll: "/warning/info2/queryAll",
  floodWarningInfoPage: "/warning/info2/list",
  floodWarningInfoCRUD: "/warning/info2",

  // 查询告警列表
  floodWarningInfoList: "/warning/infoRecord/list",
  // 分页查询告警列表
  floodWarningInfoPageList: "/warning/infoRecord/page",

  // 根据建筑物类型获取建筑物Id列表
  selectBuildingListByType: "/basics/channel/selectBuildingListByType",
  //安装设备站点查询
  deviceAccessSiteList: "/station/deviceAccessSite/list",

  // 维修记录
  maintenanceAll: "/maintenance/main/queryAll",
  maintenancePage: "/maintenance/main/list",
  selectMaintenanceInfoByBuildingInfo: "/maintenance/main/building",
  maintenanceCRUD: "/maintenance/main",
  maintenanceRecordAll: "/maintenance/record/queryAll",
  maintenanceRecordPage: "/maintenance/record/list",
  maintenanceRecordPageAll: "/maintenance/record/all",
  updateMaintenanceRecordList: "/maintenance/record/updateList",
  maintenanceRecordCRUD: "/maintenance/record",

  // 建筑物图片
  buildingImageCRUD: "/building/image",
  selectBuildingImageByBuildingInfo: "/building/image/",

  // 墒情站
  getSoilListDataLastest: "/soil/r/lastest",
  getSoilListDataList: "/soil/r/list",
  getSoilListDataCRUD: "/soil/r",
  getSoilInfoCRUD: "/soil/b",
  getSoilInfoList: "/soil/b/list",

  // 查询渠道上的建筑物信息
  selectBuildingOnChannel: "/channelLink/selectBuildingOnChannel",
  // 查询所有渠道建筑物树结构
  selectAllNodesBuilding: "/channelLink/queryAllNodesBuildingTree",

  // 流量设置-查询实时流量数据信息
  getSetFlowByTypeAndStcd: "/station/setFlow/getSetFlowByTypeAndStcd",
  // 流量设置-保存流量设置实时数据
  saveSetFlowStationData: "/station/setFlow/saveSetFlowStationData",
  // 流量设置-分页查询历史实时数据
  pageHistorySetFlow: "/station/setFlow/pageHistorySetFlow",
  // pageHistorySetFlow:"/station/setFlow/pageHistorySetFlow",

  // iot系统配置-查询列表
  iotSystemConfigList: "/iot/iotSystemConfig/list",
  // iot系统配置-查询分页列表
  iotSystemConfigPageList: "/iot/iotSystemConfig/page",
  // iot系统配置-根据id查询iot系统配置
  getIotSystemConfigById: "/iot/iotSystemConfig/queryById",
  // iot系统配置-新增iot系统配置
  addIotSystemConfig: "/iot/iotSystemConfig/add",
  // iot系统配置-新增iot系统配置
  editIotSystemConfig: "/iot/iotSystemConfig/edit",
  // iot系统配置-根据id删除iot系统配置
  deleteIotSystemConfigById: "/iot/iotSystemConfig",
  // iot系统配置-通过iot系统编码查询指iot系统配置是否已存在
  isExistsByIotSystemCode: "/iot/iotSystemConfig/isExistsByIotSystemCode",
  // iot系统配置-通过序号查询指iot系统配置是否已存在
  isExistsByIotSystemSortNo: "/iot/iotSystemConfig/isExistsBySortNo",

  // iot区域设备-查询列表
  iotAreaDeviceList: "/iot/iotAreaDevice/list",
  // iot区域设备-查询分页列表
  iotAreaDevicePageList: "/iot/iotAreaDevice/page",
  // iot区域设备-查询数量
  iotAreaDeviceCount: "/iot/iotAreaDevice/count",
  // iot区域设备-同步区域设备
  synchrIotAreaDevice: "/iot/iotAreaDevice/synchrAreaDevice",
  // iot区域设备-绑定区域
  bindIotArea: "/iot/iotAreaDevice/bindArea",
  // iot区域设备-取消绑定区域
  unBindIotArea: "/iot/iotAreaDevice/unBindArea",
  // iot区域设备-批量删除
  deleteIotAreas: "/iot/iotAreaDevice/deleteByIds",
  // iot区域设备-导入设备
  importIotDevice: "/iot/iotAreaDevice/import",
  // iot区域设备-按建筑物类型查询-查询顶级
  getTopByBuildingType: "/iot/iotAreaDevice/getTopByBuildingType",
  // iot区域设备-按建筑物类型查询-查询下级
  getSubByBuildingType: "/iot/iotAreaDevice/getSubByBuildingType",
  // iot区域设备-按渠道树查询-查询顶级
  getTopByChannel: "/iot/iotAreaDevice/getTopByChannel",
  // iot区域设备-按渠道树查询-查询下级
  getSubByChannelId: "/iot/iotAreaDevice/getSubByChannelId",
  // iot区域设备-获得一条iot系统配置记录
  getSystemAreaDevice: "/iot/iotAreaDevice/getSystemAreaDevice",
  // iot区域设备-新增iot系统设备
  addSystemAreaDevice: "/iot/iotAreaDevice/add",
  // iot系统配置-通过视频编码查询指iot系统设备编码是否已存在
  isExistsByIotAreaDeviceIndexCode: "/iot/iotAreaDevice/isExistsByIndexCode",

  // 河道水情-查询测站水位列表
  stRiverRQueryList: "/datamanage/river/query",
  // 河道水情-查询测站水位分页列表
  stRiverRQueryPage: "/datamanage/river/page",
  // 河道水情-查询测站流量列表
  stFlowQueryList: "/datamanage/flow/query",
  // 河道水情-查询测站流量分页列表
  stFlowQueryPage: "/datamanage/flow/page",
  // 河道水情-查询测站降雨量列表
  stPptnRQueryList: "/basics/stpptnr/query",
  // 河道水情-查询测站降雨量分页列表
  stPptnRQueryPage: "/basics/stpptnr/page",
  // 获取消息列表
  messageList: "/message/info/list",
  messagePage: "/message/info/page",
  // 根据类型获取消息详情
  messageInfosByType: "/message/info/messageInfosByType",
  // 标记消息已处理
  markMsgSolved: "/message/info/markmsgsolved",

  // 渠道管理段放水停水用水-数据报表，日报表查询
  selectManagementUnitDayWaterTree:
      "/station/openStopWater/selectManagementUnitDayWaterTree",
  // 渠道管理段放水停水用水-数据报表，月报表查询
  selectManagementUnitMonthWaterTree:
      "/station/openStopWater/selectManagementUnitMonthWaterTree",

  // 渠道站点放水停水用水-数据报表，干渠、支渠日报表查询
  selectChannelStationDayWaterTree:
      "/station/openStopWater/selectChannelStationDayWaterTree",
  // 渠道站点用水-数据报表，干渠、支渠月报表查询
  selectChannelStationMonthWaterTree:
      "/station/openStopWater/selectChannelStationMonthWaterTree",
  // 渠道站点放水停水-查询站点放水停水记录分页列表
  stationOpenStopWaterPage: "/station/openStopWater/page",
  // 渠道站点放水停水-查询站点放水停水记录列表
  stationOpenStopWaterList: "/station/openStopWater/list",

  // 渠道信息-根据渠道id查询下一级渠道
  selectSubChannelById: "/basics/channel/selectSubChannelById",
  // 用水计量页面，站点是否计量标识修改
  stationMeasurementCURD: "/waterManage/siteMetricPeriod/",
  //  获取所有权限字段
  getAllPerms: "/system/menu/getAllPerms",
  // 通过buildingId和buildingType查询UnifiedBuildingInfo
  selectBuildingInfoByIdAndType: "/channelLink/selectBuildingInfoByIdAndType",

  // 获取参数配置列表
  selectParameterList: "/parameter/list",
  // 新增或修改参数配置
  addOrUpdateParam: "/parameter/addOrUpdate",
  // 删除参数配置
  deleteParamById: "/parameter",
  // 获取所有建筑物信息
  queryAllUnyiedBuildingInfo: "/channelLink/queryAllUnyiedBuildingInfo",

  // 地图弹出框查询站点实时数据
  getChannelWaterRealData: "/channel/water/getChannelWaterRealData",
  getChannelWaterTree: "/channel/water/getChannelWaterTree",
  getChannelWaterStatus: "/channel/water/getChannelWaterStatus",

  // 获取所有建筑物信息 简化接口，只包含id、type和name
  querySimpleUnyiedBuildingInfo: "/channelLink/querySimpleUnyiedBuildingInfo"
};
function request(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
}

/** 0.1 通用Get获取Url数据**/
export function ajaxGet(url, dataParam, succCallback) {
  return $request("get", url, dataParam)
      .then(resp => {
        succCallback(resp);
      })
      .catch(console.log);
}

export async function ajaxGetAsync(url, dataParam) {
  return await $request("get", url, dataParam);
}

/** 0.2 通用Post获取Url数据**/
export function ajaxPost(url, dataParam, succCallback) {
  return $request("post", url, dataParam)
      .then(resp => {
        succCallback(resp);
      })
      .catch(console.log);
}

/** 1.1 上传平面布置图彩图 **/
export function uploadColorMap(parameter = {}) {
  return $request("post", api.uploadColorMap, parameter);
}

/** 1.2 下载平面布置图彩图 **/
export function loadColorMap(parameter = {}) {
  return $request("get", api.loadColorMap, parameter);
}

// 获取菜单列表
export function getMenuList(parameter = {}) {
  return $request("get", api.menuList, parameter);
}

// 获取菜单权限列表
export function getSysMenuList(parameter = {}) {
  return $request("get", api.sysMenuList, parameter);
}

/** 获取首页统计数据 */
export function getStatistics(parameter = {}) {
  return $request("get", api.statistics, parameter);
}

/** 获取首页用水量表 */
export function getWaterConsumption(parameter = {}) {
  return $request("get", api.waterConsumption, parameter);
}

/** 获取首页用水效率表 */
export function getWaterEfficiency(parameter = {}) {
  return $request("get", api.waterEfficiency, parameter);
}

/** 获取首页水费收缴表 */
export function getWaterCost(parameter = {}) {
  return $request("get", api.waterCost, parameter);
}

// 获取渠系概况
export function getSurvey(parameter = {}) {
  return $request("get", api.survey, parameter);
}

// 根据id获取渠系概况详情
export function getSurveyDetailById(id) {
  return $request("get", `${api.surveyDetail}/${id}`, {});
}

// 编辑灌区概况
export function editSurvey(parameter = {}) {
  return $request("put", api.surveyEdit, parameter);
}

// 上传文件
export function uploadFile(parameter = {}, config) {
  return $request("post", api.uploadFile, parameter, config);
}

// 下载文件
export function commonDownloadFile(parameter = {}, config) {
  return $request("get", api.downloadFile, parameter, config);
}

// 下载文件Url (配合@/utils/downloadFile使用）
export const commonDownloadURL = api.downloadFile;

// 获取渠系基本情况
export function getBaseInfo(parameter = {}) {
  return $request("get", api.baseInfo, parameter);
}

// 获取渠系基本情况查询条件的渠道列表
export function getBaseInfoChannel(parameter = {}) {
  return $request("get", api.baseInfoChannel, parameter);
}

// 所有监测站
export const getStationAll = parameter =>
    $request("get", api.stationAll, parameter);

// 按监测项目查询测站列表
export const getStationByStationType = parameter =>
    $request("get", api.getStationByStationType, parameter);

// 按监测项目查询测站列表(流量)
export const getStationByStationTypeMode = parameter =>
    $request("get", api.getStationByStationTypeMode, parameter);

// 按监测项目查询测站列表(水位)
export const getStationByStationTypeModeWater = parameter =>
    $request("get", api.getStationByStationTypeModeWater, parameter);

// 监测站相关
export function getStationPage(parameter = {}) {
  return $request("get", api.stationPage, parameter);
}

export function reserviorStationPage(parameter = {}) {
  return $request("get", api.reserviorStationPage, parameter);
}

export function selectStationChannelTree(parameter = {}) {
  return $request("get", api.selectStationChannelTree, parameter);
}

export function stationDownload(parameter = {}) {
  return $request("get", api.stationDownload, parameter);
}

// 监测站(雨量站)相关
export function getRainStationPage(parameter = {}) {
  return $request("get", api.stationRain, parameter);
}

// 监测站(蒸发站)相关
export function getEvaStationPage(parameter = {}) {
  return $request("get", api.stationEva, parameter);
}

// 监测唯一性验证
export function checkStationCodeUnique(parameter = {}) {
  return $request("get", api.stationUnique, parameter);
}

export function getStationInfo(id) {
  return $request("get", `${api.stationCRUD}/${id}`, {});
}

export function addStation(parameter = {}) {
  return $request("post", api.stationCRUD, parameter);
}

export function modifyStation(parameter = {}) {
  return $request("put", api.stationCRUD, parameter);
}

export function deleteStation(ids) {
  return $request("delete", `${api.stationCRUD}/${ids}`, {});
}

// 闸站接口
export function getGatePage(parameter = {}) {
  return $request("get", api.gatePage, parameter);
}

// 根据建筑物关联去查询闸站
export function getGatePageBySite(parameter = {}) {
  return $request("get", api.gatePageBySite, parameter);
}

export function gateChannelTree(parameter = {}) {
  return $request("get", api.gateChannelTree, parameter);
}

export function gateDownload(parameter = {}) {
  return $request("get", api.gateDownload, parameter);
}

// 闸站编码唯一性检查
export function checkGateCodeUnique(parameter = {}) {
  return $request("get", api.gateUnique, parameter);
}

export function getGateInfo(id) {
  return $request("get", `${api.gateCRUD}/${id}`, {});
}

export function addGate(parameter = {}) {
  return $request("post", api.gateCRUD, parameter);
}

export function modifyGate(parameter = {}) {
  return $request("put", api.gateCRUD, parameter);
}

export function gateModifyResOnly(parameter = {}) {
  return $request("put", api.gateModifyResOnly, parameter);
}

export function deleteGate(ids) {
  return $request("delete", `${api.gateCRUD}/${ids}`, {});
}

export const gateRealTimeDataByStation = parameter =>
    $request("get", `${api.gateRealTimeDataByStation}`, parameter);
export const gateRealTimeData = parameter =>
    $request("get", `${api.gateRealTimeData}`, parameter);
// export const getChannelOfSluiceGate = sluiceGateId => $request('get', `${api.getChannelOfSluiceGate}/${sluiceGateId}`, {})
export const operatingGate = parameter =>
    $request("post", api.operatingGate, parameter);
export const getAllGates = parameter =>
    $request("get", api.getAllGates, parameter);
export const getAllGatesMode = parameter =>
    $request("get", api.getAllGatesMode, parameter);
export const getGatesDetail = gateId =>
    $request("get", `${api.getGatesDetail}/${gateId}`, {});
export const getGatesLogs = parameter =>
    $request("get", api.getGatesLogs, parameter);
export const getInstitution = parameter =>
    $request("get", api.getInstitution, parameter);
export const getInstitutionById = id =>
    $request("get", `${api.getInstitutionById}/${id}`, {});
export const editInstitution = parameter =>
    $request("put", api.editInstitution, parameter);
export const getRepairRecord = parameter =>
    $request("get", api.getRepairRecord, parameter);
export const getRepairDetail = id =>
    $request("get", `${api.repairCRUD}/${id}`, {});
export const addRepairRecord = parameter =>
    $request("post", api.repairCRUD, parameter);
export const deleteRepair = ids =>
    $request("delete", `${api.repairCRUD}/${ids}`, {});
export const editRepair = parameter =>
    $request("put", api.repairCRUD, parameter);
export const getSummary = id => $request("get", `${api.summaryCRUD}/${id}`, {});
export const get = id => $request("get", `${api.summaryCRUD}/${id}`, {});
export const editSummary = parameter =>
    $request("put", api.summaryCRUD, parameter);

export const getBuildingIntroduce = parameter =>
    $request("get", `${api.getBuildingIntroduce}`, parameter);

export const editBuildingIntroduce = parameter =>
    $request("put", api.buildingIntroduceCRUD, parameter);

export const addBuildingIntroduce = parameter =>
    $request("post", api.buildingIntroduceCRUD, parameter);
export const getRunReport = parameter =>
    $request("get", api.getRunReport, parameter);

// 获取所有字典
export function getAllDictionary() {
  return $request("get", api.allDictionary, {});
}

// 获取水库存水情况基础信息
export function getReservoirBase(parameter = {}) {
  return $request("get", api.reservoirBase, parameter);
}

// 根据水库id获取水库存水情况基础信息详情
export function getReservoirBaseDetail(id) {
  return $request("get", `${api.reservoirBaseDetail}/${id}`, {});
}

// 编辑水库存水情况基础信息
export function editReservoirBase(parameter = {}) {
  return $request("put", api.reservoirBaseEdit, parameter);
}

// 获取水库存水情况表格数据
export function getReservoirTable(parameter = {}) {
  return $request("get", api.reservoirTable, parameter);
}

// 获取水库存水情况chart数据
export function getReservoirChart(parameter = {}) {
  return $request("get", api.reservoirChart, parameter);
}

// 获取水库存水情况表格数据详情
export function getReservoirTableDetail(id) {
  return $request("get", `${api.reservoirTableDetail}/${id}`, {});
}

// 新增水库存水情况表格数据
export function addReservoirTable(parameter = {}) {
  return $request("post", api.reservoirTableAdd, parameter);
}

// 编辑水库存水情况表格数据
export function editReservoirTable(parameter = {}) {
  return $request("put", api.reservoirTableEdit, parameter);
}

// 删除水库存水情况表格数据
export function deleteReservoirTable(id) {
  return $request("delete", `${api.reservoirTableDelete}/${id}`, {});
}

export const getStorage = parameter =>
    $request("get", api.getStorage, parameter);
export const getStorageAll = parameter =>
    $request("get", api.getStorageAll, parameter);
export const getStorageById = id =>
    $request("get", `${api.storageCRUD}/${id}`, {});
export const addStorage = parameter =>
    $request("post", api.storageCRUD, parameter);
export const editStorage = parameter =>
    $request("put", api.storageCRUD, parameter);
export const deleteStorageByIds = ids =>
    $request("delete", `${api.storageCRUD}/${ids}`, {});

// 获取渠道树下拉列表
export function getChannelTree(parameter = {}) {
  return $request("get", api.channelTree, parameter);
}

// 获取渠道列表
export function getChannel(parameter = {}) {
  return $request("get", api.channel, parameter);
}

export function channelDownload(parameter = {}) {
  return $request("get", api.channelDownload, parameter);
}

// 获取水库输水渠道
export function getReserviorChannel(parameter = {}) {
  return $request("get", api.getReserviorChannel, parameter);
}

// 获取渠道子级渠道
export function getSubChannelList(parameter = {}) {
  return $request("get", api.subChannel, parameter);
}

// 获取渠道流量设置记录
export const getChannelFlowRecord = parameter =>
    $request("get", api.getChannelFlowRecord, parameter);
export const setChannelFlow = parameter =>
    $request("post", api.setChannelFlow, parameter);

//获取渠首
export function selectHeadChannel(parameter = {}) {
  return $request("get", api.selectHeadChannel, parameter);
}

export function selectChannelList(parameter = {}) {
  return $request("get", api.selectChannelList, parameter);
}

// 获取行政村树下拉列表
export function getRegionTree(parameter = {}) {
  return $request("get", api.regionTree, parameter);
}

// 为灌区、干渠、协会 报表做铺垫
export function getReportFormTree(parameter = {}) {
  return $request("get", api.reportFormTree, parameter);
}

// 获取部门树下拉列表
export function getDepartmentTree(parameter = {}) {
  return $request("get", api.departmentTree, parameter);
}

// 模糊查询所有专管人员下拉列表
export function getSpecial(parameter = {}) {
  return $request("get", api.special, parameter);
}

// 根据专管人员id获取专管下面的群管
export function getGroup(id) {
  return $request("get", `${api.group}/${id}`, {});
}

// 新增渠道
export function addChannel(parameter = {}) {
  return $request("post", api.channelCRUD, parameter);
}

// 编辑渠道
export function editChannel(parameter = {}) {
  return $request("put", api.channelCRUD, parameter);
}

export function updateChannelCrop(parameter = {}) {
  return $request("put", api.updateChannelCrop, parameter);
}

// 获取渠道详情
export function getChannelDetail(id) {
  return $request("get", `${api.channelCRUD}/${id}`, {});
}

/** 获取下级渠道所有作物 */
export function queryChildChannelCrop(parameter = {}) {
  return $request("get", api.queryChildChannelCrop, parameter);
}

/** 获取当前建筑物后面的所有下级渠道作物面积 */
export function queryChildChannelCropAfterBuilding(parameter = {}) {
  return $request("get", api.queryChildChannelCropAfterBuilding, parameter);
}

// 删除渠道
export function deleteChannel(id) {
  return $request("delete", `${api.channelCRUD}/${id}`, {});
}

/** 获取行政村列表 */
export function getRegion(parameter = {}) {
  return $request("get", api.regionInfo, parameter);
}

/** 根据id获取行政村详情 */
export function getRegionDetail(id) {
  return $request("get", `${api.regionCRUD}/${id}`, {});
}

export const getPersonByRegion = regionIds =>
    $request("get", `${api.getPersonByRegion}/${regionIds}`, {});

/** 新增行政村 */
export function addRegion(parameter = {}) {
  return $request("post", api.regionCRUD, parameter);
}

/** 编辑行政村 */
export function editRegion(parameter = {}) {
  return $request("put", api.regionCRUD, parameter);
}

/** 删除行政村 */
export function deleteRegion(id) {
  return $request("delete", `${api.regionCRUD}/${id}`, {});
}

/** 区域、渠道关联中间表操作 */
// 根据区域ID，查询区域关联渠道信息
export const regionChannelDetail = id =>
    $request("get", `${api.regionChannelById}/${id}`, {});
// 新增、编辑区域关联渠道信息
export const regionChannelAddAndEdit = parameter =>
    $request("put", api.regionChannelCRUD, parameter);
// 查询最下级村庄列表
export const getVillage = parameter =>
    $request("get", api.getVillage, parameter);

// 渠道操作日志
export const channelLog = parameter =>
    $request("get", api.channelLog, parameter);
export const channelLogDetail = id =>
    $request("get", `${api.channelLogDetail}/${id}`, {});
// 泵站操作日志
export const pumpLog = parameter => $request("get", api.pumpLog, parameter);
export const pumpLogDetail = id =>
    $request("get", `${api.pumpLogDetail}/${id}`, {});
// 闸站操作日志
export const gateLog = parameter => $request("get", api.gateLog, parameter);
export const gateLogDetail = id =>
    $request("get", `${api.gateLogDetail}/${id}`, {});
// 测站操作日志
export const stationLog = parameter =>
    $request("get", api.stationLog, parameter);
export const stationLogDetail = id =>
    $request("get", `${api.stationLogDetail}/${id}`, {});
// 管理单位操作日志
export const managementLog = parameter =>
    $request("get", api.managementLog, parameter);
export const managementLogDetail = id =>
    $request("get", `${api.managementLogDetail}/${id}`, {});

/** 行政区划操作日志 */
export function regionLog(parameter = {}) {
  return $request("get", api.regionLog, parameter);
}

// 通用操作日志
export function operationRecordLogList(parameter = {}) {
  return $request("get", api.operationRecordLogList, parameter);
}

// 水库操作日志表 水库日志特殊是因为水库信息存了两张表
export function operationRecordResLogList(parameter = {}) {
  return $request("get", api.operationRecordResLogList, parameter);
}

export function regionLogDetail(id) {
  return $request("get", `${api.regionLogDetail}/${id}`, {});
}

/** 获取灌区人员列表 */
export function getPersonnel(parameter = {}) {
  return $request("get", api.personnelInfo, parameter);
}

/** 根据id获取人员详情 */
export function getPersonnelDetail(id) {
  return $request("get", `${api.personnelCRUD}/${id}`, {});
}

export const getPersonInfoByZG = id =>
    $request("get", `${api.getPersonInfoByZG}/${id}`, {});
export const getPersonInfoByQG = id =>
    $request("get", `${api.getPersonInfoByQG}/${id}`, {});

/** 管理单位 */
export const getManagementUnit = parameter =>
    $request("get", api.getManagementUnit, parameter);
export const queryManagementList = parameter =>
    $request("get", api.queryManagementList, parameter);
export const queryManagementAll = parameter =>
    $request("get", api.queryManagementAll, parameter);
export const getManagementUnitDetail = parameter =>
    $request("get", api.getManagementUnitDetail, parameter);
export const addManagementUnit = parameter =>
    $request("post", api.addManagementUnit, parameter);
export const editManagementUnit = parameter =>
    $request("put", api.editManagementUnit, parameter);
export const deleteManagementUnit = parameter =>
    $request("delete", api.deleteManagementUnit, parameter);
export const getManagementUnitSpecialUsers = parameter =>
    $request("get", api.getManagementUnitSpecialPersonInfoAll, parameter);
export const getManagementUnitSpecialPerson = id =>
    $request("get", `${api.getManagementUnitSpecialPerson}/${id}`, {});
export const getManagementUnitGroupUsers = parameter =>
    $request("get", api.getManagementUnitGroupPersonInfoAll, parameter);

export const getChannelSpecialPersonInfo = id =>
    $request("get", `${api.channelSpecialPersonCRUD}/${id}`, {});
export const getChannelSpecialPersonInfoList = parameter =>
    $request("get", api.getChannelSpecialPersonInfoList, parameter);
export const channelSpecialPersonCRUD4Add = parameter =>
    $request("post", api.channelSpecialPersonCRUD, parameter);
export const channelSpecialPersonCRUD4Edit = parameter =>
    $request("put", api.channelSpecialPersonCRUD, parameter);
export const channelSpecialPersonCRUD4Delete = id =>
    $request("delete", `${api.channelSpecialPersonCRUD}/${id}`, {});

export const getChannelGroupPersonInfoList = parameter =>
    $request("get", api.getChannelGroupPersonInfoList, parameter);
export const getChannelSpecialList = parameter =>
    $request("get", api.getChannelSpecialList, parameter);
export const getChannelSpecialPage = parameter =>
    $request("get", api.getChannelSpecialPage, parameter);
export const getChannelGroupPersonInfo = id =>
    $request("get", `${api.channelGroupPersonCRUD}/${id}`, {});
export const channelGroupPersonCRUD4Add = parameter =>
    $request("post", api.channelGroupPersonCRUD, parameter);
export const channelGroupPersonCRUD4Edit = parameter =>
    $request("put", api.channelGroupPersonCRUD, parameter);
export const channelGroupPersonCRUD4Delete = id =>
    $request("delete", `${api.channelGroupPersonCRUD}/${id}`, {});

// 泵站
export const findBengzhanPage = parameter =>
    $request("get", api.findBengzhanPage, parameter);
export const selectBzTree = parameter =>
    $request("get", api.selectBzTree, parameter);
export const bzDownload = parameter =>
    $request("get", api.bzDownload, parameter);
export const selectBengzhanById = parameter =>
    $request("get", api.selectBengzhanById, parameter);
export const addBengzhanInfo = parameter =>
    $request("post", api.addBengzhanInfo, parameter);
export const editBengzhanInfo = parameter =>
    $request("post", api.editBengzhanInfo, parameter);
export const deleteBengzhanByIds = parameter =>
    $request("delete", api.deleteBengzhanByIds, parameter);
export const addBengzhanBJInfo = parameter =>
    $request("post", api.addBengzhanBJInfo, parameter);
export const editBengzhanBJInfo = parameter =>
    $request("put", api.editBengzhanBJInfo, parameter);
export const findBengzhanBJPage = parameter =>
    $request("get", api.findBengzhanBJPage, parameter);
export const selectBengzhanBJById = parameter =>
    $request("get", api.selectBengzhanBJById, parameter);
export const deleteBengzhanBJByIds = parameter =>
    $request("delete", api.deleteBengzhanBJById, parameter);
export const bzRealtimeView = parameter =>
    $request("get", api.bzRealtimeView, parameter);
export const bzMonitor = parameter => $request("get", api.bzMonitor, parameter);
export const bzSwitcher = parameter =>
    $request("post", api.bzSwitcher, parameter);
export const bzbjSwitcher = parameter =>
    $request("post", api.bzbjSwitcher, parameter);
export const findAllBzList = parameter =>
    $request("get", api.findAllBzList, parameter);
export const addPumpSystem = parameter =>
    $request("post", api.addPumpSystem, parameter);
export const editPumpSystem = parameter =>
    $request("put", api.editPumpSystem, parameter);
export const getPumpSystemDetail = parameter =>
    $request("get", api.getPumpSystemDetail, parameter);
export const getAllPump = parameter =>
    $request("get", api.getAllPump, parameter);

// 庙前一级站 实时监测页面
export const getMQYJZRealData = parameter =>
    $request("get", api.MQYJZRealData, parameter);
// 谢村二级站 实时监测页面
export const getXCEJZRealData = parameter =>
    $request("get", api.XCEJZRealData, parameter);
// 南干二级站 实时监测页面
export const getNGEJZRealData = parameter =>
    $request("get", api.NGEJZRealData, parameter);
// 北干三级站 实时监测页面
export const getBGSJZRealData = parameter =>
    $request("get", api.BGSJZRealData, parameter);
// 中干三级站 实时监测页面
export const getZGSJZRealData = parameter =>
    $request("get", api.ZGSJZRealData, parameter);

// 谢村二级站 单个历史监测记录
export const getXCEJZHistoryData = id =>
    $request("get", `${api.XCEJZHistoryData}/${id}`, {});

// 谢村二级站 历史监测记录列表
export const getXCEJZHistoryDataList = parameter =>
    $request("get", api.XCEJZHistoryDataList, parameter);
// 庙前一级站 历史监测记录列表
export const getMQYJZHistoryDataList = parameter =>
    $request("get", api.MQYJZHistoryDataList, parameter);
// 南干二级站 历史监测记录列表
export const getNGEJZHistoryDataList = parameter =>
    $request("get", api.NGEJZHistoryDataList, parameter);
// 北干三级站 历史监测记录列表
export const getBGSJZHistoryDataList = parameter =>
    $request("get", api.BGSJZHistoryDataList, parameter);
// 中干三级站 历史监测记录列表
export const getZGSJZHistoryDataList = parameter =>
    $request("get", api.ZGSJZHistoryDataList, parameter);

// 工程管理
export const sbwxAddBzSbxxInfo = parameter =>
    $request("post", api.sbwxAddBzSbxxInfo, parameter);
export const sbwxQueryById = parameter =>
    $request("get", api.sbwxQueryById, parameter);
// export const sbwxQueryByBzId = parameter => $request("get", api.sbwxQueryByBzId, parameter)
export const sbwxEditBzSbxxInfo = parameter =>
    $request("put", api.sbwxEditBzSbxxInfo, parameter);
export const sbwxSelectBzSbxxInfo = parameter =>
    $request("get", api.sbwxSelectBzSbxxInfo, parameter);
export const sbwxDeleteBzSbxxInfo = parameter =>
    $request("delete", api.sbwxDeleteBzSbxxInfo, parameter);

// 工况查询
export const bzgkList = parameter => $request("get", api.bzgkList, parameter);
export const bzgkBootSituation = parameter =>
    $request("get", api.bzgkBootSituation, parameter);
export const bootDayReport = parameter =>
    $request("get", api.bootDayReport, parameter);

// 泵站操作日志
export const bzLogList = parameter => $request("get", api.bzLogList, parameter);
export const bzLogExport = parameter =>
    $request("get", api.bzLogExport, parameter);
export const bzLogExportURL = api.bzLogExport;

// 泵站监测 -- 泵站电表
export const bzElectricityMeterPage = parameter =>
    $request("get", api.bzElectricityMeter, parameter);
// 泵站监测 -- 水源站
export const bzShipRealDataPage = parameter =>
    $request("get", api.bzShipRealData, parameter);

// 闸站实时数据
export const zzRealtimeData4Map = parameter =>
    $request("get", api.zzRealtimeData4Map, parameter);
// 查询某个闸站下的闸门列表
export const findZzSluicePage = parameter =>
    $request("get", api.zzSluicePage, parameter);

/** 新增人员 */
export function addPersonnel(parameter = {}) {
  return $request("post", api.personnelCRUD, parameter);
}

/** 编辑人员 */
export function editPersonnel(parameter = {}) {
  return $request("put", api.personnelCRUD, parameter);
}

/** 删除人员 */
export function deletePersonnel(id) {
  return $request("delete", `${api.personnelCRUD}/${id}`, {});
}

/** 获取计划用水设置列表 */
export function getWaterSetting(parameter = {}) {
  return $request("get", api.waterSetting, parameter);
}

// /** 根据id获计划用水设置详情 */
// export function getWaterSettingDetail(id) {
//     return $request('get', `${api.waterSettingCRUD}/${id}`, {})
// }
// 计划水量树
export const getPlanWaterTree = parameter =>
    $request("get", api.getPlanWaterTree, parameter);
// 试算计划水量
export const calcPlanWater = parameter =>
    $request("get", api.calcPlanWater, parameter);
// 设置计划水量
export const editPlanWater = parameter =>
    $request("post", api.editPlanWater, parameter);
// 批量设置计划水量
export const batchEditPlanWater = parameter =>
    $request("post", api.batchEditPlanWater, parameter, { timeout: 0 });
// 获取计划水量设置记录
export const getSetRecord = parameter =>
    $request("get", api.getSetRecord, parameter);

/** 根据id获计划用水设置详情 */
export const getWaterSettingDetail = id =>
    $request("get", `${api.waterPlanCRUD}/${id}`, {});

/** 追加计划水量 */
export const addWaterPlan = parameter =>
    $request("post", api.waterPlanCRUD, parameter);

/** 删除计划水量 */
export const deleteWaterPlan = id =>
    $request("delete", `${api.waterPlanCRUD}/${id}`, {});

/** 停止灌溉 */
export const stopIrrigation = parameter =>
    $request("put", api.stopIrrigation, parameter);

/** 计划水量设置记录 */
export const getWaterSettingRecord = parameter =>
    $request("get", api.waterSettingRecord, parameter);

/** 根据id删除计划用水设置 */
export function deleteWaterSetting(id) {
  return $request("delete", `${api.waterSettingCRUD}/${id}`, {});
}

/** 新增计划用水设置 */
export function addWaterSetting(parameter = {}) {
  return $request("post", api.waterSettingCRUD, parameter);
}

/** 编辑计划用水设置 */
export function editWaterSetting(parameter = {}) {
  return $request("put", api.waterSettingCRUD, parameter);
}

// 水费查询
export const getWaterFeeRateTree = parameter =>
    $request("get", api.waterFeeRateTree, parameter);
// waterFeeTree: '/feeManage/channelWaterRateManagementNewest/list',
// 水费查询历史列表
export const getWaterFeeHistoryList = parameter =>
    $request("get", api.waterFeeHistoryList, parameter);
// 水费管理历史记录-日水费
export const queryWaterFeeHistoryList = parameter =>
    $request("get", api.getHistoryList, parameter);
// waterFeeHistoryList: '/feeManage/channelWaterRateManagement/historyList',
// 水费提示
export const getWaterFeeTipsTree = parameter =>
    $request("get", api.waterFeeTipsTree, parameter);
// waterFeeTipsTree: '/feeManage/channelWaterRateManagementNewest/tipsList',
// 水费提示历史列表
export const getWaterFeeTipsHistoryList = parameter =>
    $request("get", api.waterFeeTipsHistoryList, parameter);
// 机构年度水费查询列表
export const queryWaterCharge = parameter =>
    $request("get", api.getYearWaterCharge, parameter);
// 机构年度缴费记录
export const queryPaymentRecord = parameter =>
    $request("get", api.getPaymentRecord, parameter);
// 机构年度水量记录
export const queryMentYearWater = parameter =>
    $request("get", api.getYearWater, parameter);
// 机构站点水量
export const querySiteYearWater = parameter =>
    $request("get", api.getSiteYearWater, parameter);

// waterFeeTipsHistoryList: '/feeManage/channelWaterRateManagement/historySchedulingList',

/** 水费查询 */
// export function getWaterFee(parameter = {}) {
//     return $request('get', api.waterFee, parameter)
// }

/** 水费查询树结构 */
export const getWaterFeeTree = parameter =>
    $request("get", api.waterFeeTree, parameter);

/** 日水费记录 */
export const getWaterFeeRecord = parameter =>
    $request("get", api.waterFeeReord, parameter);

/** 缴费 */
export function addWaterFee(parameter = {}) {
  return $request("post", api.waterFeeCRUD, parameter);
}

/** 水费历史记录 */
export function getPaymentRecord(parameter = {}) {
  return $request("get", api.paymentRecord, parameter);
}

/** 灌溉水价 */
export const getWaterPrice = parameter =>
    $request("get", api.waterPrice, parameter);
export const getWaterPriceDetail = parameter =>
    $request("get", api.waterPriceDetail, parameter);
export const addWaterPrice = parameter =>
    $request("post", api.waterPriceAdd, parameter);
export const editWaterPrice = parameter =>
    $request("put", api.waterPriceEdit, parameter);
export const deleteWaterPrice = parameter =>
    $request("delete", api.waterPriceDelete, parameter);
export const getCurrenPrice = parameter =>
    $request("get", api.waterPriceCurrent, parameter);
export const getAllWaterPrice = parameter =>
    $request("get", api.waterPriceAll, parameter);
export const waterPriceUpdateStatus = parameter =>
    $request("put", api.waterPriceUpdateStatus, parameter);

/** 获取水量平衡 */
export function getWaterBalance(parameter = {}) {
  return $request("get", api.waterBalance, parameter);
}

/** 水量平衡树结构 */
export const getWaterBalanceTree = parameter =>
    $request("get", api.waterBalanceTree, parameter);
// 四大水量平衡区查询
export const waterSectionBalance = parameter =>
    $request("get", api.waterSectionBalance, parameter);
// 平衡区过水断面配置
export const channelSectionPage = parameter =>
    $request("get", api.channelSectionPage, parameter); // 分页查询

export const selectChannelWaterSectionTree = parameter =>
    $request("get", api.selectChannelWaterSectionTree, parameter); // 分页查询
export const addChannelSection = parameter =>
    $request("post", api.channelSectionCRUD, parameter); //新增
export const editChannelSection = parameter =>
    $request("put", api.channelSectionCRUD, parameter); //编辑
export const getChannelSectionDetail = id =>
    $request("get", `${api.channelSectionCRUD}/${id}`, {}); //详情
export const deleteChannelSection = id =>
    $request("delete", `${api.channelSectionCRUD}/${id}`, {}); //删除

/** 获取时段数据(chart使用，一次全部查出来) */
export function getChartData(parameter = {}) {
  return $request("get", api.chartData, parameter);
}

/** 获取时段数据 */
export function getTimeData(parameter = {}) {
  return $request("get", api.timeData, parameter);
}

// 流量数据
export function getlowData(parameter = {}) {
  return $request("get", api.flowData, parameter);
}

export function getManualFlowData(parameter = {}) {
  return $request("get", api.getManualFlowData, parameter);
}

export function getManualFlowDataChart(parameter = {}) {
  return $request("get", api.getManualFlowDataChart, parameter);
}

export function getPumpFlowData(parameter = {}) {
  return $request("get", api.getPumpFlowData, parameter);
}

export function getPumpFlowDataChart(parameter = {}) {
  return $request("get", api.getPumpFlowDataChart, parameter);
}

export function getGateFlowData(parameter = {}) {
  return $request("get", api.getGateFlowData, parameter);
}

export function getGateFlowDataChart(parameter = {}) {
  return $request("get", api.getGateFlowDataChart, parameter);
}

/** 获取用水管理情况 */
export function getWaterManage(parameter = {}) {
  return $request("get", api.waterManage, parameter);
}

/** 渠道用水管理列表 */
export const getChannelWaterManagementNewest = parameter =>
    $request("get", api.channelWaterManagementNewest, parameter);
/** 渠道用水管理历史列表 */
export const getChannelWaterManagementHistoryList = parameter =>
    $request("get", api.channelWaterManagementHistoryList, parameter);
// 渠道用水管理调度提示列表
export const getChannelWaterSchedulingList = parameter =>
    $request("get", api.channelWaterSchedulingList, parameter);
// 渠道用水管理调度提示历史列表
export const getChannelWaterHistorySchedulingList = parameter =>
    $request("get", api.channelWaterHistorySchedulingList, parameter);

/** 获取用水管理情况历史记录 */
export function getWaterManageHistory(parameter = {}) {
  return $request("get", api.waterManageHistory, parameter);
}

/** 获取调度提示 */
export function getDispatchTips(parameter = {}) {
  return $request("get", api.dispatchTips, parameter);
}

export const getDispatchTipsHistory = parameter =>
    $request("get", api.dispatchTipsHistory, parameter);

/** 获取水费提示 */
export function getCostTips(parameter = {}) {
  return $request("get", api.costTips, parameter);
}

export const getCostTipsHistory = parameter =>
    $request("get", api.costTipsHistory, parameter);

/** 获取站点当前数据 */
export function getStationCurrentData(parameter = {}) {
  return $request("get", api.stationCurrentData, parameter);
}

// 获取关联渠道
export function getRelationChannel(parameter = {}) {
  return $request("get", api.relationChannel, parameter);
}

// 获取降雨量
export function getRainfall(parameter) {
  return $request("get", `${api.rainfall}`, parameter);
}

// 维护降雨量
export function addOrModifyRainfall(parameter) {
  return $request("post", `${api.rainfallCRUD}`, parameter);
}

// 获取蒸发量
export function getStestatr(parameter) {
  return $request("get", `${api.stestatr}`, parameter);
}

// 维护蒸发量
export function addOrModifyStestatr(parameter) {
  return $request("post", `${api.stestatrCRUD}`, parameter);
}

// 获取墒情
export function getStsoilr(parameter) {
  return $request("get", `${api.stsoilr}`, parameter);
}

// 维护墒情
export function addOrModifyStsoilr(parameter) {
  return $request("post", `${api.stsoilrCRUD}`, parameter);
}

export const getCurrentIrr = parameter =>
    $request("get", api.getCurrentIrr, parameter);
export const getCurrentOrLatestIrr = parameter =>
    $request("get", api.getCurrentOrLatestIrr, parameter);
export const getIrrPage = parameter =>
    $request("get", api.getIrrPage, parameter);
export const getIrrSelect = parameter =>
    $request("get", api.getIrrSelect, parameter);
export const getWaterDemandLog = parameter =>
    $request("get", api.getWaterDemandLog, parameter);
export const passOrReject = parameter =>
    $request("put", api.passOrReject, parameter);
export const getIrrAvailable = parameter =>
    $request("get", api.getIrrAvailable, parameter);
export const getIrrDetail = id => $request("get", `${api.irrCRUD}/${id}`, {});
export const addIrr = parameter => $request("post", api.irrCRUD, parameter);
export const editIrr = parameter => $request("put", api.irrCRUD, parameter);
export const deleteIrr = id => $request("delete", `${api.irrCRUD}/${id}`, {});

export const getRainMonthChart = parameter =>
    $request("get", api.getRainMonthChart, parameter);

export const getCheckItem = parameter =>
    $request("get", api.getCheckItem, parameter);
export const getCheckItemByType = parameter =>
    $request("get", api.getCheckItemByType, parameter);
export const deleteCheckItem = id =>
    $request("delete", `${api.checkItemCRUD}/${id}`, {});
export const inspectionPass = parameter =>
    $request("post", api.inspectionPass, parameter);
export const getUserByMainId = parameter =>
    $request("post", api.getUserByMainId, parameter);
export const editCheckItem = parameter =>
    $request("put", api.checkItemCRUD, parameter);
export const addCheckItem = parameter =>
    $request("post", api.checkItemCRUD, parameter);
export const getCheckDetail = id =>
    $request("get", `${api.checkItemCRUD}/${id}`, {});

export const getInspectionRecord = parameter =>
    $request("get", api.getInspectionRecord, parameter);

export const deleteInspectionRecord = id =>
    $request("delete", `${api.inspectionCRUD}/${id}`, {});

// 测站
export const measureListPage = parameter =>
    $request("get", api.measureListPage, parameter);
export const measureGetInfo = id =>
    $request("get", `${api.measureInfoCRUD}/${id}`, {});

export const measureGetInfoByStcd = parameter =>
    $request("get", api.measureGetInfoByStcd, parameter);
export const measureAddInfo = parameter =>
    $request("post", api.measureInfoCRUD, parameter);
export const measureEditInfo = parameter =>
    $request("put", api.measureInfoCRUD, parameter);
export const measureDelInfo = id =>
    $request("delete", `${api.measureInfoCRUD}/${id}`, {});
export const getContrastDetail = id =>
    $request("get", `${api.measureInfoCRUD}/${id}`, {});

export const getStationFlowRecord = parameter =>
    $request("get", api.getStationFlowRecord, parameter);
export const setStationFlow = parameter =>
    $request("post", api.setStationFlow, parameter);
export const stationFlowStopWater = parameter =>
    $request("put", api.stationFlowStopWater, parameter);
export const checkSetStationFlowDataValid = parameter =>
    $request("get", api.checkSetStationFlowDataValid, parameter);
export const queryChannelTreeStationMeasured = parameter =>
    $request("get", api.queryChannelTreeStationMeasured, parameter);

// 查询泵站手录数据历史记录
export const gatePumpDataHistoryPage = parameter =>
    $request("get", api.gatePumpDataHistoryPage, parameter);
// 查询闸站手录数据历史记录
export const gateGateDataHistoryPage = parameter =>
    $request("get", api.gateGateDataHistoryPage, parameter);
// 查询测站手录数据历史记录
export const gateStationDataHistoryPage = parameter =>
    $request("get", api.gateStationDataHistoryPage, parameter);

// 工程巡检-工程运行情况巡检
export const addInspection = parameter =>
    $request("post", api.inspectionCRUD, parameter);
export const editInspection = parameter =>
    $request("put", api.inspectionCRUD, parameter);
export const deleteInspection = id =>
    $request("delete", `${api.inspectionCRUD}/${id}`, {});
export const getInspectionDetail = id =>
    $request("get", `${api.inspectionCRUD}/${id}`, {});
export const getInspectionCount = parameter =>
    $request("get", api.getInspectionCount, parameter);
// export const getInspectionChart = buildingType => $request('get', `${api.getInspectionChart}/${buildingType}`, {})
export const getInspectionChart = parameter =>
    $request("get", api.getInspectionChart, parameter);

// 工程巡检-人员值守情况巡检
export const getOnDutyPage = parameter =>
    $request("get", api.getAllOnDuty, parameter); // 列表
export const getOnDutyMonthPage = parameter =>
    $request("get", api.getAllOnDutyMonth, parameter); // 月报
export const addOnDuty = parameter =>
    $request("post", api.onDutyCRUD, parameter); // 新增
export const editOnDuty = parameter =>
    $request("put", api.onDutyCRUD, parameter); // 编辑
export const deleteOnDuty = id =>
    $request("delete", `${api.onDutyCRUD}/${id}`, {}); // 删除
export const getOnDutyDetail = id =>
    $request("get", `${api.onDutyCRUD}/${id}`, {}); // 详情

// 工程巡检-运行安全巡检
export const getSafetPage = parameter =>
    $request("get", api.getAllSafet, parameter); // 列表
export const addSafet = parameter => $request("post", api.safetCRUD, parameter); // 新增
export const editSafet = parameter => $request("put", api.safetCRUD, parameter); // 编辑
export const deleteSafet = id =>
    $request("delete", `${api.safetCRUD}/${id}`, {}); // 删除
export const getSafetDetail = id =>
    $request("get", `${api.safetCRUD}/${id}`, {}); // 详情
export const getSafetChart = parameter =>
    $request("get", api.getSafetChart, parameter); // 图表数据查询
export const getSafetCount = parameter =>
    $request("get", api.getSafetCount, parameter); // 安全巡检数量
// 工程巡检-运行安全巡检-检查项配置
export const getSafetItemPage = parameter =>
    $request("get", api.getAllSafetItem, parameter); // 列表
export const addSafetItem = parameter =>
    $request("post", api.safetItemCRUD, parameter); // 新增
export const editSafetItem = parameter =>
    $request("put", api.safetItemCRUD, parameter); // 编辑
export const deleteSafetItem = id =>
    $request("delete", `${api.safetItemCRUD}/${id}`, {}); // 删除
export const getSafetItemDetail = id =>
    $request("get", `${api.safetItemCRUD}/${id}`, {}); // 详情

export const findWaterSourcePath = parameter =>
    $request("get", api.findWaterSourcePath, parameter);

export const initialAllNodes = parameter =>
    $request("get", api.initialAllNodes, parameter);
/** 用于替代上面的initialAllNodes方法 **/
export const queryChannelWaterBuilding = parameter =>
    $request("get", api.queryChannelWaterBuilding, parameter);

export const findChannelLink = parameter =>
    $request("get", api.channelLink, parameter);
export const getChannelAndNodes = parameter =>
    $request("get", api.getChannelAndNodes, parameter);
export const queryChannelBalance = parameter =>
    $request("get", api.queryChannelBalance, parameter);
export const queryChannelBalanceByChannelNumber = parameter =>
    $request("get", api.queryChannelBalanceByChannelNumber, parameter);
export const queryNodeDetails = parameter =>
    $request("get", api.queryNodeDetails, parameter);
export const queryNodeBalance = parameter =>
    $request("get", api.queryNodeBalance, parameter);
export const queryCloseLoop = parameter =>
    $request("get", api.queryCloseLoop, parameter);
export const queryNodeBuildingId = parameter =>
    $request("get", api.queryNodeBuildingId, parameter);
export const queryUnboundSite = parameter =>
    $request("get", api.queryUnboundSite, parameter);
export const nodeCRUD_C = parameter =>
    $request("post", api.nodeCRUD, parameter);
export const nodeCRUD_U = parameter => $request("put", api.nodeCRUD, parameter);
export const nodeCRUD_D = nodeId =>
    $request("delete", `${api.nodeCRUD}/${nodeId}`, {});
export const selectChannelAssociatedSite = parameter =>
    $request("get", api.selectChannelAssociatedSite, parameter);
export const getAllInspectionRecords = parameter =>
    $request("get", api.getAllInspectionRecords, parameter);

export const flowChannelStationRealData = parameter =>
    $request("get", api.flowChannelStationRealData, parameter);
// 渠道树分水口实时数据(分水口可能为闸站、泵站、测站)
export const flowChannelCrossBorderRealData = parameter =>
    $request("get", api.flowChannelCrossBorderRealData, parameter);
export const getChannelSiteStatusRealData = parameter =>
    $request("get", api.channelSiteStatusRealData, parameter);
export const getAllFlowRealData = parameter =>
    $request("get", api.getAllFlowRealData, parameter);
export const getChannelRealData = parameter =>
    $request("get", api.channelRealData, parameter);
export const getStationRealData = parameter =>
    $request("get", api.stationRealData, parameter);

//按亩收费
export const addAcreageFee = parameter =>
    $request("post", api.acreageFee, parameter);
export const getAcreageFeeData = parameter =>
    $request("get", api.acreageFee, parameter);

/**
 * 用水管理-用水参数设置-作物种类相关api
 */
//分页查询
export const getCropWaterQuotaPage = parameter =>
    $request("get", api.cropWaterQuotaPage, parameter);
//新增
export const addCropWaterQuota = parameter =>
    $request("post", api.cropWaterQuotaCURD, parameter);
//编辑
export const editCropWaterQuota = parameter =>
    $request("put", api.cropWaterQuotaCURD, parameter);
//详情
export const getCropWaterQuotaDetail = id =>
    $request("get", `${api.cropWaterQuotaCURD}/${id}`, {});
//删除
export const deleteCropWaterQuota = id =>
    $request("delete", `${api.cropWaterQuotaCURD}/${id}`, {});

export function checkCropCodeUnique(parameter = {}) {
  return $request("get", api.checkCropCodeUnique, parameter);
}

/**
 * 用水管理-用水参数设置-渠道类型水利用系数api
 */
//分页查询
export const getChannelCoefficientPage = parameter =>
    $request("get", api.channelCoefficientPage, parameter);
//历史记录
export const getChannelCoefficientRecord = parameter =>
    $request("get", api.getChannelCoefficientRecord, parameter);
//树列表
export const getChannelCoefficientTree = parameter =>
    $request("get", api.getChannelCoefficientTree, parameter);
//新增
export const addChannelCoefficient = parameter =>
    $request("post", api.channelCoefficientCURD, parameter);
//编辑
export const editChannelCoefficient = parameter =>
    $request("put", api.channelCoefficientCURD, parameter);
//详情
export const getChannelCoefficientDetail = id =>
    $request("get", `${api.channelCoefficientCURD}/${id}`, {});
//删除
export const deleteChannelCoefficient = id =>
    $request("delete", `${api.channelCoefficientCURD}/${id}`, {});

// 用水管理-获取各渠道用水管理列表-本级及下级渠道
export const getChannelWaterManagement = parameter =>
    $request("get", api.getChannelWaterManagement, parameter);

// 防汛预警
export const floodWarningInfoAll = parameter =>
    $request("get", api.floodWarningInfoAll, parameter);
export const floodWarningInfoPage = parameter =>
    $request("get", api.floodWarningInfoPage, parameter);
export const floodWarningSiteInfoPage = parameter =>
    $request("get", api.floodWarningSiteInfoPage, parameter);
export const fooldStationWarnStationAll = parameter =>
    $request("get", api.fooldStationWarnStationAll, parameter);

// 防汛预警记录
// 查询告警列表
export const floodWarningInfoList = parameter =>
    $request("get", api.floodWarningInfoList, parameter);
// 分页查询告警列表
export const floodWarningInfoPageList = parameter =>
    $request("get", api.floodWarningInfoPageList, parameter);

// 查询预警站点
export const selectFloodStationFromMeasureStation = parameter =>
    $request("get", api.selectFloodStationFromMeasureStation, parameter);

//删除预警站点
export function deleteFooldStationWarn(ids) {
  return $request("delete", `${api.fooldStationWarnStationCRUD}/${ids}`, {});
}

export const floodWarningSiteInfoAll = parameter =>
    $request("get", api.floodWarningSiteInfoAll, parameter);
export const floodSluiceAll = parameter =>
    $request("get", api.floodSluiceAll, parameter);
export const floodDepotAll = parameter =>
    $request("get", api.floodDepotAll, parameter);
export const floodDepotPage = parameter =>
    $request("get", api.floodDepotPage, parameter);
export const floodDepotGet = id =>
    $request("get", `${api.floodDepotCRUD}/${id}`, {});
export const floodDepotAdd = parameter =>
    $request("post", api.floodDepotCRUD, parameter);
export const floodDepotEdit = parameter =>
    $request("put", `${api.floodDepotCRUD}`, parameter);
export const floodDepotDelete = id =>
    $request("delete", `${api.floodDepotCRUD}/${id}`, {});

// 防汛物资item管理
export const floodMaterialItemAll = parameter =>
    $request("get", api.floodMaterialItemAll, parameter);
export const floodMaterialItemEdit = parameter =>
    $request("put", api.floodMaterialItemEdit, parameter);

// 入库记录
export const floodMaterialEntryRecordPage = parameter =>
    $request("get", api.floodMaterialEntryRecordPage, parameter);
export const floodMaterialEntryAdd = parameter =>
    $request("post", api.floodMaterialEntryCRUD, parameter);
export const floodMaterialEntryEdit = parameter =>
    $request("put", `${api.floodMaterialEntryCRUD}`, parameter);
export const floodMaterialEntryDelete = id =>
    $request("delete", `${api.floodMaterialEntryCRUD}/${id}`, {});
// 出库记录
export const floodMaterialOutgoingRecordPage = parameter =>
    $request("get", api.floodMaterialOutgoingRecordPage, parameter);
export const floodMaterialOutgoingAdd = parameter =>
    $request("post", api.floodMaterialOutgoingCRUD, parameter);
export const floodMaterialOutgoingEdit = parameter =>
    $request("put", `${api.floodMaterialOutgoingCRUD}`, parameter);
export const floodMaterialOutgoingDelete = id =>
    $request("delete", `${api.floodMaterialOutgoingCRUD}/${id}`, {});

// 库存信息
export const floodInventoryInfo = parameter =>
    $request("get", api.floodInventoryInfo, parameter);

export function getFloodWarningInfo(id) {
  return $request("get", `${api.floodWarningInfoCRUD}/${id}`, {});
}

export function addFloodWarningInfo(parameter = {}) {
  return $request("post", api.floodWarningInfoCRUD, parameter);
}

export function modifyFloodWarningInfo(parameter = {}) {
  return $request("put", api.floodWarningInfoCRUD, parameter);
}

export function deleteFloodWarningInfo(ids) {
  return $request("delete", `${api.floodWarningInfoCRUD}/${ids}`, {});
}

export function getFloodWarningSiteInfo(id) {
  return $request("get", `${api.floodWarningSiteInfoCRUD}/${id}`, {});
}

export function addFloodWarningSiteInfo(parameter = {}) {
  return $request("post", api.floodWarningSiteInfoCRUD, parameter);
}

export function modifyFloodWarningSiteInfo(parameter = {}) {
  return $request("put", api.floodWarningSiteInfoCRUD, parameter);
}

export function deleteFloodWarningSiteInfo(ids) {
  return $request("delete", `${api.floodWarningSiteInfoCRUD}/${ids}`, {});
}

//水位流量
export const waterFlowList = parameter =>
    $request("get", api.waterFlowList, parameter);
export const waterFlowPage = parameter =>
    $request("get", api.waterFlowPage, parameter);
export const waterFlowGetInfo = id =>
    $request("get", `${api.waterFlow}/${id}`, {});
export const waterFlowAddInfo = parameter =>
    $request("post", api.waterFlow, parameter);
export const waterFlowEditInfo = parameter =>
    $request("put", api.waterFlow, parameter);
export const waterFlowDelInfo = id =>
    $request("delete", `${api.waterFlow}/${id}`, {});

// 平衡区概化图
export const queryChannelInfo4ReducedGraph = id =>
    $request("get", `${api.queryChannelInfo4ReducedGraph}/${id}`, {});
export const getMonitorInfoByCode = id =>
    $request("get", `${api.getMonitorInfoByCode}/${id}`, {});
export const getGateInfoByGateCode = id =>
    $request("get", `${api.getGateInfoByGateCode}/${id}`, {});
export const getPumpInfoByBzCode = id =>
    $request("get", `${api.getPumpInfoByBzCode}/${id}`, {});
export const getChannelWaterRateManagementNewest = parameter =>
    $request("get", api.getChannelWaterRateManagementNewest, parameter);

// 用户关注站点
export const getUserFocusSite = parameter =>
    $request("get", api.userFocusSite, parameter);
export const postUserFocusSite = parameter =>
    $request("post", api.userFocusSite, parameter);
export const putUserFocusSite = parameter =>
    $request("put", api.userFocusSite, parameter);

// 数据报表
// 村庄 日报表
// export const getDayReportPage = parameter => $request('get', api.dayReportPage, parameter)
export const getDayReportPage = parameter =>
    $request("get", api.getDayVillage, parameter);

// 村庄 月报表
// export const getMonthReportPage = parameter =>
//   $request("get", api.monthReportPage, parameter);
export const getMonthVillageReport = parameter =>
    $request("get", api.getMonthVillageReport, parameter);

// 村庄 年报表
// export const getYearReportPage = parameter =>
//     $request("get", api.yearReportPage, parameter);
export const getYearVillageReport = parameter =>
    $request("get", api.getYearVillageReport, parameter);

// 协会 日报表
export const getDayAssociationePage = parameter =>
    $request("get", api.getDayAssociatione, parameter);
export const getAssociationeDayReport = parameter =>
    $request("get", api.getAssociationeDayReport, parameter);
export const getAssociationeMonthReport = parameter =>
    $request("get", api.getAssociationeMonthReport, parameter);
export const getAssociationeYearReport = parameter =>
    $request("get", api.getAssociationeYearReport, parameter);
export const callAssociationeTask = parameter =>
    $request("get", api.callAssociationeTask, parameter);

//干渠日报表
export const getGanQuReport = parameter =>
    $request("get", api.getGanQuReport, parameter);
//支渠日报表
export const getZhiQuReport = parameter =>
    $request("get", api.getZhiQuReport, parameter);
//管理段支渠日报表
export const getGLDZhiQuReport = parameter =>
    $request("get", api.getGLDZhiQuReport, parameter);
//干渠月报表
export const getGanQuMonthReport = parameter =>
    $request("get", api.getGanQuMonthReport, parameter);
//支渠月报表
export const getZhiQuMonthReport = parameter =>
    $request("get", api.getZhiQuMonthReport, parameter);
export const getStatisticalReportPage = parameter =>
    $request("get", api.statisticalReportPage, parameter);

export function addStatisticalReport(parameter = {}) {
  return $request("post", api.statisticalReportCRUD, parameter);
}

//干渠日报表导出excel
export const expGanQuReport = api.expGanQuReport;
//支渠日报表导出
export const exportZhiQuReport = api.exportZhiQuReport;
//管理段日报表导出
export const exportGLDReport = api.exportGLDReport;
//干渠月报表导出
export const exportGanQuMounthReport = api.exportGanQuMounthReport;
//支渠月报表导出
export const exportZhiQuMonthReport = api.exportZhiQuMonthReport;

// 水价综改 -- 水权分配
// 树结构查询
export const getWaterRightsDistributionTree = parameter =>
    $request("get", api.waterRightsDistributionTree, parameter);
// 列表查询
export const getWaterRightsDistributionList = parameter =>
    $request("get", api.waterRightsDistributionPage, parameter);
// 新增
export const addWaterRightsDistribution = parameter =>
    $request("post", api.waterRightsDistributionCRUD, parameter);
// 编辑
export const editWaterRightsDistribution = parameter =>
    $request("put", api.waterRightsDistributionCRUD, parameter);
// 详情
export const getWaterRightsDistributionDetail = id =>
    $request("get", `${api.waterRightsDistributionCRUD}/${id}`, {});
// 删除
export const deleteWaterRightsDistribution = id =>
    $request("delete", `${api.waterRightsDistributionCRUD}/${id}`, {});
//水权分配计算
export const waterRightsCalc = parameter =>
    $request("get", api.waterRightsCalc, parameter);
//水权分配
export const batchEditWaterRights = parameter =>
    $request("post", api.batchEditWaterRights, parameter);

// 水价综改 -- 水权交易 -- 水权证管理(发放、取消发放)
export const certificateGrant = id =>
    $request("get", `${api.certificateGrant}/${id}`, {});
export const certificateGrantAll = parameter =>
    $request("post", api.certificateGrantAll, parameter);

// 水价综改 -- 水权交易 -- 申请记录
export const getApplyPage = parameter =>
    $request("get", api.applyPage, parameter);
// 水价综改 -- 水权交易 -- 申请记录操作：编辑、删除、详情
// 新增
export const addApply = parameter => $request("post", api.applyCRUD, parameter);
// 编辑
export const editApply = parameter => $request("put", api.applyCRUD, parameter);
// 删除
export const deleteApply = id =>
    $request("delete", `${api.applyCRUD}/${id}`, {});
// 详情
export const getApplyDetail = id =>
    $request("get", `${api.applyCRUD}/${id}`, {});

// 水价综改 -- 水权交易 -- 交易记录
export const getTradingPage = parameter =>
    $request("get", api.tradingPage, parameter);
// 新增
export const addTrading = parameter =>
    $request("post", api.tradingCRUD, parameter);
// 编辑
export const editTrading = parameter =>
    $request("put", api.tradingCRUD, parameter);
// 删除
export const deleteTrading = id =>
    $request("delete", `${api.tradingCRUD}/${id}`, {});
// 详情
export const getTradingDetail = id =>
    $request("get", `${api.tradingCRUD}/${id}`, {});

// 水价综改 -- 统计分析 -- 干渠片用水统计分析
export const trunkCanalWaterChart = parameter =>
    $request("get", api.getChart, parameter); // 图表数据接口
export const trunkCanalWaterTable = parameter =>
    $request("get", api.getTable, parameter); // 表格数据接口

// 水价综改 -- 统计分析 -- 协会用水总量分析
export const associationWaterTable = parameter =>
    $request("get", api.getAssociationTable, parameter); // 表格数据接口

// 水价综改 -- 制度管理
export const getWaterRightsSystemPage = parameter =>
    $request("get", api.getWaterRightsSystem, parameter); // 图表数据接口
// 新增
export const addWaterRightsSystem = parameter =>
    $request("post", api.waterRightsSystemCRUD, parameter);
// 编辑
export const editWaterRightsSystem = parameter =>
    $request("put", api.waterRightsSystemCRUD, parameter);
// 删除
export const deleteWaterRightsSystem = id =>
    $request("delete", `${api.waterRightsSystemCRUD}/${id}`, {});
// 详情
export const getWaterRightsSystemDetail = id =>
    $request("get", `${api.waterRightsSystemCRUD}/${id}`, {});

// 渠道与泵站示意图
export const getChannelFlowRealData = parameter =>
    $request("get", api.getChannelFlowRealData, parameter);

//视频点分页
export const getVideoInfoPage = parameter =>
    $request("get", api.videoInfoPage, parameter);
export const getVideoChannelTree = parameter =>
    $request("get", api.getVideoChannelTree, parameter);

export const getAllVideoInfoWithBuilding = parameter =>
    $request("get", api.getAllVideoInfoWithBuilding, parameter);
//视频点-详情
export const getVideoInfoDetail = id =>
    $request("get", `${api.videoInfoCURD}/${id}`, {});
//视频点-新增
export const addVideoInfo = parameter =>
    $request("post", api.videoInfoCURD, parameter);
//视频点-编辑
export const editVideoInfo = parameter =>
    $request("put", api.videoInfoCURD, parameter);
//视频点-删除
export const deleteVideoInfo = id =>
    $request("delete", `${api.videoInfoCURD}/${id}`, {});

//视频点通道分页
export const getVideoChannelPage = parameter =>
    $request("get", api.videoChannelPage, parameter);
//视频点通道-详情
export const getVideoChannelDetail = id =>
    $request("get", `${api.videoChannelCURD}/${id}`, {});
//视频点通道-新增
export const addVideoChannel = parameter =>
    $request("post", api.videoChannelCURD, parameter);
//视频点通道-编辑
export const editVideoChannel = parameter =>
    $request("put", api.videoChannelCURD, parameter);
//视频点通道-删除
export const deleteVideoChannel = id =>
    $request("delete", `${api.videoChannelCURD}/${id}`, {});

export const getAssociationRealData = parameter =>
    $request("get", api.associationRealData, parameter);

export const getAllVideoInfo = parameter =>
    $request("get", api.getAllVideoInfo, parameter);
export const getAllVideoInfoTree = parameter =>
    $request("get", api.getAllVideoInfoTree, parameter);

// 根据视频点id查询所有通道号
export const getVideoChannelByVideoId = parameter =>
    $request("get", api.getVideoChannelByVideoId, parameter);

export const getVideoStationChannelByBuildingInfo = parameter =>
    $request("get", api.getVideoStationChannelByBuildingInfo, parameter);

// 配水调度
// 需水上报
export const waterDemand = parameter =>
    $request("get", api.waterDemand, parameter);
// 需水申报列表查询
export const waterDemandReportList = parameter =>
    $request("get", api.getWaterDemandReportList, parameter);
// 机构站点列表查询
export const queryMentSiteList = parameter =>
    $request("get", api.getSiteList, parameter);
// 批量新增需水申报
export const waterDemandInsertList = parameter =>
    $request("post", api.insertList, parameter);
// 需水申报 - 用水过程线

//需水上报审核
export const waterDemandList = parameter =>
    $request("get", api.waterDemandList, parameter);
export const waterDemandCRUD4Retrieve = id =>
    $request("get", `${api.waterDemandCRUD}/${id}`, {});
export const waterDemandCRUD4Create = parameter =>
    $request("post", api.waterDemandCRUD, parameter);
export const waterDemandCRUD4Update = parameter =>
    $request("put", api.waterDemandCRUD, parameter);
export const waterDemandCRUD4Delete = id =>
    $request("delete", `${api.waterDemandCRUD}/${id}`, {});

// 需水申报  用水户、协会、管理机构需水申报
export const waterDemandDeclarationList = parameter =>
    $request("get", api.waterDemandDeclarationList, parameter);
// 需水申报新增
export const addWaterDemandDeclaration = parameter =>
    $request("post", api.waterDemandDeclarationCRUD, parameter);
// 需水申报编辑
export const editWaterDemandDeclaration = parameter =>
    $request("put", api.waterDemandDeclarationCRUD, parameter);
// 需水申报删除
export const deleteWaterDemandDeclaration = id =>
    $request("delete", `${api.waterDemandDeclarationCRUD}/${id}`, {});
// 需水申报详情
export const waterDemandDeclarationDetails = parameter =>
    $request("get", api.waterDemandDeclarationDetails, parameter);
export const waterDemandDeclarationDetailsNew = parameter =>
    $request("get", api.waterDemandDeclarationDetailsNew, parameter);
// 需水审批列表详情
export const waterDemandApprovalList = parameter =>
    $request("get", api.waterDemandApprovalList, parameter);

// 根据id获取需水审批详情
export function getWaterApprovalById(id) {
  return $request("get", `${api.waterApprovalCRUD}/${id}`, {});
}

// 需水审批列表详情
export const getIrrigationPlanWater = parameter =>
    $request("get", api.getIrrigationPlanWater, parameter);

// 新增需水审批
export const addWaterApproval = parameter =>
    $request("post", api.waterApprovalCRUD, parameter);
// 编辑需水审批
export const editWaterApproval = parameter =>
    $request("put", api.waterApprovalEditBatch, parameter);
// 月度用水量
export const getMonthlyWaterUse = parameter =>
    $request("get", api.getMonthlyWaterUse, parameter);
// 下级站点需水申报信息
export const childrenWaterDemandDeclaration = parameter =>
    $request("get", api.childrenWaterDemandDeclaration, parameter);
// 查询该渠道需水申报信息
export const itselfWaterDemandDeclaration = parameter =>
    $request("get", api.itselfWaterDemandDeclaration, parameter);

// 按月份查询该渠道需水申报信息
export const getItselfWaterDemandDeclarationByMonths = parameter =>
    $request("get", api.getItselfWaterDemandDeclarationByMonths, parameter);

// 按月返回当前建筑物下级所有渠道的所有作物的需水量
export const selectCropQuataByBuilding = parameter =>
    $request("get", api.selectCropQuataByBuilding, parameter);

// 按月返回当前建筑物的放水停水时间
export const getItselfWaterShutdownAndReleaseByMonths = parameter =>
    $request("get", api.getItselfWaterShutdownAndReleaseByMonths, parameter);

// 用水户关联渠道站点
export const userBuildingList = parameter =>
    $request("get", api.userBuildingList, parameter);
// 所有渠道关联站点
export const allBuildingList = parameter =>
    $request("get", api.allBuildingList, parameter);
// 需水申报 -- 用水过程线
export const getWaterUseHydrograph = parameter =>
    $request("get", api.getWaterUseHydrograph, parameter);

// 配水计划页面
// 配水计划 -- 平衡区供水细节表格
export const getWaterDemandDetails = parameter =>
    $request("get", api.getWaterDemandDetails, parameter);

// 指令下达，执行与反馈
export const waterInstructionList = parameter =>
    $request("get", api.waterInstructionList, parameter);
export const waterInstructionCRUD4Retrieve = id =>
    $request("delete", `${api.waterDemandCRUD}/${id}`, {});
export const waterInstructionCRUD4Create = parameter =>
    $request("post", api.waterDemandCRUD, parameter);
export const waterInstructionCRUD4Update = parameter =>
    $request("put", api.waterDemandCRUD, parameter);
export const waterInstructionCRUD4Delete = id =>
    $request("delete", `${api.waterDemandCRUD}/${id}`, {});
// 调度演算
export const waterDeductionTree = parameter =>
    $request("get", api.waterDeductionTree, parameter);
export const waterDeductionList = parameter =>
    $request("get", api.waterDeductionList, parameter);
export const waterDeductionCRUD4Retrieve = id =>
    $request("delete", `${api.waterDemandCRUD}/${id}`, {});
export const waterDeductionCRUD4Create = parameter =>
    $request("post", api.waterDemandCRUD, parameter);
export const waterDeductionCRUD4Update = parameter =>
    $request("put", api.waterDemandCRUD, parameter);
export const waterDeductionCRUD4Delete = id =>
    $request("delete", `${api.waterDemandCRUD}/${id}`, {});
// 调度大事记
export const waterRecordList = parameter =>
    $request("get", api.waterRecordList, parameter);
export const waterRecordCRUD4Retrieve = id =>
    $request("delete", `${api.waterDemandCRUD}/${id}`, {});
export const waterRecordCRUD4Create = parameter =>
    $request("post", api.waterDemandCRUD, parameter);
export const waterRecordCRUD4Update = parameter =>
    $request("put", api.waterDemandCRUD, parameter);
export const waterRecordCRUD4Delete = id =>
    $request("delete", `${api.waterDemandCRUD}/${id}`, {});

export const floodWarningInfo = parameter =>
    $request("get", api.floodWarningInfo, parameter);
// 根据建筑物类型获取建筑物Id列表
export const selectBuildingListByType = parameter =>
    $request("get", api.selectBuildingListByType, parameter);

//指令下达-指令列表
export const getWaterInstructionList = parameter =>
    $request("get", api.waterInstructionList, parameter);
//指令下达-详情
export const getWaterInstructionDetail = id =>
    $request("get", `${api.waterInstructionCURD}/${id}`, {});
//指令下达-新增
export const addWaterInstruction = parameter =>
    $request("post", api.waterInstructionCURD, parameter);
//指令下达-编辑
export const editWaterInstruction = parameter =>
    $request("put", api.waterInstructionCURD, parameter);
//指令下达-删除
export const deleteWaterInstruction = id =>
    $request("delete", `${api.waterInstructionCURD}/${id}`, {});
//调度大事记
//export const getWaterRecordList = parameter => $request("get", api.waterRecordList, parameter)

// 泵站检修
// 泵站检修列表
export const getJianxiuTypeL1 = parameter =>
    $request("get", `${api.getJianxiuTypeL1}?itemLevel=1`, parameter);
export const getJianxiuTypeL2 = parameter =>
    $request("get", api.getJianxiuTypeL2, parameter);
// 泵站检修详情
export const getJianxiuRecordList = parameter =>
    $request("get", api.getJianxiuRecordList, parameter);
export const getJianxiuRecordCRUD4R = id =>
    $request("get", `${api.getJianxiuRecordCRUD}/${id}`, {});
export const getJianxiuRecordCRUD4C = parameter =>
    $request("post", api.getJianxiuRecordCRUD, parameter);
export const getJianxiuRecordCRUD4U = parameter =>
    $request("put", api.getJianxiuRecordCRUD, parameter);
export const getJianxiuRecordCRUD4D = id =>
    $request("delete", `${api.getJianxiuRecordCRUD}/${id}`, {});

//部门管理-查询列表
export const getDepartmentInfoList = parameter =>
    $request("get", api.departmentInfo, parameter);
//部门管理-详情
export const getDepartmentInfoDetail = id =>
    $request("get", `${api.departmentCURD}/${id}`, {});
//部门管理-新增
export const addDepartment = parameter =>
    $request("post", api.departmentCURD, parameter);
//部门管理-编辑
export const editDepartment = parameter =>
    $request("put", api.departmentCURD, parameter);
//部门管理-删除
export const deleteDepartment = id =>
    $request("delete", `${api.departmentCURD}/${id}`, {});

//用水户管理-列表
export const getWaterUserList = parameter =>
    $request("get", api.waterUserInfo, parameter);
//用水户管理-详情
export const getWaterUserDetail = id =>
    $request("get", `${api.waterUserCURD}/${id}`, {});
//用水户管理-新增
export const addWaterUser = parameter =>
    $request("post", api.waterUserCURD, parameter);
//用水户管理-编辑
export const editWaterUser = parameter =>
    $request("put", api.waterUserCURD, parameter);
//用水户管理-删除
export const deleteWaterUser = id =>
    $request("delete", `${api.waterUserCURD}/${id}`, {});
// 用水户用水统计
export const queryWaterUserStatistic = parameter =>
    $request("get", `${api.waterUserStatistic}`, parameter);

// 地图：首页搜索
export const queryBuildingNameOrCode = nameOrCode =>
    $request(
        "get",
        `${api.queryBuildingNameOrCode}?nameOrCode=${nameOrCode}`,
        {}
    );

export const queryBuildingRunningData = parameter =>
    $request("get", `${api.queryBuildingRunningData}`, parameter);

export const queryBuildingRunningState = parameter =>
    $request("get", `${api.queryBuildingRunningState}`, parameter);

//灌溉制度设计成果-作物用水定额-列表
export const getWaterQuotaList = parameter =>
    $request("get", api.waterQuotaPage, parameter);
//灌溉制度设计成果-作物用水定额-详情
export const getWaterQuotaDetail = id =>
    $request("get", `${api.waterQuotaCURD}/${id}`, {});
//灌溉制度设计成果-作物用水定额-新增
export const addWaterQuota = parameter =>
    $request("post", api.waterQuotaCURD, parameter);
//灌溉制度设计成果-作物用水定额-编辑
export const editWaterQuota = parameter =>
    $request("put", api.waterQuotaCURD, parameter);
//灌溉制度设计成果-作物用水定额-删除
export const deleteWaterQuota = id =>
    $request("delete", `${api.waterQuotaCURD}/${id}`, {});

// 水库相关
export const reservoirInfoAll = parameter =>
    $request("get", api.reservoirInfoAll, parameter);
export const getReservoirBindableList = parameter =>
    $request("put", api.getReservoirBindableList, parameter); // 地图上可关联的渡槽列表
export const reservoirInfoList = parameter =>
    $request("get", api.reservoirInfoList, parameter);
export const reservoirInfoPage = parameter =>
    $request("get", api.reservoirInfoPage, parameter);
export const reservoirInfoFrontendPage = parameter =>
    $request("get", api.reservoirInfoFrontendPage, parameter);
export const reservoirInfoDetail = id =>
    $request("get", `${api.reservoirInfoCRUD}/${id}`, {}); // 详情
export const queryResStorage = parameter =>
    $request("get", api.queryResStorage, parameter); // 查询水库的水位及库容
export const queryPeriodResStorage = parameter =>
    $request("get", api.queryPeriodResStorage, parameter); // 查询一段时间的水库的水位及库容
export const reservoirInfoAdd = parameter =>
    $request("post", api.reservoirInfoCRUD, parameter); // 新增
export const reservoirInfoEdit = parameter =>
    $request("put", api.reservoirInfoCRUD, parameter); // 修改
export const reservoirInfoDelete = id =>
    $request("delete", `${api.reservoirInfoCRUD}/${id}`, {}); // 删除
export const reservoirInfoExport = parameter =>
    $request("get", api.reservoirInfoExport, parameter); // 导出
export const reservoirInfoBind = parameter =>
    $request("put", api.reservoirInfoBind, parameter); // 绑定到地图
//水库其它信息
export const selectResExtraInfo = id =>
    $request("get", `${api.resExtraInfoCRUD}/${id}`, {}); // 详情
export const resExtraInfoAdd = parameter =>
    $request("post", api.resExtraInfoCRUD, parameter); // 新增
export const resExtraInfoEdit = parameter =>
    $request("put", api.resExtraInfoCRUD, parameter); // 修改
export const resExtraInfoDelete = id =>
    $request("delete", `${api.resExtraInfoCRUD}/${id}`, {}); // 删除

// 水库大坝相关
export const damInfoAll = parameter =>
    $request("get", api.damInfoAll, parameter);
export const getDamBindableList = parameter =>
    $request("put", api.getDamBindableList, parameter); // 地图上可关联的渡槽列表
export const getDamBindableMainDamList = parameter =>
    $request("get", api.getDamBindableList, parameter); // 地图上可关联的渡槽列表
export const getDamBindableAuxDamList = parameter =>
    $request("get", api.getDamBindableList, parameter); // 地图上可关联的渡槽列表

export const getDamBindableListByUsed = parameter =>
    $request("get", api.getDamBindableListByUsed, parameter); // 获取可用大坝
export const damInfoList = parameter =>
    $request("get", api.damInfoList, parameter);
export const damInfoDetail = id =>
    $request("get", `${api.damInfoCRUD}/${id}`, {}); // 详情
export const damInfoAdd = parameter =>
    $request("post", api.damInfoCRUD, parameter); // 新增
export const damInfoEdit = parameter =>
    $request("put", api.damInfoCRUD, parameter); // 修改
export const damInfoDelete = id =>
    $request("delete", `${api.damInfoCRUD}/${id}`, {}); // 删除
export const damInfoExport = parameter =>
    $request("get", api.damInfoExport, parameter); // 导出
export const damInfoBind = parameter =>
    $request("put", api.damInfoBind, parameter); // 绑定到地图
export const getRelatedBindableStationList = parameter =>
    $request("get", api.getRelatedBindableStationList, parameter); // 查找水库关联的测站
export const getRelatedBindableChannelList = parameter =>
    $request("get", api.getRelatedBindableChannelList, parameter); // 查找水库关联的渠道
export const getRelatedBindableGateList = parameter =>
    $request("get", api.getRelatedBindableGateList, parameter); // 查找水库关联的涵闸

// 渡槽相关
export const flumInfoAll = parameter =>
    $request("get", api.flumInfoAll, parameter);
export const getFlumBindableList = parameter =>
    $request("put", api.getFlumBindableList, parameter); // 地图上可关联的渡槽列表
export const flumInfoList = parameter =>
    $request("get", api.flumInfoList, parameter);

export const ReserviorflumInfoList = parameter =>
    $request("get", api.ReserviorflumInfoList, parameter);
export const selectflumChannelTree = parameter =>
    $request("get", api.selectflumChannelTree, parameter);

export const flumInfoDetail = id =>
    $request("get", `${api.flumInfoCRUD}/${id}`, {}); // 详情
export const flumInfoAdd = parameter =>
    $request("post", api.flumInfoCRUD, parameter); // 新增
export const flumInfoEdit = parameter =>
    $request("put", api.flumInfoCRUD, parameter); // 修改
export const flumInfoDelete = id =>
    $request("delete", `${api.flumInfoCRUD}/${id}`, {}); // 删除
export const flumInfoExport = parameter =>
    $request("get", api.flumInfoExport, parameter); // 导出
export const flumInfoBind = parameter =>
    $request("put", api.flumInfoBind, parameter); // 绑定到地图

// 涵洞相关
export const culvInfoAll = parameter =>
    $request("get", api.culvInfoAll, parameter);
export const getCulvBindableList = parameter =>
    $request("put", api.getCulvBindableList, parameter); // 地图上可关联的渡槽列表
export const culvInfoList = parameter =>
    $request("get", api.culvInfoList, parameter);
export const selectCulvTree = parameter =>
    $request("get", api.selectCulvTree, parameter);

export const culvInfoDetail = id =>
    $request("get", `${api.culvInfoCRUD}/${id}`, {}); // 详情
export const culvInfoAdd = parameter =>
    $request("post", api.culvInfoCRUD, parameter); // 新增
export const culvInfoEdit = parameter =>
    $request("put", api.culvInfoCRUD, parameter); // 修改
export const culvInfoDelete = id =>
    $request("delete", `${api.culvInfoCRUD}/${id}`, {}); // 删除
export const culvInfoExport = parameter =>
    $request("get", api.culvInfoExport, parameter); // 导出
export const culvInfoBind = parameter =>
    $request("put", api.culvInfoBind, parameter); // 绑定到地图
// 溢洪道
export const selectSpillwayList = parameter =>
    $request("get", api.selectSpillwayList, parameter);
export const updateAttSpillwayByBuildingId = parameter =>
    $request("put", api.updateAttSpillwayByBuildingId, parameter);
export const selectSpillwayListByUsed = parameter =>
    $request("get", api.selectSpillwayListByUsed, parameter);
export const selectSpillwayAll = parameter =>
    $request("get", api.selectSpillwayAll, parameter);
export const spillwayDetail = id =>
    $request("get", `${api.spillwayInfoCRUD}/${id}`, {}); // 详情
export const spillwayInfoAdd = parameter =>
    $request("post", api.spillwayInfoCRUD, parameter); // 新增
export const spillwayInfoEdit = parameter =>
    $request("put", api.spillwayInfoCRUD, parameter); // 修改
export const spillwayInfoDelete = id =>
    $request("delete", `${api.spillwayInfoCRUD}/${id}`, {}); // 删除
export const spillwayExport = parameter =>
    $request("get", api.spillwayExport, parameter); // 导出
// 维修记录主表
export const maintenanceInfoAll = parameter =>
    $request("get", `${api.maintenanceAll}`, parameter); // 详情
export const maintenanceInfoList = parameter =>
    $request("get", `${api.maintenancePage}`, parameter); // 详情
export const selectMaintenanceInfoByBuildingInfo = parameter =>
    $request("get", `${api.selectMaintenanceInfoByBuildingInfo}`, parameter); // 详情
export const maintenanceInfoDetail = id =>
    $request("get", `${api.maintenanceCRUD}/${id}`, {}); // 详情
export const maintenanceInfoAdd = parameter =>
    $request("post", api.maintenanceCRUD, parameter); // 新增
export const maintenanceInfoEdit = parameter =>
    $request("put", api.maintenanceCRUD, parameter); // 修改
export const maintenanceInfoDelete = id =>
    $request("delete", `${api.maintenanceCRUD}/${id}`, {}); // 删除
// 维修记录详情
export const maintenanceRecordInfoAll = parameter =>
    $request("get", `${api.maintenanceRecordAll}`, parameter); // 详情
export const maintenanceRecordInfoList = parameter =>
    $request("get", `${api.maintenanceRecordPage}`, parameter); // 详情

export const maintenanceRecordInfoPageAll = parameter =>
    $request("get", `${api.maintenanceRecordPageAll}`, parameter); // 详情
export const maintenanceRecordInfoDetail = id =>
    $request("get", `${api.maintenanceRecordCRUD}/${id}`, {}); // 详情
export const maintenanceRecordInfoAdd = parameter =>
    $request("post", api.maintenanceRecordCRUD, parameter); // 新增
export const maintenanceRecordInfoEdit = parameter =>
    $request("put", api.maintenanceRecordCRUD, parameter); // 修改
export const maintenanceRecordInfoDelete = id =>
    $request("delete", `${api.maintenanceCRUD}/${id}`, {}); // 删除
export const updateMaintenanceRecordList = parameter =>
    $request("put", api.updateMaintenanceRecordList, parameter); // 修改

// 沉砂池相关
export const sedInfoAll = parameter =>
    $request("get", api.sedInfoAll, parameter);
export const getSedBindableList = parameter =>
    $request("put", api.getSedBindableList, parameter); // 地图上可关联的渡槽列表
export const sedInfoList = parameter =>
    $request("get", api.sedInfoList, parameter);
export const sedInfoDetail = id =>
    $request("get", `${api.sedInfoCRUD}/${id}`, {}); // 详情
export const sedInfoAdd = parameter =>
    $request("post", api.sedInfoCRUD, parameter); // 新增
export const sedInfoEdit = parameter =>
    $request("put", api.sedInfoCRUD, parameter); // 修改
export const sedInfoDelete = id =>
    $request("delete", `${api.sedInfoCRUD}/${id}`, {}); // 删除
export const sedInfoExport = parameter =>
    $request("get", api.sedInfoExport, parameter); // 导出
export const sedInfoBind = parameter =>
    $request("put", api.sedInfoBind, parameter); // 绑定到地图

export const getAssociatedSitesOfBuilding = id =>
    $request("get", `${api.getAssociatedSitesOfBuilding}/${id}`, {}); //

export const updateSitesOfBuilding = parameter =>
    $request("post", api.updateSitesOfBuilding, parameter);

export const getDeviceAccessSiteList = parameter =>
    $request("get", api.deviceAccessSiteList, parameter); //查询测站自动站关联站点

export const selectBuildingImageByBuildingInfo = parameter =>
    $request("get", `${api.buildingImageCRUD}/list`, parameter);
export const addBuildingImage = parameter =>
    $request("post", api.buildingImageCRUD, parameter);

export const editBuildingImage = parameter =>
    $request("put", api.buildingImageCRUD, parameter);
export const deleteBuildingImage = id =>
    $request("delete", `${api.buildingImageCRUD}/${id}`, {});

// 墒情站
export const getSoilList = parameter =>
    $request("get", api.getSoilList, parameter);
export const getSoilListDataLastest = parameter =>
    $request("get", api.getSoilListDataLastest, parameter);
export const getSoilListDataList = parameter =>
    $request("get", api.getSoilListDataList, parameter);
export const soilListDataCRUD4Create = parameter =>
    $request("post", api.getSoilListDataCRUD, parameter);
export const soilListDataCRUD4Update = parameter =>
    $request("put", api.getSoilListDataCRUD, parameter);
export const soilListDataCRUD4Delete = parameter =>
    $request("delete", api.getSoilListDataCRUD, parameter);
export const soilListDataCRUD4Read = id =>
    $request("get", `${api.getSoilListDataCRUD}/${id}`, {});

export const getSoilInfoList = parameter =>
    $request("get", api.getSoilInfoList, parameter);
export const soilInfoDataCRUD4Create = parameter =>
    $request("post", api.getSoilInfoCRUD, parameter);
export const soilInfoDataCRUD4Update = parameter =>
    $request("put", api.getSoilInfoCRUD, parameter);
export const soilInfoDataCRUD4Delete = parameter =>
    $request("delete", api.getSoilInfoCRUD, parameter);
export const soilInfoDataCRUD4Read = id =>
    $request("get", `${api.getSoilInfoCRUD}/${id}`, {});

export const selectBuildingOnChannel = parameter =>
    $request("get", api.selectBuildingOnChannel, parameter);

// 查询所有渠道建筑物树结构
export const selectAllNodesBuilding = parameter =>
    $request("get", api.selectAllNodesBuilding, parameter);

// 查询实时流量数据信息
export const getSetFlowByTypeAndStcd = parameter =>
    $request("get", api.getSetFlowByTypeAndStcd, parameter);
// 保存流量设置实时数据
export const saveSetFlowStationData = parameter =>
    $request("post", api.saveSetFlowStationData, parameter);
// 分页查询历史实时数据
export const pageHistorySetFlow = parameter =>
    $request("get", api.pageHistorySetFlow, parameter);

// 查询iot系统配置信息列表
export const listIotSystemConfig = parameter =>
    $request("get", api.iotSystemConfigList, parameter);
// 查询iot系统配置信息分页列表
export const pageIotSystemConfig = parameter =>
    $request("get", api.iotSystemConfigPageList, parameter);
// 根据id查询iot系统配置
export const getIotSystemConfigById = parameter =>
    $request("get", api.getIotSystemConfigById, parameter);
// 新增iot系统配置
export const addIotSystemConfig = parameter =>
    $request("post", api.addIotSystemConfig, parameter);
// 修改iot系统配置
export const editIotSystemConfig = parameter =>
    $request("put", api.editIotSystemConfig, parameter);
// 根据id删除iot系统配置
export const deleteIotSystemConfigById = id =>
    $request("delete", `${api.deleteIotSystemConfigById}/${id}`, {}); // 删除
// 通过iot系统编码查询指iot系统配置是否已存在
export const isExistsByIotSystemCode = parameter =>
    $request("get", api.isExistsByIotSystemCode, parameter);
// 通过序号查询指iot系统配置是否已存在
export const isExistsByIotSystemSortNo = parameter =>
    $request("get", api.isExistsByIotSystemSortNo, parameter);

// 查询iot区域设备信息列表
export const iotAreaDeviceList = parameter =>
    $request("get", api.iotAreaDeviceList, parameter);
// 查询iot区域设备信息分页列表
export const pageIotAreaDevice = parameter =>
    $request("get", api.iotAreaDevicePageList, parameter);
// 查询iot区域设备信息数量
export const countIotAreaDevice = parameter =>
    $request("get", api.iotAreaDeviceCount, parameter);
//同步iot区域设备
export const synchrIotAreaDevice = parameter =>
    $request("get", api.synchrIotAreaDevice, parameter);
//绑定区域
export const bindIotArea = parameter =>
    $request("post", api.bindIotArea, parameter);
//取消绑定区域
export const unBindIotArea = parameter =>
    $request("post", api.unBindIotArea, parameter);
//批量删除
export const deleteIotAreas = parameter =>
    $request("post", api.deleteIotAreas, parameter);
//导入设备
export const importIotDevice = parameter =>
    $request("post", api.importIotDevice, parameter);
//按建筑物类型查询-查询顶级
export const getTopByBuildingType = parameter =>
    $request("get", api.getTopByBuildingType, parameter);
//按建筑物类型查询-查询下级
export const getSubByBuildingType = parameter =>
    $request("get", api.getSubByBuildingType, parameter);
//按渠道树查询-查询顶级
export const getTopByChannel = parameter =>
    $request("get", api.getTopByChannel, parameter);
//按渠道树查询-查询下级
export const getSubByChannelId = parameter =>
    $request("get", api.getSubByChannelId, parameter);
//获得一条iot系统配置记录
export const getSystemAreaDevice = parameter =>
    $request("get", api.getSystemAreaDevice, parameter);
// 新增iot系统设备
export const addSystemAreaDevice = parameter =>
    $request("post", api.addSystemAreaDevice, parameter);
// 通过视频编码查询指iot系统设备编码是否已存在
export const isExistsByIotAreaDeviceIndexCode = parameter =>
    $request("get", api.isExistsByIotAreaDeviceIndexCode, parameter);

// 河道水情-查询测站水位列表
export const queryStRiverRList = parameter =>
    $request("post", api.stRiverRQueryList, parameter);
// 河道水情-查询测站水位分页列表
export const queryStRiverRPage = parameter =>
    $request("get", api.stRiverRQueryPage, parameter);
// 河道水情-查询测站流量列表
export const queryStFlowList = parameter =>
    $request("post", api.stFlowQueryList, parameter);
// 河道水情-查询测站流量分页列表
export const queryStFlowPage = parameter =>
    $request("get", api.stFlowQueryPage, parameter);
// 河道水情-查询测站降雨量列表
export const queryStPptnRList = parameter =>
    $request("post", api.stPptnRQueryList, parameter);
// 河道水情-查询测站降雨量分页列表
export const queryStPptnRPage = parameter =>
    $request("get", api.stPptnRQueryPage, parameter);
// 消息推送-查询消息列表
export const queryMessageList = parameter =>
    $request("get", api.messageList, parameter);

export const queryMessagePage = parameter =>
    $request("get", api.messagePage, parameter);
// 消息推送-根据类型查询消息列表
export const querymessageInfosByType = parameter =>
    $request("get", api.messageInfosByType, parameter);
// 标记消息已处理
export const markMsgSolved = parameter =>
    $request("put", api.markMsgSolved, parameter);

// 渠道管理段放水停水用水-数据报表，日报表查询
export const selectManagementUnitDayWaterTree = parameter =>
    $request("get", api.selectManagementUnitDayWaterTree, parameter);
// 渠道管理段放水停水用水-数据报表，月报表查询
export const selectManagementUnitMonthWaterTree = parameter =>
    $request("get", api.selectManagementUnitMonthWaterTree, parameter);
// 渠道站点放水停水用水-数据报表，干渠、支渠日报表查询
export const selectChannelStationDayWaterTree = parameter =>
    $request("get", api.selectChannelStationDayWaterTree, parameter);
// 渠道站点用水-数据报表，干渠、支渠月报表查询
export const selectChannelStationMonthWaterTree = parameter =>
    $request("get", api.selectChannelStationMonthWaterTree, parameter);

// 站点放水停水-查询站点放水停水记录分页列表
export const stationOpenStopWaterPage = parameter =>
    $request("get", api.stationOpenStopWaterPage, parameter);
// 站点放水停水-查询站点放水停水记录列表
export const stationOpenStopWaterList = parameter =>
    $request("get", api.stationOpenStopWaterList, parameter);

// 根据渠道id查询下一级渠道
export const selectSubChannelById = parameter =>
    $request("get", api.selectSubChannelById, parameter);

// 用水计量，站点计量修改
export const stationMeasurementEdit = parameter =>
    $request("put", api.stationMeasurementCURD, parameter); // 修改

//  获取所有权限字段
export const getAllPerms = parameter =>
    $request("get", api.getAllPerms, parameter);

// 通过buildingId和buildingType查询UnifiedBuildingInfo
export const selectBuildingInfoByIdAndType = parameter =>
    $request("get", api.selectBuildingInfoByIdAndType, parameter);

export const addOrUpdateParam = parameter =>
    $request("put", api.addOrUpdateParam, parameter);

// 获取参数设置列表
export const selectParameterList = parameter =>
    $request("get", api.selectParameterList, parameter);

// 删除参数设置
export function deleteParamById(id) {
  return $request("delete", `${api.deleteParamById}/${id}`, {});
}

export const queryAllUnyiedBuildingInfo = parameter =>
    $request("get", api.queryAllUnyiedBuildingInfo, parameter);

// 地图弹出框查询站点实时数据
export const getChannelWaterRealData = parameter =>
    $request("get", api.getChannelWaterRealData, parameter);
// 地图渠道权限
export const getChannelWaterTree = parameter =>
    $request("get", api.getChannelWaterTree, parameter);
// 地图渠道通水状态
export const getChannelWaterStatus = parameter =>
    $request("get", api.getChannelWaterStatus, parameter);

export const querySimpleUnyiedBuildingInfo = parameter =>
    $request("get", api.querySimpleUnyiedBuildingInfo, parameter);

export const checkApply = parameter =>
    $request("post", api.checkApply, parameter);
