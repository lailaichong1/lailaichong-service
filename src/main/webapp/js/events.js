new Vue({
    el:"#events",
    data:{
        age:20
    },
    methods:{
        add:function(parm){
            this.age = this.age +parm;
        },
        down:function(parm){
            this.age = this.age -parm;
        }

    }
})