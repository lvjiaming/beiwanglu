cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
       // this.label.string = this.text;
       //  cc.sys.localStorage.setItem("name", "asdasdasdasdafalfsjaksfljklafjhlkafshlkjasfhjakshfdauidhahflahfjkahsfjkahsfkjahfkjashfkjasfhkjasfhkjasfhkajsfhakjfhkjasfhkjasfhkajsfhakjsfasfk" +
       //      "ajksdhajfakjsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaasdpoqiwlkasjdlka")
       //  cc.log(cc.sys.localStorage.getItem("name"));
       //  cc.sys.localStorage.setItem("listData", JSON.stringify({hah: [{name: 2, age: 3, xb: 4}]}));
       //  cc.dataControl.getData();
       //  cc.dataControl.addData("hah", {name: 1, age: 2, xb: 3});
    },

    // called every frame
    update: function (dt) {

    },
});
