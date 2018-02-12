
const CommonTip = cc.Class({
    statics: {
        getInstance() {
            if (!this.commonTip) {
                this.commonTip = new CommonTip();
            }
            return this.commonTip;
        },
    },
    _thisNode: null,
    _thisParNode: null,
    _INDEX: null,
    /**
     *  构造函数
     */
    ctor() {
        this._thisNode = null;
        this._thisParNode = null;
        this._INDEX = 100;
    },
    /**
     *  初始化函数
     */
    init(node) {
        this._thisParNode = node;
    },
    /**
     *  显示提示
     * @param str  显示的内容
     */
    show(str) {
        if (!this._thisParNode) {
            cc.log(`未初始化`);
            return;
        }
        if (this._thisNode) {
            this._thisNode.destroy();
            this._thisNode = null;
        }
        this._thisNode = new cc.Node();
        const lab = this._thisNode.addComponent(cc.Label);
        lab.string = str;
        this._thisNode.setPosition(cc.p(0, 520));
        lab.fontSize = 28;
        this._thisParNode.addChild(this._thisNode, this._INDEX);
        this._thisNode.setScale(0.1);
        this._thisNode.runAction(cc.sequence(cc.scaleTo(0.2, 1), cc.delayTime(0.8), cc.fadeOut(0.3), cc.callFunc(() => {
            if (this._thisNode) {
                this._thisNode.destroy();
                this._thisNode = null;
            }
        })))
    },
});
cc.commonTip = CommonTip.getInstance();