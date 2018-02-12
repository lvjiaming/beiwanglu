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
        bg: {
            default: null,
            type: cc.Node,
            tooltip: "显示ui",
        },
        nameLabel: {
            default: null,
            type: cc.Label,
            tooltip: "姓名",
        },
        phoneNumLabel: {
            default: null,
            type: cc.Label,
            tooltip: "手机号",
        },
        carNumLabel: {
            default: null,
            type: cc.Label,
            tooltip: "车牌号",
        },
        otherLabel: {
            default: null,
            type: cc.Label,
            tooltip: "备注",
        },
    },


    onLoad () {
        this.initNote();
        if (this.bg) {
            this.bg.runAction(cc.sequence(cc.moveTo(0.3, (cc.p(0, 0))), cc.callFunc(() => {
               // this.initNote()
            })));
        }
    },

    start () {

    },
    /**
     *  初始化信息
     */
    initNote() {
        if (this.nameLabel) {
            this.nameLabel.string = this.node.data["name"];
        }
        if (this.phoneNumLabel) {
            this.phoneNumLabel.string = this.node.data["phoneNum"];
        }
        if (this.carNumLabel) {
            this.carNumLabel.string = this.node.data["carNum"];
        }
        if (this.otherLabel) {
            this.otherLabel.string = this.node.data["other"];
        }
    },
    /**
     *  删除此条信息
     */
    onClickDes(event) {
        const data = cc.dataControl.getData();
        data[cc.viewConfig.dataKey].splice(this.node.dataIndex, 1);
        cc.dataControl.setData();
        const seachUI = cc.find("Canvas").getChildByName("seachResult");
        if (seachUI) {
            seachUI.getComponent("SearchUi").initResult(data);
        }
        cc.commonTip.show("删除信息成功！");
        this.onClickReturn();
    },
    onClickReturn() {
        if (this.bg) {
            this.bg.runAction(cc.sequence(cc.moveTo(0.2, (cc.p(830, 0))), cc.callFunc(() => {
                this.node.destroy();
            })));
        }
    },
});
