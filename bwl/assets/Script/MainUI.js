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

    },

    onLoad() {
        cc.dataControl.initData()
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
});
