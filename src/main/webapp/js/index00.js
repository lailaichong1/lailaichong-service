//实例化vue对象
new Vue({
    el: "#vue-app",
    data: {
        name: "小蓝",
        age: "18",
        a520:"http//:www.baidu.com",
        input11:"input 练习",
    },
    methods: {
        biaobai: function () {
            return "I Love you " + this.name + " !";
        },
        inputTest:function(){
            console.log(this.input11);
        }
    }

});
/*
* el:element 需要获取的元素，一定是跟容器
* data：用于数据的存储
* */

new Vue({
    el:"#compute-test",
    data:{
        a:10,
        b:1,
        age:18
    },
    methods:{
       /* addA:function(){
            console.log("方法a执行了")
            return this.a + this.age;
        },
        addB:function(){
            console.log("方法b执行了")
            return this.b + this.age;
        }*/
    },
    computed:{
        addA:function(){
            console.log("方法a执行了")
            return this.a + this.age;
        },
        addB:function(){
            console.log("方法b执行了")
            return this.b + this.age;
        }
    }

})
// css动态绑定
new Vue({
    el:"#vue-cssTest",
    data:{
        changeColor:false,
        changeLength:false
    },
    methods:{
        color:function(){
            console.log(this.changeColor);
        }
    }

})