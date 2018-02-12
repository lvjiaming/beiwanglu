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
    onClickFixAdd(event) {
        cc.log(`确认添加信息`);
        let str = "";
        let data = {};
        let num = 0;
        if (this.bg) {
            for (let i = 1; i < 5; i ++) {
                const editboxNode = this.bg.getChildByName("EditBox" + i);
                if (editboxNode) {
                    str += editboxNode.getChildByName("editBox").getComponent(cc.EditBox).string;
                }
                if (!editboxNode.getChildByName("editBox").getComponent(cc.EditBox).string) {
                    num ++;
                }
                data[cc.viewConfig.itemKey[i]] = editboxNode.getChildByName("editBox").getComponent(cc.EditBox).string;
            }
        }
        if (num == 4) {
            cc.log(`所有内容都没有输入`);
            cc.commonTip.show("请至少输入一项信息！");
            return;
        }
        cc.log(`输入内容为：${str}`);
        cc.dataControl.addData(cc.viewConfig.dataKey, data);
        cc.commonTip.show("保存信息成功！");
        this.onClickReturn();
    },

});
