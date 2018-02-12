// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        searchEditBox: {
            default: null,
            type: cc.Node,
            tooltip: "搜索输入框",
        },
        preBtn: {
            default: null,
            type: cc.Button,
            tooltip: "当前的按钮",
        },
        preItem: "name",
    },

    onLoad() {
        cc.dataControl.initData();
        cc.commonTip.init(this.node);
        if (this.preBtn) {
            this.preBtn.interactable = false;
        }
    },

    start () {

    },
    /**
     *  添加信息
     */
    onClick_addBtn() {
        cc.log(`添加信息`);
        cc.loader.loadRes("Prefabs/addInfoUI", (err, prefab) => {
            if (err) {
                cc.error(err);
            } else {
                const addUI = cc.instantiate(prefab);
                this.node.addChild(addUI);
            }
        });
    },
    /**
     *  搜索全部
     */
    onClickSeachAll() {
        cc.log(`搜索全部`);
        cc.loader.loadRes("Prefabs/seachResult", (err, prefab) => {
            if (err) {
                cc.error(err);
            } else {
                const resultUI = cc.instantiate(prefab);
                resultUI.data = cc.dataControl.getData();
                this.node.addChild(resultUI);
            }
        });
    },
    /**
     *  选择分类
     * @param event
     * @param custom
     */
    onClickSelect(event, custom) {
        if (this.preBtn) {
            this.preBtn.interactable = true;
        }
        this.preBtn = event.target.getComponent(cc.Button);
        this.preBtn.interactable = false;
        this.preItem = cc.viewConfig.itemKey[parseInt(custom)];
        cc.log(`选择的搜索条件为${this.preItem}`);
    },
    /**
     *  确认搜索
     */
    onClickFixSearch() {
        if (this.searchEditBox) {
            if (this.searchEditBox.getComponent(cc.EditBox).string) {
                cc.loader.loadRes("Prefabs/seachResult", (err, prefab) => {
                    if (err) {
                        cc.error(err);
                    } else {
                        const resultUI = cc.instantiate(prefab);

                        let newData = {};
                        newData[cc.viewConfig.dataKey] = [];
                        cc.dataControl.getData()[cc.viewConfig.dataKey].forEach((item) => {
                            if (item[this.preItem].indexOf(this.searchEditBox.getComponent(cc.EditBox).string) != -1) {
                                newData[cc.viewConfig.dataKey].push(item);
                            }
                        });
                        resultUI.data = newData;
                        this.node.addChild(resultUI);
                    }
                });
            } else {
                cc.commonTip.show("请输入搜索条件！");
            }
        }
    },
});
