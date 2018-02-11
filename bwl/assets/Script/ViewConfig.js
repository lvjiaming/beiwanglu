
// 页面配置
const ViewConfig = {
    _TableList: {},  // 表的列表
    _ItemList: {},  // 元素的列表
};

ViewConfig.addConfig = () => {

};
ViewConfig.itemKey = [
    null,
    "name",
    "phoneNum",
    "carNum",
    "other"
];
ViewConfig.dataKey = "data1";

exports = ViewConfig;
cc.viewConfig = ViewConfig;