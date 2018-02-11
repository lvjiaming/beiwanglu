
const DataControl = cc.Class({
    statics: {
        getInstance() {
            if (!this.dataControl) {
                this.dataControl = new DataControl();
            }
            return this.dataControl;
        },
    },
    _data: null,  // 读取的数据
    ctor() {
        this._data = {};
    },
    /**
     *  保存数据到本地
     */
    setData() {
        cc.sys.localStorage.setItem("listData", JSON.stringify(this._data));
    },
    /**
     *  初始化数据
     */
    initData() {
        this._data = JSON.parse(cc.sys.localStorage.getItem("listData"));
        if (!this._data) {
            this._data = {};
        }
    },
    /**
     *  读取数据
     */

    getData() {
        return this._data;
    },
    /**
     *  添加一条数据
     * @param name 数据的名字
     * @param data 数据
     */
    addData(name, data) {
        if (!this._data[name]) {
            this._data[name] = [];
        }
        this._data[name].push(data);
        this.setData();
    },
});
cc.dataControl = DataControl.getInstance();