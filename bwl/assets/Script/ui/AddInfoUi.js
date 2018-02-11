/**
 *  添加信息的ui层
 */

cc.Class({
    extends: cc.Component,

    properties: {
        bg: {
            default: null,
            type: cc.Node,
            tooltip: "显示ui",
        }
    },

    // use this for initialization
    onLoad: function () {
        if (this.bg) {
            this.bg.runAction(cc.moveTo(0.3, (cc.p(0, 0))));
        }
    },
    /**
     *  返回的事件
     */
    onClickReturn() {
        if (this.bg) {
            this.bg.runAction(cc.sequence(cc.moveTo(0.2, (cc.p(830, 0))), cc.callFunc(() => {
                this.node.destroy();
            })));
        }
    },
    /**
     *  确认添加信息
     */
    onClickFixAdd() {
        cc.log(`确认添加信息`);
        let str = "";
        let data = {};
        if (this.bg) {
            for (let i = 1; i < 5; i ++) {
                const editboxNode = this.bg.getChildByName("EditBox" + i);
                if (editboxNode) {
                    str += editboxNode.getChildByName("editBox").getComponent(cc.EditBox).string;
                }
                data[cc.viewConfig.itemKey[i]] = editboxNode.getChildByName("editBox").getComponent(cc.EditBox).string;
            }
        }
        cc.log(`输入内容为：${str}`);
        cc.dataControl.addData(cc.viewConfig.dataKey, data);
        this.onClickReturn();
    },

});
