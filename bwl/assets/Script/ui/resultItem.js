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
        btnLabel: {
            default: null,
            type: cc.Label,
            tooltip: "显示的内容",
        },
    },
    onLoad() {
        this.initBtnLabel(this.node.data["name"])
    },
    start () {

    },
    /**
     *  设置按钮的内容
     */
    initBtnLabel(data) {
        if (this.btnLabel) {
            this.btnLabel.string = data;
        }
    },
    /**
     *  查看信息详情
     */
    onEnterInfoClick() {
        cc.log(`信息的详情: ${this.node.dataIndex}`);
        cc.loader.loadRes("Prefabs/SigleInfo", (err, prefab) => {
            if (err) {
                cc.log(err);
                return;
            }
            const resultNode = cc.instantiate(prefab);
            resultNode.dataIndex = this.node.dataIndex;
            resultNode.data = this.node.data;
            cc.find("Canvas").addChild(resultNode);
        });
    },
});
