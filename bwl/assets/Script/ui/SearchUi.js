cc.Class({
    extends: cc.Component,

    properties: {
        bg: {
            default: null,
            type: cc.Node,
            tooltip: "显示ui",
        },
        content: {
            default: null,
            type: cc.Node,
            tooltip: "滑动显示内容",
        },
    },

    // use this for initialization
    onLoad: function () {
        if (this.bg) {
            this.bg.runAction(cc.sequence(cc.moveTo(0.3, (cc.p(0, 0))), cc.callFunc(() => {
                this.initResult(this.node.data);
            })));
        }
    },
    initResult(data) {
        if (this.content) {
            const childs = this.content.children;
            childs.forEach((item) => {
                item.destroy();
            });
            this.content.removeAllChildren();
        }
        if (data[cc.viewConfig.dataKey]) {
            cc.loader.loadRes("Prefabs/resultItem", (err, prefab) => {
                if (err) {
                    cc.log(err);
                    return;
                }
                data[cc.viewConfig.dataKey].forEach((item, index) => {
                    const resultNode = cc.instantiate(prefab);
                    resultNode.dataIndex = index;
                    resultNode.data = item;
                    this.content.addChild(resultNode);
                });
            });
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

});
